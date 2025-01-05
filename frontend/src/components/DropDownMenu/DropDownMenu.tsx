import React, { useState } from 'react';
import styled, { keyframes } from "styled-components";
import { colors, fonts } from "../../consts";
import { SVG } from "../index.ts";

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(-10px);
    }
`;

const DropDownMenuContainer = styled.div`
    display: flex;
    height: 40px;
    padding: 18px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: ${colors.LIGHT_GREY_400};
    cursor: pointer;
    position: relative;
`;

const DDMContent = styled.div<{ isOpen: boolean }>`
    display: flex;
    align-items: center;
    gap: 10px;

    svg {
        transform: ${({ isOpen }) => (isOpen ? 'rotate(90deg)' : 'rotate(270deg)')};
        transform-origin: center;
        transition: transform 0.3s ease-in-out;
    }
`;

const DDMText = styled.p`
    color: ${colors.WHITE};
    font-family: ${fonts.POPPINS};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
`;

const DropDownList = styled.div<{ isOpen: boolean }>`
    position: absolute;
    top: 100%;
    left: 0;
    background: ${colors.LIGHT_GREY_400};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 10;
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    animation: ${({ isOpen }) => (isOpen ? fadeIn : fadeOut)} 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
`;

const DropDownItem = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: ${fonts.POPPINS};
    font-size: 14px;
    color: ${colors.WHITE};
    cursor: pointer;
    justify-content: flex-start;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    appearance: none;
    width: 16px;
    height: 16px;
    border: 2px solid ${colors.WHITE};
    border-radius: 4px;
    background: ${colors.LIGHT_GREY_400};
    cursor: pointer;
    position: relative;
    outline: none;

    &:checked::after {
        content: '✔';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: ${colors.WHITE};
        font-size: 12px;
    }
`;

interface DropdownMenuProps {
    options: string[];
    selectedOptions: string[];
    onOptionChange: (option: string) => void;
    placeholder: string
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ options, selectedOptions, onOptionChange , placeholder}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleListClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <DropDownMenuContainer onClick={toggleDropdown}>
            <DDMContent isOpen={isOpen}>
                <DDMText>{placeholder}</DDMText>
                <SVG.Arrow color={colors.WHITE} />
            </DDMContent>
            <DropDownList isOpen={isOpen} onClick={handleListClick}>
                {options.map((option) => (
                    <DropDownItem key={option}>
                        <Checkbox
                            checked={selectedOptions.includes(option)}
                            onChange={() => onOptionChange(option)}
                        />
                        {option}
                    </DropDownItem>
                ))}
            </DropDownList>
        </DropDownMenuContainer>
    );
};

export default DropdownMenu;