import React, { PropsWithChildren, useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProductCard from "../ProductCard/ProductCard.tsx";
import { colors } from "../../consts";
import { SVG } from "../index.ts";
import {
    ArrowContainer,
    Bulit,
    BulitsContainer,
    HeaderContainer,
    LeftContainer,
    SectionContainer,
    TitleRow,
    CarouselArrowsContainer,
    CardsContainer,
} from "./Promotions.styled.ts";

interface IPromotionPropsWithChildrenProps extends PropsWithChildren {
    isOnSale: boolean;
}

const Promotions: React.FC<IPromotionPropsWithChildrenProps> = ({ children, isOnSale }): React.ReactElement => {
    const [activeBullet, setActiveBullet] = useState(0);
    const [productsPerSlide, setProductsPerSlide] = useState(8);

    const products = [
        { name: "T-Shirt", colors: ["Crimson", "RoyalBlue", "LimeGreen"], price: 25.99 },
        { name: "Hoodie", colors: ["MidnightBlack", "PureWhite"], price: 49.99 },
        { name: "Jeans", colors: ["NavyBlue", "SaddleBrown"], price: 59.99 },
        { name: "Sneakers", colors: ["BrightOrange", "SlateGray"], price: 79.99 },
        { name: "Jacket", colors: ["DarkRed", "LightGray"], price: 99.99 },
        { name: "Cap", colors: ["GoldenYellow", "DeepPurple"], price: 19.99 },
        { name: "Socks", colors: ["SoftPink", "ForestGreen"], price: 9.99 },
        { name: "Shorts", colors: ["VividOrange", "AquaBlue"], price: 29.99 },
        { name: "Dress", colors: ["HotPink", "Indigo"], price: 69.99 },
        { name: "Skirt", colors: ["Gold", "BlueViolet"], price: 39.99 },
        { name: "Blouse", colors: ["Khaki", "Chartreuse"], price: 34.99 },
        { name: "Coat", colors: ["FireBrick", "LightSeaGreen"], price: 89.99 },
        { name: "Sweater", colors: ["Chocolate", "CornflowerBlue"], price: 54.99 },
        { name: "Pants", colors: ["Crimson", "DarkTurquoise"], price: 49.99 },
        { name: "Scarf", colors: ["DarkOrange", "DarkOrchid"], price: 24.99 },
        { name: "Gloves", colors: ["DarkRed", "MediumSpringGreen"], price: 14.99 },
        { name: "Belt", colors: ["DarkSlateBlue", "DeepPink"], price: 19.99 },
        { name: "Hat", colors: ["SeaGreen", "Magenta"], price: 29.99 },
        { name: "Shoes", colors: ["DarkMagenta", "DeepSkyBlue"], price: 89.99 },
        { name: "Backpack", colors: ["DarkOliveGreen", "Tomato"], price: 49.99 },
        { name: "Wallet", colors: ["Sienna", "LawnGreen"], price: 29.99 },
        { name: "Watch", colors: ["MediumBlue", "Coral"], price: 99.99 },
        { name: "Sunglasses", colors: ["DarkGoldenrod", "MediumTurquoise"], price: 39.99 },
        { name: "Jewelry", colors: ["PeachPuff", "BlueViolet"], price: 59.99 },
        { name: "Umbrella", colors: ["OrangeRed", "Cyan"], price: 19.99 },
        { name: "Tie", colors: ["Maroon", "SpringGreen"], price: 14.99 },
        { name: "Shirt", colors: ["DarkSlateBlue", "HotPink"], price: 29.99 },
        { name: "Vest", colors: ["MediumSeaGreen", "Fuchsia"], price: 39.99 },
    ];

    const totalBullets = Math.ceil(products.length / productsPerSlide);

    const startIndex = activeBullet * productsPerSlide;
    const endIndex = startIndex + productsPerSlide;
    const visibleProducts = products.slice(startIndex, endIndex);

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

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setProductsPerSlide(1);
            } else if (window.innerWidth < 1200) {
                setProductsPerSlide(3);
            } else if (window.innerWidth < 1600) {
                setProductsPerSlide(5);
            } else {
                setProductsPerSlide(7);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <SectionContainer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <HeaderContainer
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <LeftContainer
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <TitleRow>{children}</TitleRow>
                    <BulitsContainer>
                        {[...Array(totalBullets)].map((_, index) => (
                            <Bulit
                                key={index}
                                isActive={index === activeBullet}
                                onClick={() => setActiveBullet(index)}
                                as={motion.div}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                animate={{ backgroundColor: index === activeBullet ? colors.LIGHT_GREEN_400 : colors.LIGHT_GREY }}
                            />
                        ))}
                    </BulitsContainer>
                </LeftContainer>
                <CarouselArrowsContainer>
                    <ArrowContainer
                        isActive={activeBullet > 0}
                        onClick={activeBullet > 0 ? handlePrev : undefined}
                        isLeft
                        as={motion.div}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        animate={{
                            border: activeBullet > 0 ? 'none' : '1px solid #000',
                            background: activeBullet > 0 ? colors.DARK_GREEN_2 : colors.WHITE,
                            opacity: activeBullet > 0 ? 1 : 0.5,
                        }}
                    >
                        <SVG.Arrow color={activeBullet > 0 ? colors.WHITE : colors.BLACK} />
                    </ArrowContainer>
                    <ArrowContainer
                        isActive={activeBullet < totalBullets - 1}
                        onClick={activeBullet < totalBullets - 1 ? handleNext : undefined}
                        as={motion.div}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        animate={{
                            border: activeBullet < totalBullets - 1 ? 'none' : '1px solid #000',
                            background: activeBullet < totalBullets - 1 ? colors.DARK_GREEN_2 : colors.WHITE,
                            opacity: activeBullet < totalBullets - 1 ? 1 : 0.5,
                        }}
                    >
                        <SVG.Arrow color={activeBullet < totalBullets - 1 ? colors.WHITE : colors.BLACK} />
                    </ArrowContainer>
                </CarouselArrowsContainer>
            </HeaderContainer>
            <CardsContainer>
                {visibleProducts.map((product, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <ProductCard
                            name={product.name}
                            colors={product.colors}
                            price={product.price}
                            isOnSale={isOnSale}
                        />
                    </motion.div>
                ))}
            </CardsContainer>
        </SectionContainer>
    );
};

export default Promotions;