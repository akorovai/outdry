import React, { useState } from 'react';
import styled from 'styled-components';
import { Breadcrumb, MainButton, SVG } from '../../components';
import { useParams } from 'react-router-dom';
import { colors, fonts } from '../../consts';

const ProductPageContainer = styled.section`
    display: flex;
    padding: 50px 100px 100px 100px;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;
`;

const ProductImagesContainer = styled.article`
    display: flex;
    width: 830px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
`;

const MainImageSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    align-self: stretch;
`;

const MainProductImage = styled.figure`
    height: 600px;
    align-self: stretch;
    background-color: #f0f0f0;
    margin: 0;
`;

const SecondaryImagesSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    margin: 0;
`;

const SecondaryImagesRow = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    align-self: stretch;
`;

const SecondaryImage = styled.figure`
    display: flex;
    width: 409px;
    height: 500px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #e0e0e0;
    margin: 0;
`;

const ProductDetailsContainer = styled.article`
    display: flex;
    width: 100%;
    padding-top: 29px;
    flex-direction: column;
    align-items: flex-start;
    gap: 36px;
`;

const ProductDescriptionContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 28px;
    align-self: stretch;
`;

const DescriptionTextContainer = styled.article`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
`;

const ProductDescriptionText = styled.p`
    color: ${colors.BLACK};
    align-self: stretch;
    font-family: ${fonts.POPPINS};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
`;

const ProductDescriptionHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
`;

const ProductTitle = styled.h1`
    color: ${colors.BLACK};
    align-self: stretch;
    font-family: ${fonts.INTER};
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 44px;
    letter-spacing: -0.72px;
    margin: 0;
    padding: 0;
`;

const AdditionalProductInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`;

const ProductIDText = styled.p`
    color: ${colors.BLACK};
    font-family: ${fonts.POPPINS};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
`;

const ReviewsCountText = styled.p`
    color: ${colors.BLACK};
    opacity: 0.7;
    font-family: ${fonts.POPPINS};
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 145%;
`;

const ColorAndSizeOptionsContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;
`;

const ColorOptionsContainer = styled.article`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`;

const ColorOptionsTitle = styled.h2`
    color: ${colors.BLACK};
    font-family: ${fonts.POPPINS};
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
    align-self: stretch;
`;

const ColorCirclesContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    align-self: stretch;
`;

const ColorCircle = styled.div<{ color: string; isSelected: boolean }>`
    position: relative;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: ${({ color }) => color};
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: ${({ isSelected }) => (isSelected ? '1px solid #000' : 'none')};

    &::after {
        content: '${({ isSelected }) => (isSelected ? '✔' : '')}';
        color: #ffffff;
        font-size: 14px;
        font-weight: bold;
        position: absolute;
        z-index: 2;
    }
`;

const SizeOptionsContainer = styled.article`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
`;

const SizeOptionsTitle = styled.h2`
    color: ${colors.BLACK};
    font-family: ${fonts.INTER};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
`;

const SizeOptionsList = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    align-self: stretch;
`;

const SizeOption = styled.div<{ isSelected: boolean }>`
    display: flex;
    width: 50px;
    height: 40px;
    padding: 14px 29px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 2px solid ${colors.BLACK};
    background: ${({ isSelected }) => (isSelected ? colors.BLACK : colors.WHITE)};
    cursor: pointer;

    p {
        color: ${({ isSelected }) => (isSelected ? colors.WHITE : colors.BLACK)};
        font-family: ${fonts.POPPINS};
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-transform: uppercase;
    }
`;

const PriceAndDiscountContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    align-self: stretch;
`;

const DiscountTextContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`;

const DiscountText = styled.p`
    color: ${colors.BLACK};
    font-family: ${fonts.POPPINS};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    opacity: 45%;
`;

const PriceInfoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;

const MainPriceText = styled.p`
    color: ${colors.BLACK};
    font-family: ${fonts.POPPINS};
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 38px;
`;

const SeparatorPriceSymbol = styled.p`
    color: ${colors.BLACK};
    font-family: ${fonts.POPPINS};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
`;

const DiscountNumber = styled.p`
    color: ${colors.ORANGE};
    font-family: ${fonts.POPPINS};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    text-decoration-line: line-through;
    opacity: 0.7;
`;

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
`;

const AddToWishListContainer = styled.div<{ isInWishlist: boolean }>`
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    svg {
        width: 20px;
        fill: ${({ isInWishlist }) => (isInWishlist ? colors.ERROR : 'none')};
        transition: fill 0.2s ease, stroke 0.2s ease;
    }

    &:hover svg {
        stroke: ${colors.ERROR};
    }
`;

const AddToWishListText = styled.p<{ isInWishlist: boolean }>`
    color: ${({ isInWishlist }) => (isInWishlist ? colors.ERROR : colors.ORANGE)};
    font-family: ${fonts.INTER};
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
    transition: color 0.2s ease;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
`;

const ProductDescription: React.FC = () => {
    const { category, id } = useParams<{ category: string; id: string }>();
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [isInWishlist, setIsInWishlist] = useState<boolean>(false);

    const title = category ? category.charAt(0).toUpperCase() + category.slice(1) : '';
    const colorOptions = ['#ffffff', '#ff0000', '#00ff00', '#0000ff', '#ffff00'];
    const sizeOptions = ['S', 'M', 'L', 'XL', 'XXL'];

    const toggleWishlist = () => setIsInWishlist((prev) => !prev);

    return (
        <ProductPageContainer>
            <MainImageSection>
                <ProductImagesContainer>
                    <Breadcrumb items={['Home', title, `${id}`]} />
                    <MainProductImage />
                    <SecondaryImagesSection>
                        <SecondaryImagesRow>
                            <SecondaryImage />
                            <SecondaryImage />
                        </SecondaryImagesRow>
                    </SecondaryImagesSection>
                </ProductImagesContainer>
            </MainImageSection>
            <ProductDetailsContainer>
                <ProductDescriptionContainer>
                    <DescriptionTextContainer>
                        <ProductDescriptionHeader>
                            <AdditionalProductInfoContainer>
                                <ProductIDText>#{id}</ProductIDText>
                                <ReviewsCountText>146 reviews</ReviewsCountText>
                            </AdditionalProductInfoContainer>
                            <ProductTitle>Seashell Changing Robe 3.0</ProductTitle>
                        </ProductDescriptionHeader>
                        <ProductDescriptionText>
                            Stay warm and dry with the Seashell Changing Robe 3.0, designed for ultimate comfort after water
                            activities. Crafted from high-quality, quick-drying materials, this robe offers excellent insulation
                            and protection against wind and rain. The spacious design allows easy changing, while the deep pockets
                            provide convenient storage for your essentials. Ideal for beachgoers, surfers, and outdoor enthusiasts,
                            the Seashell Changing Robe 3.0 keeps you comfortable in any weather.
                        </ProductDescriptionText>
                    </DescriptionTextContainer>
                    <ColorAndSizeOptionsContainer>
                        <ColorOptionsContainer>
                            <ColorOptionsTitle>Color</ColorOptionsTitle>
                            <ColorCirclesContainer>
                                {colorOptions.map((color) => (
                                    <ColorCircle
                                        key={color}
                                        color={color}
                                        isSelected={selectedColor === color}
                                        onClick={() => setSelectedColor(color)}
                                    />
                                ))}
                            </ColorCirclesContainer>
                        </ColorOptionsContainer>
                        <SizeOptionsContainer>
                            <SizeOptionsTitle>Size</SizeOptionsTitle>
                            <SizeOptionsList>
                                {sizeOptions.map((size) => (
                                    <SizeOption
                                        key={size}
                                        isSelected={selectedSize === size}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        <p>{size}</p>
                                    </SizeOption>
                                ))}
                            </SizeOptionsList>
                        </SizeOptionsContainer>
                    </ColorAndSizeOptionsContainer>
                </ProductDescriptionContainer>
                <PriceAndDiscountContainer>
                    <DiscountTextContainer>
                        <PriceInfoContainer>
                            <MainPriceText>$60.00</MainPriceText>
                            <PriceInfoContainer>
                                <SeparatorPriceSymbol>/</SeparatorPriceSymbol>
                                <DiscountNumber>$80.00</DiscountNumber>
                            </PriceInfoContainer>
                        </PriceInfoContainer>
                        <DiscountText>The discount is 25%</DiscountText>
                    </DiscountTextContainer>
                    <ButtonsContainer>
                        <AddToWishListContainer isInWishlist={isInWishlist} onClick={toggleWishlist}>
                            <SVG.Like color={colors.ERROR} />
                            <AddToWishListText isInWishlist={isInWishlist}>
                                {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
                            </AddToWishListText>
                        </AddToWishListContainer>
                        <ButtonContainer>
                            <MainButton backgroundColor={colors.LIGHT_GREEN_400} textColor={colors.WHITE}>
                                Add to Cart
                            </MainButton>
                        </ButtonContainer>
                    </ButtonsContainer>
                </PriceAndDiscountContainer>
            </ProductDetailsContainer>
        </ProductPageContainer>
    );
};

export default ProductDescription;