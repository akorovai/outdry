import styled, { keyframes } from "styled-components";
import { colors, fonts } from "../../../../consts";

// Fade-in animation
const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

// Scale-up animation
const scaleUp = keyframes`
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
`;

export const CartHeader = styled.div`
    display: flex;
    padding: 28px 36px 16px 36px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-bottom: 5px solid ${colors.LIGHT_GREY_300};
    animation: ${fadeIn} 0.5s ease-in-out; // Apply fade-in animation
`;

export const CartHeaderInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const CartHeaderText = styled.p`
  color: ${colors.BLACK};
  font-family: ${fonts.INTER};
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
`;

export const CartSizeCircle = styled.div`
  display: flex;
  width: 28px;
  height: 28px;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 50%;
  background: ${colors.ERROR};
  animation: ${scaleUp} 0.3s ease-in-out 0.2s; // Apply scale-up animation with delay

  p {
    text-align: center;
    color: ${colors.WHITE};
    font-family: ${fonts.POPPINS};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`;