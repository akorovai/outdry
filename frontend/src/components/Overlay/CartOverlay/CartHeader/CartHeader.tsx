import React from 'react';
import { motion } from 'framer-motion';
import { SVG } from '../../../index';
import {
    CartHeader as Header,
    CartHeaderInfo,
    CartHeaderText,
    CartSizeCircle
} from './styles';
import { colors } from "../../../../consts";
import { CloseButton } from "../styles.ts";

interface CartHeaderProps {
    itemCount: number;
    onClose: () => void;
}

export const CartHeader: React.FC<CartHeaderProps> = ({ itemCount, onClose }) => (
    <Header>
        <CartHeaderInfo>
            <CartHeaderText>YOUR CART</CartHeaderText>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
            >
                <CartSizeCircle>
                    <p>{itemCount}</p>
                </CartSizeCircle>
            </motion.div>
        </CartHeaderInfo>
        <CloseButton onClick={onClose}>
            <SVG.Cross color={colors.BLACK} />
        </CloseButton>
    </Header>
);