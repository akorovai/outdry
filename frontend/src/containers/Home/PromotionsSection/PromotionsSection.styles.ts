import styled from "styled-components";
import { motion } from "framer-motion";
import { colors, fonts } from "../../../consts";


const BaseText = styled.span`
    color: ${colors.BLACK};
    font-family: ${fonts.POPPINS};
    font-style: normal;
    font-weight: 600;
    line-height: 44px;
    letter-spacing: -0.72px;
`;


export const SectionContainer = styled(motion.div)`
    display: flex;
    padding: 40px 100px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;
    background: ${colors.BRAND_LIGHT_GREEN_25};
`;


export const SectionHeading = styled(BaseText)`
    font-size: 36px;
`;

export const BrandName = styled(BaseText)`
  color: ${colors.LIGHT_GREEN_500};
    font-size: 36px;
`;


export const CardsContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 24px;
  align-self: stretch;
  justify-content: space-between;
`;


export const TitleContainer = styled(motion.div)`
    display: flex;
    align-items: baseline;
    gap: 8px;
`;