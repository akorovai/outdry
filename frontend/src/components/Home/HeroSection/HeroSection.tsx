import React from 'react';
import { MainButton, SVG } from '../../index.ts';
import {
    SectionContainer,
    ContentWrapper,
    TextWrapper,
    DiscountContainer,
    DiscountPercentage,
    DiscountText,
    PromotionText,
    AlmostContainer,
    AlmostText,
} from './HeroSection.styled.ts';

const HeroSection: React.FC = (): React.ReactElement => {
    return (
        <SectionContainer>
            <ContentWrapper>
                <TextWrapper>
                    <DiscountContainer>
                        <DiscountPercentage>20</DiscountPercentage>
                        <DiscountText>% Off</DiscountText>
                    </DiscountContainer>
                    <PromotionText>Everything</PromotionText>
                    <AlmostContainer>
                        <AlmostText>Almost</AlmostText>
                    </AlmostContainer>
                    <SVG.Vector color="white" />
                </TextWrapper>
                <MainButton width={50}>Start Shopping</MainButton>
            </ContentWrapper>
        </SectionContainer>
    );
};

export default HeroSection;