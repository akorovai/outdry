import React from 'react';
import { SVG } from '../../components';
import { colors } from '../../consts';
import {
    ReviewItemContainer,
    ReviewContainerHeader,
    RCStarsContainer,
    RCHeaderContent,
    ReviewTitleContainer,
    ReviewTitle,
    ReviewAuthor,
    RCDateText,
    ReviewMessage,
} from './styles';

interface ReviewItemProps {
    title: string;
    author: string;
    date: string;
    message: string;
    rating: number;
}
export const ReviewItem: React.FC<ReviewItemProps> = ({ title, author, date, message, rating }) => {
    return (
        <ReviewItemContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            whileHover={{ scale: 1.02, boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)' }}
            whileTap={{ scale: 0.98 }}
        >
            <ReviewContainerHeader>
                <RCStarsContainer>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <SVG.Star key={index} color={index < rating ? colors.LIGHT_GREEN_500 : colors.LIGHT_GREY_200} />
                    ))}
                </RCStarsContainer>
                <RCHeaderContent>
                    <ReviewTitleContainer>
                        <ReviewTitle>{title}</ReviewTitle>
                        <ReviewAuthor>{author}</ReviewAuthor>
                    </ReviewTitleContainer>
                    <RCDateText>{date}</RCDateText>
                </RCHeaderContent>
            </ReviewContainerHeader>
            <ReviewMessage>{message}</ReviewMessage>
        </ReviewItemContainer>
    );
};