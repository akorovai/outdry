import React from 'react'
import { motion } from 'framer-motion'
import {
  BottomContainer,
  LeftBottom,
  LeftBottomTextFields,
  RightBottom,
  PriceText,
  inputFieldAnimation,
} from './AddProductOverlay.styled.ts'

import { InputFieldContainer, InputField } from './AddProductOverlay.styled.ts'
import { MainButton } from '../../index.ts'
import { colors } from '../../../consts'

interface BottomPanelProps {
  price: string
  onPriceChange: (value: string) => void
  onDiscountChange: (value: string) => void
  onAddProduct: () => void
}

export const BottomPanel: React.FC<BottomPanelProps> = ({ price, onPriceChange, onDiscountChange, onAddProduct }) => {
  return (
    <BottomContainer
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <LeftBottom>
        <LeftBottomTextFields
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <InputFieldContainer as={motion.div} {...inputFieldAnimation}>
            <InputField
              type='text'
              placeholder='Enter Price'
              value={price}
              onChange={e => onPriceChange(e.target.value)}
            />
          </InputFieldContainer>
          <InputFieldContainer as={motion.div} {...inputFieldAnimation}>
            <InputField
              type='text'
              placeholder='Enter discount (optional)'
              onChange={e => onDiscountChange(e.target.value)}
            />
          </InputFieldContainer>
        </LeftBottomTextFields>
      </LeftBottom>
      <RightBottom>
        <PriceText
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {price}
        </PriceText>
        <MainButton
          backgroundColor={colors.LIGHT_GREEN_500}
          textColor={colors.WHITE}
          hoverEffect={{ backgroundColor: colors.LIGHT_GREEN_400, textColor: colors.WHITE }}
          onClick={onAddProduct}
        >
          + Add Product
        </MainButton>
      </RightBottom>
    </BottomContainer>
  )
}
