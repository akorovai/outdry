import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CartItem as CartItemType, CartOverlayProps } from '../CartOverlay/types/cart.types.ts';
import { EmptyCart } from './EmptyCart/EmptyCart';
import { CartHeader } from './CartHeader/CartHeader';
import { CartItem } from './CartItem/CartItem';
import { CartSubtotal } from './CartSubtotal/CartSubtotal';
import {
    Backdrop,
    CartOverlayWrapper,
    CartOverlayContent,
    CardItemList
} from './styles';

export const CartOverlay: React.FC<CartOverlayProps> = ({ onClose }) => {
    const [cartItems, setCartItems] = useState<CartItemType[]>([
        {
            id: '1',
            name: 'Geo Palms - Mens Recycled Zip Hoodie - Grey',
            price: 50,
            discount: 90,
            quantity: 2,
            imageUrl: 'https://andzela.com/292457-watermark/t-shirt-z-nadrukiem-lakers-szary.jpg',
            color: 'Grey',
            size: 'XS',
        },
        {
            id: '2',
            name: 'Another Product',
            price: 30,
            quantity: 1,
            imageUrl: 'https://example.com/image.jpg',
            color: 'Black',
            size: 'M',
        },
        {
            id: '3',
            name: 'Yet Another Product',
            price: 70,
            quantity: 3,
            imageUrl: 'https://example.com/image2.jpg',
            color: 'Blue',
            size: 'L',
        }
    ]);

    const handleRemoveItem = (id: string) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const handleQuantityChange = (id: string, newQuantity: number) => {
        if (newQuantity < 1) return;

        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        ));
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <>
            <AnimatePresence>
                <Backdrop
                    as={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                />
                {cartItems.length === 0 ? (
                    <EmptyCart onClose={onClose} />
                ) : (
                    <CartOverlayWrapper
                        as={motion.div}
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    >
                        <CartHeader itemCount={cartItems.length} onClose={onClose} />
                        <CartOverlayContent>
                            <CardItemList>
                                {cartItems.map((item) => (
                                    <CartItem
                                        key={item.id}
                                        item={item}
                                        onRemove={handleRemoveItem}
                                        onQuantityChange={handleQuantityChange}
                                    />
                                ))}
                            </CardItemList>
                        </CartOverlayContent>
                        <CartSubtotal total={calculateSubtotal()} />
                    </CartOverlayWrapper>
                )}
            </AnimatePresence>
        </>
    );
};

export default CartOverlay;