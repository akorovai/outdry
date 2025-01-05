import React from 'react';

import {
    ColorCircle,
    ColorContainer,
    PriceAndColorContainer,
    PriceContainer,
    ProductCardContainer,
    ProductImageContainer,
    ProductInfoContainer,
    ProductInfoHeader,
    SaleLabel,
    AddToCartButton,
    DetailsContainer
} from "./ProductCard.styled.ts";
import { SVG } from "../index.ts";
import { colors } from "../../consts";

interface IProductCardProps {
    name: string;
    colors?: string[];
    color?: string;
    size?: string;
    price: number;
    isOnSale?: boolean;
    isWishlist?: boolean;
    onCardClick?: () => void;
    onQuickBuyClick?: () => void;
    onTrashClick?: () => void;
}

const ProductCard: React.FC<IProductCardProps> = ({
                                                      name,
                                                      colors: productColors = [],
                                                      color,
                                                      size,
                                                      price,
                                                      isOnSale = false,
                                                      isWishlist = false,
                                                      onCardClick,
                                                      onQuickBuyClick,
                                                      onTrashClick,
                                                  }): React.ReactElement => {
    const discountedPrice = price * 0.8;

    const handleTrashClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onTrashClick?.();
    };

    const renderSaleLabel = () => {
        if (!isOnSale && !isWishlist) return null;
        return (
            <SaleLabel
                onClick={isWishlist ? handleTrashClick : undefined}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {isWishlist ? <SVG.Trash color={colors.WHITE} /> : <p>On Sale</p>}
            </SaleLabel>
        );
    };

    const renderPrice = () => {
        return isOnSale ? (
            <>
                <h4>${discountedPrice.toFixed(2)}</h4>
                <h5>/</h5>
                <h6>${price.toFixed(2)}</h6>
            </>
        ) : (
            <h4>${price.toFixed(2)}</h4>
        );
    };

    const renderColorDetails = () => {
        return isWishlist ? (
            <DetailsContainer>
                <p>{color} / {size}</p>
            </DetailsContainer>
        ) : (
            <ColorContainer>
                {productColors.map((color, index) => (
                    <ColorCircle
                        key={index}
                        color={color}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    />
                ))}
            </ColorContainer>
        );
    };

    return (
        <ProductCardContainer
            onClick={onCardClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            <ProductImageContainer>
                {renderSaleLabel()}
                <AddToCartButton
                    onClick={(e) => {
                        e.stopPropagation();
                        onQuickBuyClick?.();
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Quick Buy
                    <SVG.Bucket color={colors.WHITE} />
                </AddToCartButton>
            </ProductImageContainer>
            <ProductInfoContainer>
                <ProductInfoHeader>
                    <p>{name}</p>
                </ProductInfoHeader>
                {renderColorDetails()}
                <PriceAndColorContainer>
                    <PriceContainer>
                        {renderPrice()}
                    </PriceContainer>
                </PriceAndColorContainer>
            </ProductInfoContainer>
        </ProductCardContainer>
    );
};

export default ProductCard;