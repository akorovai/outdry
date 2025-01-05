import React from 'react';

import {
    AccountPrompt,
    AccountPromptTitle,
    CloseButton,
    EmptyCartContent,
    EmptyCartMessage,
    EmptyCartText,
    LoginContinuation,
    LoginLink,
    LoginPrompt
} from './styles';
import {colors} from "../../../../consts";
import {CartOverlayWrapper} from "../styles.ts";
import {MainButton, SVG} from "../../../index.ts";

interface EmptyCartProps {
    onClose: () => void;
}
import { motion } from "framer-motion";

export const EmptyCart: React.FC<EmptyCartProps> = ({ onClose }) => (
    <CartOverlayWrapper>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <EmptyCartContent>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <EmptyCartMessage>
                        <EmptyCartText>YOUR CART IS EMPTY</EmptyCartText>
                        <MainButton
                            backgroundColor={colors.LIGHT_GREEN_400}
                            textColor={colors.WHITE}
                            width={50}
                        >
                            Continue Shopping
                        </MainButton>
                    </EmptyCartMessage>
                </motion.div>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <AccountPrompt>
                        <AccountPromptTitle>HAVE AN ACCOUNT?</AccountPromptTitle>
                        <LoginPrompt>
                            <LoginLink>Log in</LoginLink>
                            <LoginContinuation>to check out faster.</LoginContinuation>
                        </LoginPrompt>
                    </AccountPrompt>
                </motion.div>
            </EmptyCartContent>
        </motion.div>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
        >
            <CloseButton onClick={onClose}>
                <SVG.Cross color={colors.BLACK} />
            </CloseButton>
        </motion.div>
    </CartOverlayWrapper>
);