import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "../../consts";

export const SectionContainer = styled(motion.div)`
    display: flex;
    width: 100%;
    padding: 0 0 80px 0;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    background: ${colors.BRAND_LIGHT_GREEN_25};
`;

export const HeaderContainer = styled(motion.div)`
    display: flex;
    width: 100%;
    padding: 0 100px;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1600px) {
        padding: 0 60px;
    }

    @media (max-width: 1200px) {
        padding: 0 40px;
    }

    @media (max-width: 768px) {
        padding: 0 20px;
        flex-direction: column;
        gap: 20px;
    }
`;

export const LeftContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;

    @media (max-width: 768px) {
        align-items: center;
    }
`;

export const TitleRow = styled(motion.div)`
    display: flex;
    align-items: baseline;
    gap: 8px;
    white-space: nowrap;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const BulitsContainer = styled(motion.div)`
    display: flex;
    align-items: center;
    gap: 8px;
`;

interface BulitProps {
    isActive?: boolean;
}

export const Bulit = styled(motion.div)<BulitProps>`
    width: 40px;
    height: 8px;
    border-radius: 4px;
    background: ${({ isActive }) => (isActive ? colors.LIGHT_GREEN_400 : colors.LIGHT_GREY)};

    @media (max-width: 768px) {
        width: 30px;
        height: 6px;
    }
`;

export const CarouselArrowsContainer = styled(motion.div)`
    display: flex;
    align-items: center;
    gap: 12px;

    @media (max-width: 768px) {
        gap: 8px;
    }
`;

export const ArrowContainer = styled(motion.div)<{ isActive: boolean; isLeft?: boolean }>`
    display: flex;
    width: 36px;
    height: 36px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    border-radius: 18px;
    border: ${({ isActive }) => (isActive ? 'none' : '1px solid #000')};
    background: ${({ isActive }) => (isActive ? colors.DARK_GREEN_2 : colors.WHITE)};
    cursor: ${({ isActive }) => (isActive ? 'pointer' : 'auto')};
    opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};

    @media (max-width: 768px) {
        width: 30px;
        height: 30px;
    }

    svg {
        transform: ${({ isLeft }) => (isLeft ? 'rotate(0deg)' : 'rotate(180deg)')};
    }
`;

export const CardsContainer = styled(motion.div)`
    display: flex;
    width: 100%;
    padding: 0 100px;
    align-items: flex-start;
    gap: 16px;
    overflow: hidden;

    @media (max-width: 1600px) {
        padding: 0 60px;
    }

    @media (max-width: 1200px) {
        padding: 0 40px;
        gap: 12px;
    }

    @media (max-width: 768px) {
        padding: 0 20px;
        gap: 8px;
    }
`;