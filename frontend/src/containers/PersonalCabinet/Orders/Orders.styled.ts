import styled, { keyframes } from "styled-components";
import { colors, fonts } from "../../../consts";

// Keyframes
const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
`;

const hoverScale = keyframes`
    0% { transform: scale(1); }
    100% { transform: scale(1.05); }
`;


const animationDuration = "0.5s";
const animationEase = "ease";
const hoverTransition = "0.3s ease";
const borderRadius = "8px";
const gapSmall = "0.5rem";
const gapMedium = "1rem";
const gapLarge = "2rem";


const BaseContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${gapLarge};
    width: 100%;
    max-width: 1200px;
    height: 100%;
    animation: ${fadeIn} ${animationDuration} ${animationEase} forwards;
`;


const scrollbarStyles = `
    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-track {
        background: ${colors.LIGHT_GREY_200};
        border-radius: 4px;
    }
    &::-webkit-scrollbar-thumb {
        background: ${colors.LIGHT_GREY_400};
        border-radius: 4px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: ${colors.LIGHT_GREY_600};
    }
`;


export const OrderContainerWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.25rem;
    height: 100vh;
    padding: 1rem;
    
`;

export const OrderContainerWrapperSecondLayer = styled(BaseContainer)``;

export const Divider = styled.div`
    height: 2px;
    width: 100%;
    background: ${colors.LIGHT_GREY_300};
    animation: ${fadeIn} ${animationDuration} ${animationEase} forwards;
`;

export const OrdersHeaderTitle = styled.h1`
    color: ${colors.BLACK};
    font-family: ${fonts.POPPINS};
    font-size: 1.875rem;
    font-weight: 500;
    line-height: 1.25;
    margin: 0;
    animation: ${fadeIn} ${animationDuration} ${animationEase} forwards;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const OrdersList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${gapMedium};
    width: 100%;
    max-height: 500px;
    overflow-y: auto;
    padding-right: ${gapSmall};
    ${scrollbarStyles}
`;

export const NoOrdersText = styled.p`
    color: ${colors.BLACK};
    font-family: ${fonts.POPPINS};
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.55;
    margin: 0;
    animation: ${fadeIn} ${animationDuration} ${animationEase} forwards;
`;

export const OrderItem = styled.div`
    display: flex;
    padding: 0.5rem 0.75rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border: 2px solid ${colors.LIGHT_GREY_300};
    border-radius: ${borderRadius};
    transition: transform ${hoverTransition}, box-shadow ${hoverTransition};
    animation: ${fadeIn} ${animationDuration} ${animationEase} forwards;

    &:hover {
        transform: scale(1.02);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: ${gapMedium};
        align-items: flex-start;
    }
`;

export const OrderItemLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    animation: ${fadeIn} ${animationDuration} ${animationEase} forwards;
`;

export const OrderImage = styled.img`
    width: 6.625rem;
    height: 6.625rem;
    object-fit: cover;
    border-radius: ${borderRadius};
    transition: transform ${hoverTransition};

    &:hover {
        animation: ${hoverScale} 0.3s ${animationEase} forwards;
    }

    @media (max-width: 768px) {
        width: 5rem;
        height: 5rem;
    }
`;

export const LeftOrderInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${gapSmall};
    animation: ${fadeIn} ${animationDuration} ${animationEase} forwards;
`;

export const DateText = styled.p`
    color: ${colors.LIGHT_GREEN_500};
    font-family: ${fonts.POPPINS};
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.5;
    margin: 0;
    transition: color ${hoverTransition};

    &:hover {
        color: ${colors.DARK_GREEN_2};
    }
`;

export const NumberOfItemsText = styled.p`
    color: ${colors.BLACK};
    font-family: ${fonts.POPPINS};
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    margin: 0;
    transition: color ${hoverTransition};

    &:hover {
        color: ${colors.LIGHT_GREEN_500};
    }
`;

export const OrderItemRight = styled.div`
    display: flex;
    align-items: center;
    gap: ${gapLarge};
    animation: ${fadeIn} ${animationDuration} ${animationEase} forwards;

    @media (max-width: 768px) {
        width: 100%;
        justify-content: space-between;
    }
`;

export const StatusLabel = styled.div<{ status: string }>`
    display: flex;
    padding: 0.75rem 1rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    background: ${({ status }) =>
    status === "In Process"
        ? colors.LIGHT_GREEN_100
        : status === "Canceled"
            ? colors.ERROR_100
            : colors.LIGHT_GREY_200};
    border-radius: ${borderRadius};
    white-space: nowrap;
    animation: ${pulse} 1.5s infinite;

    &:hover {
        animation: none;
    }
`;

export const StatusText = styled.p<{ status: string }>`
    color: ${({ status }) =>
    status === "In Process"
        ? colors.DARK_GREEN_2
        : status === "Canceled"
            ? colors.ERROR
            : colors.LIGHT_GREY_600};
    font-family: ${fonts.POPPINS};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.4;
    margin: 0;
    white-space: nowrap;
`;