import styled from 'styled-components'
import { motion } from 'framer-motion'
import { colors } from '@/consts'
import { fonts } from '../../../consts'

export const customScrollbar = `
  &::-webkit-scrollbar {
    width: 8px; /* Ширина скроллбара */
  }

  &::-webkit-scrollbar-track {
    background: ${colors.LIGHT_GREY_200}; 
    border-radius: 4px; 
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.LIGHT_GREY_400}; 
    border-radius: 4px; /* Скругление углов ползунка */
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${colors.LIGHT_GREY_600};
  }
`
const flexColumn = `
  display: flex;
  flex-direction: column;
`

const flexCenter = `
  display: flex;
  align-items: center;
`

const textStyle = (fontSize: string, fontWeight: number, color: string) => `
  font-family: ${fonts.POPPINS};
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  color: ${color};
`

export const fadeInOut = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
}

export const scaleInOut = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.8, opacity: 0 },
  transition: { duration: 0.3, ease: 'easeInOut' },
}

export const slideInOut = {
  initial: { y: -10, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -10, opacity: 0 },
  transition: { duration: 0.2 },
}

export const imageAnimation = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
  transition: { duration: 0.2 },
}

export const removeButtonAnimation = {
  whileHover: { scale: 1.2, backgroundColor: colors.LIGHT_GREY_400 },
  whileTap: { scale: 0.9 },
}

export const inputFieldAnimation = {
  whileFocus: { borderColor: colors.LIGHT_GREEN_500, boxShadow: `0 0 0 2px ${colors.LIGHT_GREEN_500}` },
}

export const OverlayBackdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow: hidden;
`

export const OverlayContent = styled(motion.div)`
  background: ${colors.WHITE};
  width: 90%;
  max-width: 70.25rem;
  height: 90%;
  max-height: 56rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow-y: auto;
  border-radius: 0.25rem;
  padding-bottom: 4.75rem;

  ${customScrollbar};

  @media (max-width: 768px) {
    width: 95%;
    height: 95%;
  }
`

export const AddOverlayContent = styled(motion.div)`
  ${flexColumn};
  width: 100%;
  padding: 1.5rem 2.25rem 0 2.25rem;
  gap: 1.875rem;
  overflow-y: auto;
  max-height: calc(100% - 6rem);

  ${customScrollbar};

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

export const AOCHeader = styled(motion.div)`
  ${flexColumn};
  gap: 1.5rem;
  align-self: stretch;
  position: relative;
`

export const AOCTitle = styled(motion.p)`
  ${textStyle('2rem', 600, colors.BLACK)};
  line-height: 2.75rem;
  letter-spacing: -0.045rem;
  align-self: stretch;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`

export const HeaderLine = styled(motion.div)`
  width: 100%;
  height: 0.15rem;
  border-radius: 4px;
  background: ${colors.LIGHT_GREY_300};
  position: absolute;
  bottom: -0.75rem;
  align-self: stretch;
`

export const AOCFormContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`

export const AOCFieldsContainer = styled(motion.div)`
  ${flexColumn};
  width: 50%;
  gap: 1.875rem;
  overflow-y: auto;
  height: 100%;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const AOCField = styled(motion.div)`
  ${flexColumn};
  width: 100%;
  gap: 0.75rem;
`

export const AOCFieldTitle = styled(motion.h3)`
  ${textStyle('1.25rem', 500, colors.BLACK)};
  align-self: stretch;
  line-height: 1.875rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`

export const InputFieldContainer = styled(motion.div)`
  ${flexCenter};
  padding: 0.625rem 0.875rem;
  gap: 0.5rem;
  align-self: stretch;
  border-radius: 0.5rem;
  border: 1px solid ${colors.LIGHT_GREY_300};
  background: ${colors.WHITE};
  box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
`

export const InputField = styled(motion.input)`
  width: 100%;
  border: none;
  outline: none;
  ${textStyle('1rem', 400, colors.BLACK)};
  line-height: 1.5rem;

  &::placeholder {
    color: ${colors.LIGHT_GREY_400};
  }
`

export const DropdownContainer = styled(motion.div)`
  position: relative;
  width: 100%;
`

export const DropdownHeader = styled(motion.div)`
  ${flexCenter};
  padding: 0.625rem 0.875rem;
  justify-content: space-between;
  gap: 0.5rem;
  align-self: stretch;
  border-radius: 0.5rem;
  border: 1px solid ${colors.LIGHT_GREY_300};
  background: ${colors.WHITE};
  box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  cursor: pointer;

  &:hover {
    background: ${colors.LIGHT_GREY_200};
  }
`

export const DropdownList = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: ${colors.WHITE};
  border: 1px solid ${colors.LIGHT_GREY_300};
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  margin-top: 0.5rem;
  overflow: hidden;
`

export const DropdownItem = styled(motion.div)`
  padding: 0.625rem 0.875rem;
  ${textStyle('1rem', 400, colors.BLACK)};
  line-height: 1.5rem;
  cursor: pointer;

  &:hover {
    background: ${colors.LIGHT_GREY_200};
  }
`

export const ArrowIcon = styled(motion.div)`
  ${flexCenter};
`

export const AddImageContainer = styled(motion.div)`
  ${flexCenter};
  height: 34.75rem;
  padding: 0 9.4375rem;
  align-self: stretch;
  border: 1px solid ${colors.LIGHT_GREY_200};
  background: ${colors.LIGHT_GREY_300};
  box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    height: 20rem;
    padding: 0 2rem;
  }
`

export const UploadedImagesContainer = styled(motion.div)`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

export const AICHeader = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`

export const AICContent = styled(motion.div)`
  ${flexColumn};
  width: 15.6875rem;
  gap: 0.75rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const DropImageHereContainer = styled(motion.div)`
  ${flexColumn};
  gap: 0.75rem;
  align-self: stretch;
`

export const DropImageHereText = styled(motion.p)`
  ${textStyle('1.125rem', 400, colors.BLACK)};
  text-align: center;
  line-height: 1.75rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`

export const OrSection = styled(motion.section)`
  ${flexCenter};
  gap: 1rem;
  align-self: stretch;
  width: 100%; /* Убедимся, что контейнер занимает всю ширину */
`

export const OrTest = styled(motion.p)`
  ${textStyle('1.125rem', 400, colors.BLACK)};
  text-align: center;
  line-height: 1.75rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`

export const OrLine = styled(motion.div)`
  width: 50%;
  min-width: 4rem;
  max-width: 8rem;
  height: 0.0625rem;
  background: ${colors.BLACK};
`

export const ScrollableContainer = styled(motion.div)`
  max-height: 500px;
  overflow-y: auto;
  padding-right: 10px;

  ${customScrollbar};
`

export const ImageWrapper = styled(motion.div)`
  position: relative;
`

export const ImagePreview = styled(motion.img)`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 0.5rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`

export const RemoveImageButton = styled(motion.button)`
  position: absolute;
  top: 0;
  right: 0;
  background: ${colors.LIGHT_GREY_400};
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  cursor: pointer;
  ${flexCenter};
`

export const RemoveImageIcon = styled(motion.span)`
  color: ${colors.WHITE};
  font-size: 12px;
`

export const BottomContainer = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  width: 100%;
  padding: 1.875rem 2.25rem;
  justify-content: space-between;
  align-items: center;
  background: ${colors.WHITE};
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

export const PriceText = styled(AOCFieldTitle)`
  margin: 0;
  line-height: 1;
  ${flexCenter};
`

export const LeftBottom = styled(motion.div)`
  ${flexColumn};
  gap: 0.75rem;
`

export const LeftBottomTextFields = styled(motion.div)`
  ${flexCenter};
  gap: 0.5rem;
`

export const RightBottom = styled(motion.div)`
  ${flexCenter};
  gap: 0.75rem;
  height: 100%;
`
export const TextArea = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  font-family: ${fonts.POPPINS};
  font-size: 1rem;
  font-weight: 400;
  color: ${colors.BLACK};
  line-height: 1.5rem;
  resize: vertical;
  min-height: 100px;
  padding: 0.625rem 0.875rem;
  border-radius: 0.5rem;
  background: ${colors.WHITE};
  box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);

  &::placeholder {
    color: ${colors.LIGHT_GREY_400};
  }
`
export const ImageUploaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
