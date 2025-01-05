import React from 'react';
import { motion } from 'framer-motion';
import { CartItem as CartItemType } from '../types/cart.types';
import { SVG } from '../../../index';
import {
    CartItemContainer,
    CartItemContentContainer,
    LeftCartItemContainer,
    ImageContainer,
    LCIInfo,
    LCIInfoTop,
    IDText,
    ProductName,
    LCIInfoBottom,
    CategoryValueContainer,
    CategoryText,
    ValueText,
    RightCartItemContainer,
    RemoveText,
    PriceAmountContainer,
    AmountContainer,
    IconButton,
    AmountText,
    PriceDiscountContainer,
    DiscountText,
    PriceText,
    Divider
} from './styles';
import { colors } from "../../../../consts";

interface CartItemProps {
    item: CartItemType;
    onRemove: (id: string) => void;
    onQuantityChange: (id: string, quantity: number) => void;
}

export const CartItem: React.FC<CartItemProps> = ({
                                                      item,
                                                      onRemove,
                                                      onQuantityChange
                                                  }) => (
    <CartItemContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <CartItemContentContainer>
            <LeftCartItemContainer>
                <ImageContainer imageUrl={item.imageUrl} />
                <LCIInfo>
                    <LCIInfoTop>
                        <IDText>#{item.id}</IDText>
                        <ProductName>{item.name}</ProductName>
                    </LCIInfoTop>
                    <LCIInfoBottom>
                        <CategoryValueContainer>
                            <CategoryText>Colour:</CategoryText>
                            <ValueText>{item.color}</ValueText>
                        </CategoryValueContainer>
                        <CategoryValueContainer>
                            <CategoryText>Size:</CategoryText>
                            <ValueText>{item.size}</ValueText>
                        </CategoryValueContainer>
                    </LCIInfoBottom>
                </LCIInfo>
            </LeftCartItemContainer>
            <RightCartItemContainer>
                <RemoveText onClick={() => onRemove(item.id)}>Remove</RemoveText>
                <PriceAmountContainer>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                    >
                        <AmountContainer>
                            <IconButton
                                onClick={() => onQuantityChange(item.id, item.quantity - 1)}
                                disabled={item.quantity === 1}
                            >
                                <SVG.Minus color={item.quantity === 1 ? colors.LIGHT_GREY_300 : colors.BLACK} />
                            </IconButton>
                            <AmountText>{item.quantity}</AmountText>
                            <IconButton
                                onClick={() => onQuantityChange(item.id, item.quantity + 1)}
                            >
                                <SVG.Plus color={colors.BLACK} />
                            </IconButton>
                        </AmountContainer>
                    </motion.div>
                    <PriceDiscountContainer>
                        {item.discount && <DiscountText>${item.discount.toFixed(2)}</DiscountText>}
                        <PriceText>${item.price.toFixed(2)}</PriceText>
                    </PriceDiscountContainer>
                </PriceAmountContainer>
            </RightCartItemContainer>
        </CartItemContentContainer>
        <Divider />
    </CartItemContainer>
);