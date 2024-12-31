import React, { useState } from 'react';
import styled from "styled-components";
import { colors, fonts } from "../../../consts";
import { SVG } from "../../index.ts";
import ProductCard from "./Card/ProductCard.tsx";

const SectionContainer = styled.div`
    display: flex;
    padding: 0 0 100px 80px;
    flex-direction: column;
    align-items: flex-start;
    gap: 50px;
    align-self: stretch;
`;

const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    padding-right: 80px;
    justify-content: space-between;
    align-items: center;
`;

const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
`;

const TitleRow = styled.div`
    display: flex;
    align-items: baseline;
    gap: 8px;
    white-space: nowrap;
`;

const MainTitleText = styled.h2`
    color: ${colors.BLACK};
    font-family: ${fonts.POPPINS};
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 44px;
    letter-spacing: -0.72px;
`;

const ColorfulTitleText = styled.h2`
    color: ${colors.LIGHT_GREEN_500};
    font-family: ${fonts.POPPINS};
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 44px;
    letter-spacing: -0.72px;
`;

const BulitsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

interface BulitProps {
    isActive?: boolean;
}

const Bulit = styled.div<BulitProps>`
    width: 40px;
    height: 8px;
    border-radius: 4px;
    background: ${({ isActive }) => (isActive ? colors.LIGHT_GREEN_400 : colors.LIGHT_GREY)};
    transition: background 0.3s ease;
`;

const CarouselArrowsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const ArrowContainer = styled.div<{ isActive: boolean; isLeft?: boolean }>`
    display: flex;
    width: 36px;
    height: 36px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    border-radius: 18px;
    border: ${({ isActive }) => (isActive ? 'none' : '1px solid #000')};
    background: ${({ isActive }) => (isActive ? colors.DARK_GREEN_2 : colors.WHITE)};
    transform: ${({ isLeft }) => (isLeft ? 'rotate(0deg)' : 'rotate(180deg)')};
    cursor: ${({ isActive }) => (isActive ? 'pointer' : 'auto')};
    opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
    transition: all 0.3s ease;
`;


const CardsContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-start;
    gap: 16px;
`
const StoreWideSection: React.FC = (): React.ReactElement => {
    const [activeBullet, setActiveBullet] = useState(0);
    const totalBullets = 4; // Общее количество буллетов


    const handlePrev = () => {
        if (activeBullet > 0) {
            setActiveBullet(activeBullet - 1);
        }
    };


    const handleNext = () => {
        if (activeBullet < totalBullets - 1) {
            setActiveBullet(activeBullet + 1);
        }
    };

    return (
        <SectionContainer>
            <HeaderContainer>
                <LeftContainer>
                    <TitleRow>
                        <MainTitleText>Storewide</MainTitleText>
                        <ColorfulTitleText>20% Off</ColorfulTitleText>
                        <MainTitleText>Men, Women & Kids</MainTitleText>
                    </TitleRow>
                    <BulitsContainer>
                        {[...Array(totalBullets)].map((_, index) => (
                            <Bulit key={index} isActive={index === activeBullet} />
                        ))}
                    </BulitsContainer>
                </LeftContainer>
                <CarouselArrowsContainer>

                    <ArrowContainer
                        isActive={activeBullet > 0}
                        onClick={activeBullet > 0 ? handlePrev : undefined}
                        isLeft
                    >
                        <SVG.Arrow color={activeBullet > 0 ? colors.WHITE : colors.BLACK} />
                    </ArrowContainer>

                    <ArrowContainer
                        isActive={activeBullet < totalBullets - 1}
                        onClick={activeBullet < totalBullets - 1 ? handleNext : undefined}
                    >
                        <SVG.Arrow color={activeBullet < totalBullets - 1 ? colors.WHITE : colors.BLACK} />
                    </ArrowContainer>
                </CarouselArrowsContainer>
            </HeaderContainer>
            <CardsContainer>
                <ProductCard name="T-Shirt" colors={["Red", "Blue", "Green"]} price={25.99} />
                <ProductCard name="Hoodie" colors={["Black", "White"]} price={49.99} />
                <ProductCard name="T-Shirt" colors={["Red", "Blue", "Green"]} price={25.99} />
                <ProductCard name="Hoodie" colors={["Black", "White"]} price={49.99} />
                <ProductCard name="T-Shirt" colors={["Red", "Blue", "Green"]} price={25.99} />
                <ProductCard name="Hoodie" colors={["Black", "White"]} price={49.99} />
                <ProductCard name="T-Shirt" colors={["Red", "Blue", "Green"]} price={25.99} />
            </CardsContainer>
        </SectionContainer>
    );
};

export default StoreWideSection;