import styled from "styled-components";
import { colors, fonts } from "../../../consts";

export const SectionContainer = styled.div`
    display: flex;
    padding: 40px 80px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;
`;

export const SectionHeading = styled.h2`
    color: ${colors.BLACK};
    font-family: ${fonts.POPPINS};
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 44px;
    letter-spacing: -0.72px;
`;

export const BrandName = styled.span`
    color: ${colors.LIGHT_GREEN_500};
    font-family: ${fonts.POPPINS};
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 44px;
    letter-spacing: -0.72px;
`;

export const CardsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    align-self: stretch;
    justify-content: space-between;
`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: baseline;
    gap: 8px;
`;