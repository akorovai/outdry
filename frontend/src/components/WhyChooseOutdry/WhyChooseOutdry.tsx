import React from 'react';
import { motion } from 'framer-motion';
import {
    SectionComponent,
    TextContainerComponent,
    MainTitleText,
    ColorfulTitleText,
    ListContainer,
    TextElementBlock,
    NumberElement,
    TextElement,
    PicturesContainer,
    MainPictureContainer,
    SecondaryPicturesContaiener,
    SecondaryPictureContainer
} from "./WhyChooseOutdry.styled.ts";
import secondaryImage1 from "/src/assets/images/WhyChooseOutdry_2.png";
import secondaryImage2 from "/src/assets/images/WhyChooseOutdry_3.png";

const WhyChooseOutdry: React.FC = (): React.ReactElement => {
    const benefitsList = [
        "Wide Selection of Quality Products: Our online store offers a diverse range of high-quality items, ensuring you find exactly what you need, from the latest fashion trends to essential everyday items.",
        "Competitive Pricing: We provide affordable prices without compromising on quality, making luxury accessible to everyone.",
        "Convenient Shopping Experience: Our user-friendly website and mobile app make it easy to browse, select, and purchase products from the comfort of your home. Fast and reliable delivery options ensure your items arrive.",
        "Excellent Customer Service: Our dedicated customer support team is available to assist you with any questions or concerns, providing prompt and friendly service to ensure your shopping experience is smooth.",
        "Secure and Easy Payment Options: We offer a variety of secure payment methods to suit your preferences, ensuring that your personal and financial information is protected while making transactions convenient and hassle-free.",
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Delay between child animations
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } },
    };

    return (
        <SectionComponent>
            <TextContainerComponent>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={containerVariants}
                >
                    <MainTitleText as={motion.h2} variants={childVariants}>
                        Why Choose <ColorfulTitleText as={motion.span} variants={childVariants}>Outdry</ColorfulTitleText>?
                    </MainTitleText>
                    <ListContainer>
                        {benefitsList.map((benefit, index) => (
                            <TextElementBlock as={motion.div} key={index} variants={childVariants}>
                                <NumberElement>{index + 1}.</NumberElement>
                                <TextElement>{benefit}</TextElement>
                            </TextElementBlock>
                        ))}
                    </ListContainer>
                </motion.div>
            </TextContainerComponent>
            <PicturesContainer>
                <MainPictureContainer
                    as={motion.div}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={imageVariants}
                />
                <SecondaryPicturesContaiener>
                    <SecondaryPictureContainer
                        as={motion.div}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={imageVariants}
                        image={secondaryImage1}
                    />
                    <SecondaryPictureContainer
                        as={motion.div}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={imageVariants}
                        image={secondaryImage2}
                    />
                </SecondaryPicturesContaiener>
            </PicturesContainer>
        </SectionComponent>
    );
};

export default WhyChooseOutdry;