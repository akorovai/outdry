import React from 'react';
import styled from 'styled-components';
import SVG from '../SVG/SVG.tsx';
import { colors, fonts } from '../../consts';


export const Text = styled.p<{ size?: number; weight?: number; lineHeight?: number }>`
    color: ${colors.WHITE};
    font-family: ${fonts.POPPINS};
    font-size: ${({ size }) => size || 16}px;
    font-style: normal;
    font-weight: ${({ weight }) => weight || 400};
    line-height: ${({ lineHeight }) => lineHeight || 24}px;
    margin: 0; 
`;


export const BrandLogoContainer = styled.div<{ onClick?: () => void }>`
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')}; // Add pointer cursor if onClick is provided
`;


export const BrandText = styled(Text).attrs({
    size: 36,
    weight: 600,
    lineHeight: 50.4,
})`
    text-transform: lowercase;
`;


interface IBrandLogoProps {
    onClick?: () => void;
}


const BrandLogo: React.FC<IBrandLogoProps> = ({ onClick }): React.ReactElement => {
    return (
        <BrandLogoContainer onClick={onClick}>
            <SVG.Logo color={colors.WHITE} />
            <BrandText>Outdry</BrandText>
        </BrandLogoContainer>
    );
};

export default BrandLogo;