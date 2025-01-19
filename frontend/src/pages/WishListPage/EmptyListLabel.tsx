import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SVG } from '@/components'
import { colors } from '@/consts'
import styled from 'styled-components'
import { routePath } from '../../consts'

const EmptyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 80px 40px;
  background-color: ${colors.BRAND_LIGHT_GREEN_25};
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`

const EmptyListTitle = styled.h3`
  font-size: 24px;
  color: ${colors.DARK_GREEN};
  margin-top: 16px;
`

const EmptyListText = styled.p`
  font-size: 16px;
  color: ${colors.LIGHT_GREY_700};
  margin-top: 8px;
`

const EmptyListButton = styled.button`
  margin-top: 16px;
  padding: 10px 20px;
  background-color: ${colors.LIGHT_GREEN_400};
  color: ${colors.WHITE};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: ${colors.LIGHT_GREEN_500};
  }
`

const EmptyListLabel: React.FC = () => {
  const navigate = useNavigate()

  return (
    <EmptyListContainer>
      <SVG.Like color={colors.DARK_GREEN} />
      <EmptyListTitle>Your Wishlist is Empty</EmptyListTitle>
      <EmptyListText>Add some products to your wishlist to see them here.</EmptyListText>
      <EmptyListButton onClick={() => navigate(routePath.PRODUCTS.replace(':category', 'new-in'))}>
        Explore Products
      </EmptyListButton>
    </EmptyListContainer>
  )
}

export default EmptyListLabel
