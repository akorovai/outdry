import React from 'react'
import { motion } from 'framer-motion'
import { MainButton } from '@/components'
import {
  SubtotalContainer,
  InfoButtonContainer,
  SubtotalSection,
  SubtotalInfoSection,
  SubtotalInfoValue,
  SubtotalText,
  SubtotalTextValue,
  ViewOrdersLink,
} from './styles'
import { colors } from '@/consts'
import { Divider } from '../CartItem/styles.ts'
import { useNavigate } from 'react-router-dom'

interface CartSubtotalProps {
  total: number
  onCheckoutClick: () => void
}

export const CartSubtotal: React.FC<CartSubtotalProps> = ({ total, onCheckoutClick }) => {
  const navigate = useNavigate()

  const handleViewOrdersClick = () => {
    navigate('/profile?tab=orders')
  }

  return (
    <SubtotalContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <InfoButtonContainer>
        <SubtotalSection>
          <SubtotalInfoSection>
            <Divider />
            <SubtotalInfoValue>
              <SubtotalText>Subtotal</SubtotalText>
              <SubtotalTextValue>${total.toFixed(2)}</SubtotalTextValue>
            </SubtotalInfoValue>
          </SubtotalInfoSection>
          <Divider />
        </SubtotalSection>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ width: '100%' }}
        >
          <MainButton backgroundColor={colors.LIGHT_GREEN_400} textColor={colors.WHITE} onClick={onCheckoutClick}>
            Check Out
          </MainButton>
        </motion.div>
      </InfoButtonContainer>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <ViewOrdersLink handleLinkClick={handleViewOrdersClick} onClick={handleViewOrdersClick}>
          View your orders
        </ViewOrdersLink>
      </motion.div>
    </SubtotalContainer>
  )
}
