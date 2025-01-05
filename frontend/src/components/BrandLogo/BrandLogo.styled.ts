import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { colors, fonts } from '../../consts';

export const Text = styled(motion.p)<{ size?: number; weight?: number; lineHeight?: number }>`
    color: ${colors.WHITE};
    font-family: ${fonts.POPPINS};
    font-size: ${({ size }) => size || 16}px;
    font-weight: ${({ weight }) => weight || 400};
    line-height: ${({ lineHeight }) => lineHeight || 24}px;
    margin: 0;
    text-decoration: none;
`;

export const BrandLogoContainer = styled(motion(Link))`
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    cursor: pointer;
`;

export const BrandText = styled(Text).attrs({
    size: 36,
    weight: 600,
    lineHeight: 50.4,
})`
    text-transform: lowercase;
    text-decoration: none; 
`;