import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors, fonts } from '../../consts';

export const ColorOptionsContainer = styled(motion.article)`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`;

export const ColorOptionsTitle = styled(motion.h2)`
    color: ${colors.BLACK};
    font-family: ${fonts.POPPINS};
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
    align-self: stretch;
`;

export const ColorCirclesContainer = styled(motion.div)`
    display: flex;
    align-items: center;
    gap: 8px;
    align-self: stretch;
`;

export const ColorCircle = styled(motion.div)<{ color: string; isSelected: boolean }>`
    position: relative;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: ${({ color }) => color};
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: ${({ isSelected }) => (isSelected ? '1px solid #000' : 'none')};

    &::after {
        content: '${({ isSelected }) => (isSelected ? '✔' : '')}';
        color: #ffffff;
        font-size: 14px;
        font-weight: bold;
        position: absolute;
        z-index: 2;
    }
`;