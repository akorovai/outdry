import React from 'react';
import { SVG } from '../../components';
import { colors } from '../../consts';


import {
    ReviewSummary,
    SummaryHeader,
    HeaderText,
    Divider,
    StarsContainer,
    StarsSummary,
    StarsNumberContainer,
    MainNumber,
    SecondaryNumberContainer,
    SecondaryNumber,
    StarsSummaryContainer,
    RatingAmountText,
    FillStarsContainer,
    LineProgressesComponent,
    LineProgress,
    StarNumberContainer,
    StarNumberText,
    PercantageValue,
    ProgressBar,
    ProgressBarLayer,
    ProgressBarBackground,
    ProgressBarValue,
} from './styles';



interface RatingSummaryProps {
    averageRating: number;
    totalReviews: number;
    starRatings: { stars: number; percentage: number }[];
    percentageOfReviewers: number;
}

export const RatingSummary: React.FC<RatingSummaryProps> = ({
                                                                averageRating,
                                                                totalReviews,
                                                                starRatings,
                                                            }) => {
    return (
        <ReviewSummary>
            <SummaryHeader>
                <HeaderText>Customer reviews</HeaderText>
                <Divider />
            </SummaryHeader>
            <StarsContainer>
                <StarsSummary>
                    <StarsNumberContainer>
                        <MainNumber>{averageRating}</MainNumber>
                        <SecondaryNumberContainer>
                            <SecondaryNumber>/</SecondaryNumber>
                            <SecondaryNumber>5</SecondaryNumber>
                        </SecondaryNumberContainer>
                    </StarsNumberContainer>
                    <StarsSummaryContainer>
                        <FillStarsContainer>
                            <SVG.Star color={colors.LIGHT_GREEN_500} />
                            <SVG.Star color={colors.LIGHT_GREEN_500} />
                            <SVG.Star color={colors.LIGHT_GREEN_500} />
                            <SVG.Star color={colors.LIGHT_GREEN_500} />
                            <SVG.Star color={colors.LIGHT_GREEN_500} />
                        </FillStarsContainer>
                        <RatingAmountText>{totalReviews} reviews</RatingAmountText>
                    </StarsSummaryContainer>
                </StarsSummary>
                <LineProgressesComponent>
                    {starRatings.map((rating, index) => (
                        <LineProgress key={index}>
                            <StarNumberContainer>
                                <StarNumberText>{rating.stars}</StarNumberText>
                                <SVG.Star color={colors.LIGHT_GREEN_500} />
                            </StarNumberContainer>
                            <ProgressBar>
                                <ProgressBarLayer>
                                    <ProgressBarBackground>
                                        <ProgressBarValue width={rating.percentage} />
                                    </ProgressBarBackground>
                                </ProgressBarLayer>
                            </ProgressBar>
                            <PercantageValue>{rating.percentage}%</PercantageValue>
                        </LineProgress>
                    ))}
                </LineProgressesComponent>
            </StarsContainer>

        </ReviewSummary>
    );
};