import React, { useState } from 'react';
import { ReviewsHeader } from './ReviewsHeader';
import { ReviewsContainer, ReviewsContainerContent } from './styles';
import { SVG } from '../../components';
import { colors, fonts } from '../../consts';
import styled from 'styled-components';
import { ReviewsList } from './ReviewsList.tsx';
import { motion } from 'framer-motion';

interface ReviewsSectionProps {
    reviews: {
        title: string;
        author: string;
        date: string;
        message: string;
        rating: number;
    }[];
}

export const MoreReviewsSection = styled(motion.section)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
`;

export const MoreReviewsText = styled.span`
    color: ${colors.BLACK};
    width: 7.5rem;

    font-family: ${fonts.POPPINS};
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 155.556% */
`;

export const MoreReviewsButton = styled(motion.section)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    border-radius: 1.375rem;
    background: ${colors.DARK_GREEN_2};
`;

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Stagger the animation of children by 0.2 seconds
        },
    },
};

const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <ReviewsContainer
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <ReviewsHeader />
            <ReviewsContainerContent variants={childVariants}>
                <ReviewsList reviews={reviews} />
                <MoreReviewsSection variants={childVariants}>
                    <MoreReviewsText>More reviews</MoreReviewsText>
                    <MoreReviewsButton
                        initial={{ rotate: -90 }}
                        animate={{ rotate: -90, scale: isHovered ? 1.1 : 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onHoverStart={() => setIsHovered(true)}
                        onHoverEnd={() => setIsHovered(false)}
                    >
                        <SVG.Arrow color={colors.WHITE} />
                    </MoreReviewsButton>
                </MoreReviewsSection>
            </ReviewsContainerContent>
        </ReviewsContainer>
    );
};