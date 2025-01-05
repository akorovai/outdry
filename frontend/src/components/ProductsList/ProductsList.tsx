import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import { ProductCard } from "../index.ts";
import ArrowButton from "../Button/ArrowButton.tsx";
import { colors, fonts } from "../../consts";

const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 50px;
    align-self: stretch;
`;


const ProductsSection = styled.section`
    display: flex;
    align-items: center;
    align-content: center;

    justify-content: space-between;
    align-self: stretch;
    flex-wrap: wrap;
    gap: 8px;
`;
const ListNavigationPanel = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`;


const NavbarPanelText = styled.p`
    color: ${colors.BLACK};
    font-family: ${fonts.POPPINS};
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
`;
interface IProductListProps {

    isWishList: boolean;
}
const ProductsList: React.FC<IProductListProps> = ({isWishList}): React.ReactElement => {
    const products = [
        { name: "T-Shirt", colors: ["#FF0000", "#0000FF"], price: 25.99, isOnSale: true },
        { name: "Hoodie", colors: ["#000000", "#FFFFFF"], price: 49.99, isOnSale: false },
        { name: "Jeans", colors: ["#000080", "#8B4513"], price: 59.99, isOnSale: false },
        { name: "Sneakers", colors: ["#FFA500", "#808080"], price: 79.99, isOnSale: true },
        { name: "Jacket", colors: ["#A52A2A", "#D3D3D3"], price: 99.99, isOnSale: false },
        { name: "Cap", colors: ["#FFFF00", "#800080"], price: 19.99, isOnSale: true },
        { name: "Socks", colors: ["#FFC0CB", "#008000"], price: 9.99, isOnSale: false },
        { name: "Shorts", colors: ["#FF4500", "#00FFFF"], price: 29.99, isOnSale: true },
        { name: "Dress", colors: ["#FF1493", "#4B0082"], price: 69.99, isOnSale: false },
        { name: "Skirt", colors: ["#FFD700", "#8A2BE2"], price: 39.99, isOnSale: true },
        { name: "Blouse", colors: ["#F0E68C", "#7FFF00"], price: 34.99, isOnSale: false },
        { name: "Coat", colors: ["#B22222", "#20B2AA"], price: 89.99, isOnSale: true },
        { name: "Sweater", colors: ["#D2691E", "#6495ED"], price: 54.99, isOnSale: false },
        { name: "Pants", colors: ["#DC143C", "#00CED1"], price: 49.99, isOnSale: true },
        { name: "Scarf", colors: ["#FF8C00", "#9932CC"], price: 24.99, isOnSale: false },
        { name: "Gloves", colors: ["#8B0000", "#00FA9A"], price: 14.99, isOnSale: true },
        { name: "Belt", colors: ["#483D8B", "#FF69B4"], price: 19.99, isOnSale: false },
        { name: "Hat", colors: ["#2E8B57", "#FF00FF"], price: 29.99, isOnSale: true },
        { name: "Shoes", colors: ["#8B008B", "#00BFFF"], price: 89.99, isOnSale: false },
        { name: "Backpack", colors: ["#556B2F", "#FF6347"], price: 49.99, isOnSale: true },
        { name: "Wallet", colors: ["#8B4513", "#7CFC00"], price: 29.99, isOnSale: false },
        { name: "Watch", colors: ["#0000CD", "#FF7F50"], price: 99.99, isOnSale: true },
        { name: "Sunglasses", colors: ["#B8860B", "#48D1CC"], price: 39.99, isOnSale: false },
        { name: "Jewelry", colors: ["#FFDAB9", "#8A2BE2"], price: 59.99, isOnSale: true },
        { name: "Umbrella", colors: ["#FF4500", "#00FFFF"], price: 19.99, isOnSale: false },
        { name: "Tie", colors: ["#8B0000", "#00FA9A"], price: 14.99, isOnSale: true },
        { name: "Shirt", colors: ["#483D8B", "#FF69B4"], price: 29.99, isOnSale: false },
        { name: "Vest", colors: ["#2E8B57", "#FF00FF"], price: 39.99, isOnSale: true },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerRow, setProductsPerRow] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);
    const productCardWidth = 235;

    useEffect(() => {
        const updateProductsPerRow = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                const gap = 8;
                const maxProductsPerRow = Math.floor((containerWidth + gap) / (productCardWidth + gap));
                setProductsPerRow(Math.max(1, Math.min(maxProductsPerRow, 7)));
            }
        };

        updateProductsPerRow();
        window.addEventListener("resize", updateProductsPerRow);
        return () => window.removeEventListener("resize", updateProductsPerRow);
    }, []);

    const productsPerPage = productsPerRow * 3;
    const totalPages = Math.ceil(products.length / productsPerPage);

    const handlePreviousClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);

    return (
        <SectionContainer>
            <ProductsSection ref={containerRef}>
                {currentProducts.map((product, index) => (
                    <ProductCard
                        key={index}
                        name={product.name}
                        colors={product.colors}
                        price={product.price}
                        isOnSale={product.isOnSale}
                        isWishlist={isWishList}
                        size={'XD'}
                        color={'Grey'}
                    />
                ))}
            </ProductsSection>
            <ListNavigationPanel>
                <ArrowButton text="Previous" direction="previous" onClick={handlePreviousClick} disabled={currentPage === 1} />
                <NavbarPanelText>{`${currentPage} of ${totalPages}`}</NavbarPanelText>
                <ArrowButton text="Next" direction="next" onClick={handleNextClick} disabled={currentPage === totalPages} />
            </ListNavigationPanel>
        </SectionContainer>
    );
};

export default ProductsList;