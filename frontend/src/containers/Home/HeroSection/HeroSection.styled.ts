import styled from "styled-components";
import backgroundImage from "@assets/images/HomePageFirstSectionBackground.jpg";
import { colors, fonts } from "../../../consts";
import { motion } from "framer-motion";

const BaseText = styled(motion.p)`
  color: ${colors.WHITE};
  margin: 0;
`;

const BaseContainer = styled(motion.div)`
  display: flex;
`;

export const SectionContainer = styled(BaseContainer)`
  padding: 220px 80px 166px 80px;
  align-items: center;
  align-self: stretch;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
`;

export const ContentWrapper = styled(BaseContainer)`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-left: 80px;
`;

export const TextWrapper = styled(motion.div)`
  height: 380px;
  flex-shrink: 0;
  position: relative;
`;

export const DiscountContainer = styled(BaseContainer)`
  gap: 10px;
`;

export const DiscountPercentage = styled(BaseText)`
  font-family: ${fonts.POPPINS};
  font-size: 130px;
  font-weight: 600;
  line-height: 115%;
`;

export const DiscountText = styled(BaseText)`
  font-family: ${fonts.CAVEAT};
  font-size: 130px;
  font-weight: 400;
  line-height: 115%;
`;

export const PromotionText = styled(BaseText)`
  font-family: ${fonts.CAVEAT};
  font-size: 90px;
  font-weight: 700;
  line-height: 115%;
  text-transform: uppercase;
`;

export const AlmostContainer = styled(motion.div)`
  display: inline-flex;
  padding: 8px 10px;
  justify-content: center;
  align-items: center;
  gap: 2px;
  border-radius: 4px;
  background: ${colors.ORANGE};
  position: absolute;
  top: 40%;
  transform: translate(-50%, -50%) rotate(-7deg);
`;

export const AlmostText = styled(BaseText)`
  font-family: ${fonts.CAVEAT};
  font-size: 36px;
  font-weight: 700;
  text-transform: uppercase;
`;
