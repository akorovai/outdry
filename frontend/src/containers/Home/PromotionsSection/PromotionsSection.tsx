import React from "react";

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
        <SectionContainer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <TitleContainer
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <SectionHeading>More From</SectionHeading>
                <BrandName>Outdry</BrandName>
            </TitleContainer>
            <CardsContainer
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <PromotionCard promotionText={"20% Off T-shirts"} imageUrl={TshirtPromotionImage} />
                <PromotionCard promotionText={"20% Off Robes"} imageUrl={RobePromotionImage} />
                <PromotionCard promotionText={"20% Off Hoodies"} imageUrl={HoodiePromotionImage} />
            </CardsContainer>
        </SectionContainer>
    );
};

export default PromotionsSection;