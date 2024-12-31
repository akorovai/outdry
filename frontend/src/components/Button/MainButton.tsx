import React from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../../consts';

interface MainButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    width?: number;
    backgroundColor?: string;
    textColor?: string;
}

const StyledButton = styled.button<{ width?: number; backgroundColor?: string }>`
    display: inline-flex;
    padding: 10px 18px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: ${({ backgroundColor }) => backgroundColor || colors.WHITE};
    border: none;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.2s ease;
    width: ${({ width }) => width}%;

    &:hover {
        background: ${colors.LIGHT_GREEN_400}; 
    }

    &:active {
        transform: scale(0.98);
    }
`;

const ButtonText = styled.p<{ textColor?: string }>`
    color: ${({ textColor }) => textColor || colors.LIGHT_GREEN_500}; 
    font-family: ${fonts.POPPINS};
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    text-transform: uppercase;
    margin: 0;
`;

const MainButton: React.FC<MainButtonProps> = ({
                                                   onClick,
                                                   children,
                                                   width = 100,
                                                   backgroundColor,
                                                   textColor,
                                               }) => {
    return (
        <StyledButton onClick={onClick} width={width} backgroundColor={backgroundColor}>
            <ButtonText textColor={textColor}>{children}</ButtonText>
        </StyledButton>
    );
};

export default MainButton;