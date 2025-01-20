package dev.akorovai.backend.product;

import com.fasterxml.jackson.annotation.JsonIgnore;
import dev.akorovai.backend.color.Color;
import dev.akorovai.backend.orderItem.OrderItem;
import dev.akorovai.backend.review.Review;
import dev.akorovai.backend.shopping_cart.ShoppingCartItem;
import dev.akorovai.backend.wish_list.WishListItem;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Type;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "product", indexes = {
		@Index(name = "idx_product_color_id", columnList = "color_id"),
		@Index(name = "idx_product_type_id", columnList = "type_id"),
		@Index(name = "idx_product_name", columnList = "name")
})
@EntityListeners(AuditingEntityListener.class)
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false, length = 128)
	private String name;

	@Column(nullable = false, length = 256)
	private String description;

	@Column(nullable = false, precision = 6)
	private Double price;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "color_id", nullable = false)
	private Color color;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "type_id", nullable = false)
	private dev.akorovai.backend.type.Type type;

	@Type(StringArrayType.class)
	@Column(name = "links", columnDefinition = "TEXT[]")
	private String[] links;

	@Enumerated(EnumType.STRING)
	@Column(nullable = false, length = 16)
	private Gender gender;

	@Column(nullable = false)
	private Integer amount;

	@Column
	private Integer discount;

	@Enumerated(EnumType.STRING)
	@Column(nullable = false, length = 16)
	private Size size;

	@OneToMany(mappedBy = "product", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@ToString.Exclude
	@JsonIgnore
	private Set<OrderItem> orderItems;

	@OneToMany(mappedBy = "product", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@ToString.Exclude
	@JsonIgnore
	private Set<ShoppingCartItem> shoppingCartItems;

	@OneToMany(mappedBy = "product", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@ToString.Exclude
	@JsonIgnore
	private Set<WishListItem> wishListItems;

	@OneToMany(mappedBy = "product", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@ToString.Exclude
	@JsonIgnore
	private Set<Review> reviews;

	@CreatedDate
	@Column(nullable = false, updatable = false)
	private LocalDateTime createdDate;
}