package dev.akorovai.backend.product;

import dev.akorovai.backend.color.Color;
import dev.akorovai.backend.color.ColorMapper;
import dev.akorovai.backend.color.ColorRepository;
import dev.akorovai.backend.color.response.ColorResponse;
import dev.akorovai.backend.handler.product.ProductNotFoundException;
import dev.akorovai.backend.product.mapper.ProductMapper;
import dev.akorovai.backend.product.request.ProductRequest;
import dev.akorovai.backend.product.response.ProductResponse;
import dev.akorovai.backend.product.response.ProductWithSizeAvailabilityResponse;
import dev.akorovai.backend.type.Type;
import dev.akorovai.backend.type.TypeMapper;
import dev.akorovai.backend.type.TypeRepository;
import dev.akorovai.backend.type.response.TypeResponse;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;
import java.util.concurrent.ThreadLocalRandom;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class ProductService {
	private final ProductRepository productRepository;
	private final ProductMapper productMapper;
	private final ColorMapper colorMapper;
	private final TypeMapper typeMapper;
	private final TypeRepository typeRepository;
	private final ColorRepository colorRepository;

	private Product findProductById(long productId) {
		return productRepository.findById(productId)
				       .orElseThrow(() -> {
					       log.error("Product not found with ID: {}", productId);
					       return new ProductNotFoundException("Product not found with ID: " + productId);
				       });
	}

	@Transactional
	public ProductResponse addProduct(ProductRequest productRequest) {
		log.info("Attempting to add a new product with name: {}", productRequest.getName());

		Color color = colorRepository.findByNameAndCode(productRequest.getColor().getName(), productRequest.getColor().getCode())
				              .orElseGet(() -> colorRepository.save(
						              Color.builder()
								              .name(productRequest.getColor().getName())
								              .code(productRequest.getColor().getCode())
								              .build()
				              ));


		Type type = typeRepository.findByName(productRequest.getType().getName())
				            .orElseGet(() -> typeRepository.save(
						            Type.builder()
								            .name(productRequest.getType().getName())
								            .build()
				            ));


		Product product = Product.builder()
				                  .name(productRequest.getName())
				                  .description(productRequest.getDescription())
				                  .price(productRequest.getPrice())
				                  .amount(productRequest.getAmount())
				                  .discount(productRequest.getDiscount())
				                  .size(productRequest.getSize())
				                  .gender(productRequest.getGender())
				                  .links(productRequest.getLinks() != null ? productRequest.getLinks() : new String[]{})
				                  .color(color)
				                  .type(type)
				                  .id(ThreadLocalRandom.current().nextLong(1, Long.MAX_VALUE))
				                  .build();

		Product savedProduct = productRepository.save(product);

		log.info("Product with ID: {} successfully added", savedProduct.getId());

		return ProductResponse.builder()
				       .id(savedProduct.getId())
				       .name(savedProduct.getName())
				       .description(savedProduct.getDescription())
				       .price(savedProduct.getPrice())
				       .amount(savedProduct.getAmount())
				       .discount(savedProduct.getDiscount())
				       .size(savedProduct.getSize())
				       .gender(savedProduct.getGender())
				       .links(savedProduct.getLinks())
				       .color(ColorResponse.builder()
						              .id(savedProduct.getColor().getId())
						              .name(savedProduct.getColor().getName())
						              .code(savedProduct.getColor().getCode())
						              .build())
				       .type(TypeResponse.builder()
						             .id(savedProduct.getType().getId())
						             .name(savedProduct.getType().getName())
						             .build())
				       .build();
	}

	@Transactional
	public ProductResponse modifyProductById(ProductRequest productRequest, long productId) {
		log.info("Attempting to modify product with ID: {}", productId);


		Color color = colorRepository.findByNameAndCode(productRequest.getColor().getName(), productRequest.getColor().getCode())
				              .orElseGet(() -> colorRepository.save(
						              Color.builder()
								              .name(productRequest.getColor().getName())
								              .code(productRequest.getColor().getCode())
								              .build()
				              ));

		Type type = typeRepository.findByName(productRequest.getType().getName())
				            .orElseGet(() -> typeRepository.save(
						            Type.builder()
								            .name(productRequest.getType().getName())
								            .build()
				            ));


		Product product = productRepository.findById(productId)
				                  .orElseThrow(() -> new RuntimeException("Product not found with ID: " + productId));


		product.setName(productRequest.getName());
		product.setDescription(productRequest.getDescription());
		product.setPrice(productRequest.getPrice());
		product.setAmount(productRequest.getAmount());
		product.setDiscount(productRequest.getDiscount());
		product.setSize(productRequest.getSize());
		product.setGender(productRequest.getGender());
		product.setLinks(productRequest.getLinks() != null ? productRequest.getLinks() : new String[]{});
		product.setColor(color);
		product.setType(type);

		Product updatedProduct = productRepository.save(product);
		log.info("Product with ID: {} successfully modified", productId);


		return ProductResponse.builder()
				       .id(updatedProduct.getId())
				       .name(updatedProduct.getName())
				       .description(updatedProduct.getDescription())
				       .price(updatedProduct.getPrice())
				       .amount(updatedProduct.getAmount())
				       .discount(updatedProduct.getDiscount())
				       .size(updatedProduct.getSize())
				       .gender(updatedProduct.getGender())
				       .links(updatedProduct.getLinks())
				       .color(ColorResponse.builder()
						              .id(updatedProduct.getColor().getId())
						              .name(updatedProduct.getColor().getName())
						              .code(updatedProduct.getColor().getCode())
						              .build())
				       .type(TypeResponse.builder()
						             .id(updatedProduct.getType().getId())
						             .name(updatedProduct.getType().getName())
						             .build())
				       .build();
	}

	@Transactional
	public void deleteProduct(long productId) {
		log.info("Attempting to delete product with ID: {}", productId);

		if (!productRepository.existsById(productId)) {
			log.error("Product not found with ID: {}", productId);
			throw new ProductNotFoundException("Product not found with ID: " + productId);
		}

		productRepository.deleteById(productId);
		log.info("Product with ID: {} successfully deleted", productId);
	}

	@Transactional
	public void addDiscount(int discount, long productId) {
		log.info("Attempting to add discount: {} to product with ID: {}", discount, productId);

		Product product = findProductById(productId);
		product.setDiscount(discount);
		productRepository.save(product);

		log.info("Discount: {} successfully applied to product with ID: {}", discount, productId);
	}

	@Transactional
	public List<ProductResponse> getRandomDiscountedProducts() {
		log.info("Attempting to retrieve discounted products in random order");

		List<Product> discountedProducts = productRepository.findByDiscountGreaterThan(0);
		Collections.shuffle(discountedProducts);

		log.info("Successfully retrieved {} discounted products", discountedProducts.size());
		return discountedProducts.stream()
				       .map(productMapper::toProductResponse)
				       .collect(Collectors.toList());
	}

	@Transactional
	public List<ProductResponse> getSimilarProducts(long productId) {
		log.info("Attempting to find similar products for product with ID: {}", productId);

		Product product = findProductById(productId);

		List<Product> similarProducts = productRepository.findByTypeAndGenderAndColor(
				product.getType(),
				product.getGender(),
				product.getColor()
		);

		if (similarProducts.size() < 10) {
			similarProducts.addAll(productRepository.findByAnyTwoAttributes(
					product.getType(),
					product.getGender(),
					product.getColor()
			));
		}

		if (similarProducts.size() < 10) {
			similarProducts.addAll(productRepository.findByAnyOneAttribute(
					product.getType(),
					product.getGender(),
					product.getColor()
			));
		}

		similarProducts = similarProducts.stream()
				                  .distinct()
				                  .filter(p -> !p.getId().equals(product.getId()))
				                  .collect(Collectors.toList());

		log.info("Found {} similar products for product with ID: {}", similarProducts.size(), productId);
		return similarProducts.stream()
				       .map(productMapper::toProductResponse)
				       .collect(Collectors.toList());
	}

	@Transactional
	public List<ProductResponse> getProductsByType(String typeName) {
		log.info("Attempting to retrieve products by type: {}", typeName);


		Type type = typeRepository.findByName(typeName)
				            .orElseThrow(() -> new IllegalArgumentException("Invalid type name: " + typeName));


		List<Product> products = productRepository.findByType(type);

		log.info("Successfully retrieved {} products of type: {}", products.size(), typeName);
		return products.stream()
				       .map(productMapper::toProductResponse)
				       .collect(Collectors.toList());
	}

	@Transactional
	public List<ProductResponse> getProductsByGender(Gender gender) {
		log.info("Attempting to retrieve products by gender: {}", gender);

		List<Product> products = productRepository.findByGender(gender);

		log.info("Successfully retrieved {} products for gender: {}", products.size(), gender);
		return products.stream()
				       .map(productMapper::toProductResponse)
				       .collect(Collectors.toList());
	}

	@Transactional
	public List<ProductResponse> getNewProducts() {
		log.info("Attempting to retrieve new products");

		LocalDateTime cutoffDate = LocalDateTime.now().minusDays(30);
		List<Product> newProducts = productRepository.findByCreatedDateAfter(cutoffDate);

		log.info("Successfully retrieved {} new products", newProducts.size());
		return newProducts.stream()
				       .map(productMapper::toProductResponse)
				       .collect(Collectors.toList());
	}
	@Transactional
	public List<ProductResponse> getAllProducts() {
		log.info("Attempting to retrieve all products");


		List<Product> products = productRepository.findAll();

		log.info("Successfully retrieved {} products", products.size());


		return products.stream()
				       .map(productMapper::toProductResponse)
				       .collect(Collectors.toList());
	}
	public List<ProductResponse> getAllProductsWithFilters(TypeResponse type, Gender gender,
	                                                       ColorResponse color, Size size,
	                                                       Double minPrice, Double maxPrice) {
		log.info("Attempting to retrieve products with filters: type={}, gender={}, color={}, size={}, minPrice={}, maxPrice={}",
				type, gender, color, size, minPrice, maxPrice);


		Type typeFilter = type != null ? typeMapper.toType(type) : null;
		Color colorFilter = color != null ? colorMapper.toColor(color) : null;

		List<Product> products = productRepository.findAll().stream()
				                         .filter(product -> typeFilter == null || product.getType().equals(typeFilter))
				                         .filter(product -> gender == null || product.getGender().equals(gender))
				                         .filter(product -> colorFilter == null || product.getColor().equals(colorFilter))
				                         .filter(product -> size == null || product.getSize().equals(size))
				                         .filter(product -> minPrice == null || product.getPrice() >= minPrice)
				                         .filter(product -> maxPrice == null || product.getPrice() <= maxPrice)
				                         .toList();

		log.info("Successfully retrieved {} products with filters", products.size());
		return products.stream()
				       .map(productMapper::toProductResponse)
				       .collect(Collectors.toList());
	}


	@Transactional
	public ProductWithSizeAvailabilityResponse getProductWithSizeAvailability(long productId) {
		log.info("Attempting to retrieve product with size availability for product ID: {}", productId);

		Product product = findProductById(productId);

		List<Product> productsWithSameName = productRepository.findByName(product.getName());


		Map<ColorResponse, Set<Size>> sizeAvailabilityByColor = new HashMap<>();
		for (Product p : productsWithSameName) {
			ColorResponse colorResponse = ColorMapper.INSTANCE.toColorResponse(p.getColor());
			sizeAvailabilityByColor.computeIfAbsent(colorResponse, k -> new HashSet<>()).add(p.getSize());
		}

		ProductWithSizeAvailabilityResponse response = productMapper.toProductWithSizeAvailabilityResponse(product);
		response.setSizeAvailabilityByColor(sizeAvailabilityByColor);

		log.info("Successfully retrieved product with size availability for product ID: {}", productId);
		return response;
	}

	@Transactional
	public List<ProductWithSizeAvailabilityResponse> getProductsWithSizeAvailability() {
		log.info("Attempting to retrieve products with size availability");

		List<Product> products = productRepository.findAll();

		Map<String, List<Product>> productsByName = products.stream()
				                                            .collect(Collectors.groupingBy(Product::getName));

		List<ProductWithSizeAvailabilityResponse> responses = new ArrayList<>();

		for (Map.Entry<String, List<Product>> entry : productsByName.entrySet()) {
			String productName = entry.getKey();
			List<Product> productsWithSameName = entry.getValue();


			Map<ColorResponse, Set<Size>> sizeAvailabilityByColor = new HashMap<>();
			for (Product product : productsWithSameName) {
				ColorResponse colorResponse = ColorMapper.INSTANCE.toColorResponse(product.getColor());
				sizeAvailabilityByColor.computeIfAbsent(colorResponse, k -> new HashSet<>()).add(product.getSize());
			}

			Product firstProduct = productsWithSameName.get(0);
			ProductWithSizeAvailabilityResponse response = productMapper.toProductWithSizeAvailabilityResponse(firstProduct);
			response.setSizeAvailabilityByColor(sizeAvailabilityByColor);
			responses.add(response);
		}

		log.info("Successfully retrieved {} products with size availability", responses.size());
		return responses;
	}

	public void setImages(long productId, List<String> links) {
		Product product = findProductById(productId);
		String[] linksArray = links.toArray(new String[0]);
		product.setLinks(linksArray);
		productRepository.save(product);
	}


}




