package dev.akorovai.backend.order;

import dev.akorovai.backend.handler.order.NoOrdersFoundException;
import dev.akorovai.backend.order.request.CreateOrderRequest;
import dev.akorovai.backend.order.response.OrderResponse;
import dev.akorovai.backend.orderItem.OrderItem;
import dev.akorovai.backend.product.Product;
import dev.akorovai.backend.product.ProductRepository;
import dev.akorovai.backend.security.JwtService;
import dev.akorovai.backend.shopping_cart.ShoppingCartItem;
import dev.akorovai.backend.shopping_cart.ShoppingCartItemRepository;
import dev.akorovai.backend.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OrderService {

	private final OrderRepository orderRepository;
	private final JwtService jwtService;
	private final OrderMapper orderMapper;
	private final ShoppingCartItemRepository shoppingCartItemRepository;
	private final ProductRepository productRepository;


	public List<OrderResponse> getOrdersForAuthenticatedUser() {
		User user = jwtService.getAuthenticatedUser();

		return Optional.ofNullable(orderRepository.findByUser(user))
				       .filter(list -> !list.isEmpty()).map(list -> list.stream().map(orderMapper::toResponse).collect(Collectors.toList())).orElseThrow(() -> new NoOrdersFoundException("No orders found for the authenticated user."));
	}

	@Transactional
	public OrderResponse createOrder(CreateOrderRequest request) {
		System.out.println("Incoming CreateOrderRequest: " + request);
		System.out.println("User ID in addressInfo: " + request.getAddressInfo().getUserId());

		User user = jwtService.getAuthenticatedUser();
		System.out.println("Authenticated user ID: " + user.getId());

		List<ShoppingCartItem> cartItems = shoppingCartItemRepository.findByUser(user);

		if (cartItems.isEmpty()) {
			throw new IllegalArgumentException("Cannot create an order with an empty cart.");
		}

		double totalProductPrice = cartItems.stream()
				                           .mapToDouble(item -> item.getProduct().getPrice() * item.getQuantity())
				                           .sum();

		double totalPrice = totalProductPrice + request.getShippingPrice();

		String normalizedPaymentMethod = request.getPaymentMethod().toUpperCase();
		PaymentMethod paymentMethod = PaymentMethod.valueOf(normalizedPaymentMethod);


		Order order = Order.builder()
				              .user(user)
				              .shippingTime(LocalDateTime.parse(request.getShippingTime()))
				              .shippingPrice(request.getShippingPrice())
				              .paymentMethod(paymentMethod)
				              .status(OrderStatus.IN_PROGRESS)
				              .createdAt(LocalDateTime.now())
				              .totalPrice(totalPrice)
				              .orderItems(new HashSet<>())
				              .build();


		cartItems.forEach(cartItem -> {
			Product product = cartItem.getProduct();
			int newQuantity = product.getAmount() - cartItem.getQuantity();

			if (newQuantity < 0) {
				throw new IllegalArgumentException("Insufficient stock for product: " + product.getName());
			}


			product.setAmount(newQuantity);
			productRepository.save(product);


			OrderItem orderItem = OrderItem.builder()
					                      .order(order)
					                      .product(product)
					                      .quantity(cartItem.getQuantity())
					                      .price(product.getPrice())
					                      .build();


			order.getOrderItems().add(orderItem);


			shoppingCartItemRepository.delete(cartItem);
		});

		Order savedOrder = orderRepository.save(order);

		return orderMapper.toResponse(savedOrder);
	}


	@Scheduled(cron = "0 0 0 * * ?")
	@Transactional
	public void markOrdersAsDelivered() {

		LocalDateTime now = LocalDateTime.now();


		orderRepository.findByStatusAndShippingTimeBefore(OrderStatus.IN_PROGRESS, now).stream().peek(order -> order.setStatus(OrderStatus.DELIVERED)).forEach(orderRepository::save);
	}
}