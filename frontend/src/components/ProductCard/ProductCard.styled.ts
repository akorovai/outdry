import styled from "styled-components";
import { motion } from "framer-motion";
import { colors, fonts } from "../../consts";

export const ProductCardContainer = styled(motion.div)`
    display: flex;
    width: 260px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    flex-shrink: 0;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    overflow: hidden;
    position: relative;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
`;

export const ProductImageContainer = styled(motion.div)<{ imageUrl?: string }>`
    display: flex;
    width: 100%;
    height: 320px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    border: 1px solid ${colors.LIGHT_GREY_300};
    background: ${({ imageUrl }) => (imageUrl ? `url(${imageUrl})` : 'lightgray')} 50% / cover no-repeat;
    position: relative;
`;

export const ProductInfoContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 8px;
    height: 100%;
`;

export const ProductInfoHeader = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    p {
        color: ${colors.BLACK};
        font-family: ${fonts.POPPINS};
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        margin: 0;
        padding: 0;
    }
`;

export const SaleLabel = styled(motion.div)<{ onClick?: (e: React.MouseEvent) => void }>`
    display: flex;
    height: 40px;
    padding: 8px;
    justify-content: center;
    border-radius: 4px;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    background: ${colors.LIGHT_GREEN_500};
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};

    p {
        color: ${colors.WHITE};
        font-family: ${fonts.POPPINS};
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
    }

    svg {
        width: 24px;
    }
`;

export const AddToCartButton = styled(motion.div)`
    display: none;
    width: calc(100% - 16px);
    height: 40px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    background: ${colors.LIGHT_GREEN_500};
    color: ${colors.WHITE};
    font-family: ${fonts.POPPINS};
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    cursor: pointer;
    position: absolute;
    bottom: 8px;
    left: 8px;
    border-radius: 4px;
    gap: 8px;

    svg {
        width: 24px;
    }

    ${ProductCardContainer}:hover & {
        display: flex;
    }
`;

export const PriceAndColorContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    align-self: stretch;
`;

export const PriceContainer = styled(motion.div)`
    display: flex;
    align-items: center;
    gap: 4px;

    h4 {
        color: ${colors.BLACK};
        font-family: ${fonts.POPPINS};
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 32px;
    }

    h5 {
        color: ${colors.BLACK};
        font-family: ${fonts.POPPINS};
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
        opacity: 0.7;
    }

    h6 {
        color: ${colors.ORANGE};
        font-family: ${fonts.POPPINS};
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
        text-decoration-line: line-through;
    }
`;

export const ColorContainer = styled(motion.div)`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const ColorCircle = styled(motion.div)<{ color: string }>`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${({ color }) => color};
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

export const DetailsContainer = styled(motion.div)`
    display: flex;
    align-items: center;
    gap: 8px;

    p {
        color: ${colors.LIGHT_GREY_400};
        font-family: ${fonts.POPPINS};
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
        margin: 0;
    }

    p:first-child {
        font-weight: 500;
    }

    p:last-child {
        opacity: 0.8;
    }
`;