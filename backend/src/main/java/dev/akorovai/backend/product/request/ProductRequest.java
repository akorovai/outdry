package dev.akorovai.backend.product.request;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import dev.akorovai.backend.color.response.ColorResponse;
import dev.akorovai.backend.product.Gender;
import dev.akorovai.backend.product.Size;
import dev.akorovai.backend.product.SizeDeserializer;
import dev.akorovai.backend.type.response.TypeResponse;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;



@Getter
@AllArgsConstructor
@Builder
public class ProductRequest {

	private Long id;
	private String name;
	private String description;
	private String[] links;
	private Integer amount;
	private Integer discount;
	@JsonDeserialize(using = SizeDeserializer.class)
	private Size size;
	private TypeResponse type;
	private ColorResponse color;
	private Double price;
	private Gender gender;
}
