import styled from 'styled-components'
import { motion } from 'framer-motion'
import { colors } from '../../../consts'

export const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`

export const CartOverlayWrapper = styled(motion.div)`
  width: 50%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  background: ${colors.WHITE};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const CloseButton = styled.div`
  position: absolute;
  top: 28px;
  right: 36px;
  cursor: pointer;
  margin: 0;
  padding: 0;

  svg {
    width: 32px;
    height: 32px;
  }
`

export const CartOverlayContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 36px;
  align-self: stretch;
  height: calc(100% - 200px);
  overflow-y: auto;
  padding-top: 20px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.BLACK};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`

export const CardItemList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  align-self: stretch;
  padding-bottom: 20px;
`
