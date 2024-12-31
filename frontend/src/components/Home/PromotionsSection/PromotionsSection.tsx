import React from 'react';
import PromotionCard from "./Card/PromotionCard.tsx";
import TshirtPromotionImage from "../../../assets/images/T-Shirt-Promotion.png";
import RobePromotionImage from "../../../assets/images/RobePromotion.png";
import HoodiePromotionImage from "../../../assets/images/HoodiePromotion.png";
import {
    SectionContainer,
    SectionHeading,
    BrandName,
    CardsContainer,
    TitleContainer,
} from "./PromotionsSection.styles";

const PromotionsSection: React.FC = (): React.ReactElement => {
    return (
        <SectionContainer>
            <TitleContainer>
                <SectionHeading>More From</SectionHeading>
                <BrandName>Outdry</BrandName>
            </TitleContainer>
            <CardsContainer>
                <PromotionCard promotionText={'20% Off T-shirts'} imageUrl={TshirtPromotionImage} />
                <PromotionCard promotionText={'20% Off Robes'} imageUrl={RobePromotionImage} />
                <PromotionCard promotionText={'20% Off Hoodies'} imageUrl={HoodiePromotionImage} />
            </CardsContainer>
        </SectionContainer>
    );
};

export default PromotionsSection;