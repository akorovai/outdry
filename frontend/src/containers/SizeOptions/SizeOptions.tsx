import React from 'react';
import { colors, fonts } from '../../consts';
import styled from 'styled-components';

const SizeOptionsContainer = styled.article`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
`;

const SizeOptionsTitle = styled.h2`
    color: ${colors.BLACK};
    font-family: ${fonts.INTER};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
`;

const SizeOptionsList = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    align-self: stretch;
`;

const SizeOption = styled.div<{ isSelected: boolean }>`
    display: flex;
    width: 50px;
    height: 40px;
    padding: 14px 29px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 2px solid ${colors.BLACK};
    background: ${({ isSelected }) => (isSelected ? colors.BLACK : colors.WHITE)};
    cursor: pointer;

    p {
        color: ${({ isSelected }) => (isSelected ? colors.WHITE : colors.BLACK)};
        font-family: ${fonts.POPPINS};
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-transform: uppercase;
    }
`;

const SizeOptions: React.FC<{
    sizeOptions: string[];
    selectedSize: string | null;
    onSizeSelect: (size: string | null) => void;
}> = ({ sizeOptions, selectedSize, onSizeSelect }) => {
    return (
        <SizeOptionsContainer>
            <SizeOptionsTitle>Size</SizeOptionsTitle>
            <SizeOptionsList>
                {sizeOptions.map((size) => (
                    <SizeOption
                        key={size}
                        isSelected={selectedSize === size}
                        onClick={() => onSizeSelect(size)}
                    >
                        <p>{size}</p>
                    </SizeOption>
                ))}
            </SizeOptionsList>
        </SizeOptionsContainer>
    );
};

export default SizeOptions;