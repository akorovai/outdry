import styled, { keyframes } from "styled-components";
import { colors, fonts } from "../../../consts";

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
`;

const hoverScale = keyframes`
    0% { transform: scale(1); }
    100% { transform: scale(1.05); }
`;

export const SectionContainer = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2.5rem;
`;

export const Divider = styled.div`
    height: 2px;
    width: 100%;
    background: ${colors.LIGHT_GREY_300};
`;

export const AddressBookContentSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    align-self: stretch;
    animation: ${fadeIn} 0.5s ease;
    flex: 1;
    overflow: hidden;
`;

export const AddressesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    align-self: stretch;
    flex: 1;
    overflow: hidden;
`;

export const AddressesHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    align-self: stretch;
`;

export const AddressesTitle = styled.h1`
    color: ${colors.BLACK};
    font-family: ${fonts.POPPINS};
    font-size: 1.875rem;
    font-weight: 500;
    line-height: 2.375rem;
    align-self: stretch;
`;

export const HeaderText = styled.p`
    color: ${colors.BLACK};
    font-family: ${fonts.POPPINS};
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.75rem;
    align-self: stretch;
`;

export const AddressList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    align-self: stretch;
    flex: 1;
    overflow-y: auto;
    padding-right: 0.625rem;

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

export const StoredAdrressText = styled.div`
    color: ${colors.BLACK};
    font-family: ${fonts.POPPINS};
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.75rem;
`;

export const AddressItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    align-self: stretch;
    padding: 1rem;
    border: 2px solid ${colors.LIGHT_GREY_300};
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    transform-origin: center;
    margin: 0.25rem 0;

    &:hover {
        transform: scale(1.01);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
`;

export const AddressFunctions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`;

export const AddressFunctionText = styled.div`
    color: ${colors.BLACK};
    font-family: ${fonts.POPPINS};
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.875rem;
    text-decoration: underline;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
        color: ${colors.LIGHT_GREEN_500};
        animation: ${hoverScale} 0.3s ease forwards;
    }
`;

export const InputField = styled.input`
    width: 100%;
    padding: 0.5rem;
    border: 1px solid ${colors.LIGHT_GREY_300};
    border-radius: 4px;
    font-family: ${fonts.POPPINS};
    font-size: 1rem;
    margin-bottom: 0.5rem;
`;