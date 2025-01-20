import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext/AuthContext'
import {
  AccountPrompt,
  AccountPromptTitle,
  CloseButton,
  EmptyCartContent,
  EmptyCartMessage,
  EmptyCartText,
  LoginContinuation,
  LoginLink,
  LoginPrompt,
} from './styles'
import { colors, routePath } from '@/consts'
import { CartOverlayWrapper } from '../styles'
import { MainButton, SVG } from '../../../index'

interface EmptyCartProps {
  onClose: () => void
}

export const EmptyCart: React.FC<EmptyCartProps> = ({ onClose }) => {
  const { user } = useAuth()
  const navigate = useNavigate()

  const handleContinueShopping = () => {
    navigate(routePath.PRODUCTS.replace(':category', 'new-in'))
  }

  return (
    <CartOverlayWrapper>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
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
                onClick={handleContinueShopping}
              >
                Continue Shopping
              </MainButton>
            </EmptyCartMessage>
          </motion.div>

          {!user && (
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
          )}
        </EmptyCartContent>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }}>
        <CloseButton onClick={onClose}>
          <SVG.Cross color={colors.BLACK} />
        </CloseButton>
      </motion.div>
    </CartOverlayWrapper>
  )
}
