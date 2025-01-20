package dev.akorovai.backend.orderItem;

import dev.akorovai.backend.orderItem.response.OrderItemResponse;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.util.Set;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface OrderItemMapper {

	OrderItemMapper INSTANCE = Mappers.getMapper(OrderItemMapper.class);

	@Mapping(source = "product.id", target = "productId")
	@Mapping(source = "product.name", target = "productName")
	@Mapping(source = "product.size.displayName", target = "size")
	@Mapping(source = "product.color.name", target = "color")
	@Mapping(source = "product.links", target = "imageLink")
	OrderItemResponse toResponse( OrderItem orderItem );

	default Set<OrderItemResponse> toResponseSet( Set<OrderItem> orderItems ) {
		return orderItems.stream().map(this::toResponse).collect(Collectors.toSet());
	}

	default String mapFirstLink( String[] links ) {
		if ( links != null && links.length > 0 ) {
			return links[0];
		}
		return null;
	}
}