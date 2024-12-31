import styled from 'styled-components';
import backgroundImage from '../../../assets/images/HomePageFirstSectionBackground.jpg';
import { colors, fonts } from '../../../consts';

export const SectionContainer = styled.div`
    display: flex;
    padding: 220px 80px 146px 80px;
    align-items: center;
    align-self: stretch;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-left: 80px;
`;

export const TextWrapper = styled.div`
    height: 380px;
    flex-shrink: 0;
    position: relative;
`;

export const DiscountContainer = styled.div`
    display: flex;
    gap: 10px;
`;

export const DiscountPercentage = styled.p`
    color: ${colors.WHITE};
    font-family: ${fonts.POPPINS};
    font-size: 130px;
    font-style: normal;
    font-weight: 600;
    line-height: 115%;
    margin: 0;
`;

export const DiscountText = styled.p`
    color: ${colors.WHITE};
    font-family: ${fonts.CAVEAT};
    font-size: 130px;
    font-style: normal;
    font-weight: 400;
    line-height: 115%;
    margin: 0;
`;

export const PromotionText = styled.p`
    color: ${colors.WHITE};
    font-family: ${fonts.CAVEAT};
    font-size: 90px;
    font-style: normal;
    font-weight: 700;
    line-height: 115%;
    text-transform: uppercase;
    margin: 0;
`;

export const AlmostContainer = styled.div`
    display: inline-flex;
    padding: 8px 10px;
    justify-content: center;
    align-items: center;
    gap: 2px;
    border-radius: 4px;
    background: ${colors.ORANGE};
    position: absolute;
    top: 40%;
    margin: 0;
    transform: translate(-50%, -50%) rotate(-7deg);
`;

export const AlmostText = styled.p`
    color: ${colors.WHITE};
    font-family: ${fonts.CAVEAT};
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0;
`;