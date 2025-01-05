import styled, { keyframes } from "styled-components";
import { colors, fonts } from "../../consts";

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    padding: 2rem;
    max-width: 1440px;
    margin: 0 auto;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
    }
`;

export const MenuWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    min-height: 100vh;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
        min-height: auto;
    }
`;

export const Divider = styled.div`
    height: 100%;
    background: ${colors.LIGHT_GREY_300};
    width: 2px;
    align-self: stretch;

    @media (max-width: 768px) {
        width: 100%;
        height: 2px;
    }
`;

export const MenuContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    width: 100%;
`;

export const MenuHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
`;

export const Title = styled.h1`
    color: ${colors.BLACK};
    font-family: ${fonts.INTER};
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: -0.02em;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

export const Option = styled.span<{ isSelected: boolean }>`
    color: ${({ isSelected }) => (isSelected ? colors.BLACK : `rgba(0, 0, 0, 0.4)`)};
    font-family: ${fonts.POPPINS};
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.25;
    cursor: pointer;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
        color: ${colors.BLACK};
        transform: translateX(10px);
    }

    @media (max-width: 768px) {
        font-size: 1.25rem;
    }
`;

export const OptionsList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    width: 100%;
`;

export const ContentWrapper = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    flex: 1;
    width: 100%;
    animation: ${fadeIn} 0.5s ease;
`;