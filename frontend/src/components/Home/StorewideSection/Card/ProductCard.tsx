import React from 'react';
import styled from "styled-components";
import { colors, fonts } from "../../../../consts";

const ProductCardContainer = styled.div`
    display: flex;
    width: 235px;
    height: 580px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    flex-shrink: 0;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    overflow: hidden;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
`;

const ProductImageContainer = styled.div<{ imageUrl?: string }>`
    display: flex;
    width: 235px;
    height: 320px;
    padding: 8px 8px 272px 154px;
    flex-direction: column;
    align-items: center;
    border: 1px solid ${colors.LIGHT_GREY_300};
    background: ${({ imageUrl }) => (imageUrl ? `url(${imageUrl})` : 'lightgray')} 50% / cover no-repeat;
`;

const ProductInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 8px;
    gap: 16px;
    flex: 1;
`;

const ProductInfoHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    p {
        color: ${colors.BLACK};
        font-family: ${fonts.POPPINS};
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        margin: 0;
    }
`;

const SaleLabel = styled.div`
    display: flex;
    height: 40px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    background: ${colors.LIGHT_GREEN_500};

    p {
        color: ${colors.WHITE};
        font-family: ${fonts.POPPINS};
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
    }
`;

const PriceAndColorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    align-self: stretch;
`;

const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;

    h4 {
        color: ${colors.BLACK};
        font-family: ${fonts.POPPINS};
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 32px;
    }

    h5 {
        color: ${colors.BLACK};
        font-family: ${fonts.POPPINS};
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
        opacity: 0.7;
    }

    h6 {
        color: ${colors.ORANGE};
        font-family: ${fonts.POPPINS};
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
        text-decoration-line: strikethrough;
    }
`;

const ColorContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const ColorCircle = styled.div<{ color: string }>`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${({ color }) => color};
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

interface IProductCardProps {
    name: string;
    colors: string[];
    price: number;
}

const ProductCard: React.FC<IProductCardProps> = ({ name, colors, price }): React.ReactElement => {
    const discountedPrice = price * 0.8;

    return (
        <ProductCardContainer>
            <ProductImageContainer>
                <SaleLabel>
                    <p>On Sale</p>
                </SaleLabel>
            </ProductImageContainer>
            <ProductInfoContainer>
                <ProductInfoHeader>
                    <p>{`${name} - ${colors.join(', ')}`}</p>
                </ProductInfoHeader>
                <PriceAndColorContainer>
                    <PriceContainer>
                        <h4>${discountedPrice.toFixed(2)}</h4>
                        <h5>/</h5>
                        <h6>${price.toFixed(2)}</h6>
                    </PriceContainer>
                    <ColorContainer>
                        {colors.map((color, index) => (
                            <ColorCircle key={index} color={color} />
                        ))}
                    </ColorContainer>
                </PriceAndColorContainer>
            </ProductInfoContainer>
        </ProductCardContainer>
    );
};

export default ProductCard;