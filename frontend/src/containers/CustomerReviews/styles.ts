import styled from 'styled-components';
import { colors, fonts } from '../../consts';
import { motion } from 'framer-motion';

// Reusable Styles
const flexColumn = `
  display: flex;
  flex-direction: column;
`;

const textStyle = (color: string, fontFamily: string, fontSize: string, fontWeight: string, lineHeight: string) => `
  color: ${color};
  font-family: ${fontFamily};
  font-size: ${fontSize};
  font-style: normal;
  font-weight: ${fontWeight};
  line-height: ${lineHeight};
`;

// Container Components
export const ComponentContainer = styled(motion.div)`
    ${flexColumn};
    padding: 6.25rem 5rem;
    gap: 2rem;
    align-self: stretch;
    width: 100%;
`;

export const ReviewSummary = styled.div`
    ${flexColumn};
    gap: 3.125rem;
    align-self: stretch;
    width: 100%;
`;

export const SummaryHeader = styled.div`
    ${flexColumn};
    gap: 1.5rem;
    align-self: stretch;
`;

export const HeaderText = styled.h1`
    ${textStyle(colors.BLACK, fonts.POPPINS, '2.25rem', '600', '2.75rem')}
    letter-spacing: -0.045rem;
`;

export const Divider = styled(motion.div)`
    width: 100%;
    height: 0.125rem;
    background-color: ${colors.LIGHT_GREY_400};
`;

// Stars Components
export const StarsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`;

export const StarsSummary = styled.div`
    display: flex;
    padding-left: 7.625rem;
    align-items: flex-end;
    gap: 1.25rem;
`;

export const StarsNumberContainer = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 0.25rem;
`;

export const MainNumber = styled.h1`
    ${textStyle(colors.BLACK, fonts.INTER, '2.5rem', '700', '2.75rem')}
    letter-spacing: -0.05rem;
`;

export const SecondaryNumberContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.125rem;
`;

export const SecondaryNumber = styled.h2`
    ${textStyle(colors.BLACK, fonts.POPPINS, '1.25rem', '400', '1.875rem')}
`;

export const StarsSummaryContainer = styled.div`
    ${flexColumn};
    width: 8.25rem;
    gap: 0.25rem;
`;

export const RatingAmountText = styled.p`
    ${textStyle(colors.BLACK, fonts.POPPINS, '0.875rem', '300', '145%')}
    opacity: 0.7;
`;

export const FillStarsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    align-self: stretch;
`;

// Progress Bar Components
export const LineProgressesComponent = styled.div`
    ${flexColumn};
    padding-right: 12rem;
    gap: 0.625rem;
`;

export const LineProgress = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const StarNumberContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        fill: ${colors.LIGHT_GREEN_500};
        width: 0.75rem;
    }
`;

export const StarNumberText = styled.div`
    ${textStyle(colors.BLACK, fonts.POPPINS, '1.25rem', '700', '145%')}
`;

export const PercantageValue = styled.div`
    ${textStyle(colors.BLACK, fonts.POPPINS, '0.875rem', '300', '145%')}
`;

export const ProgressBar = styled.div`
    display: flex;
    width: 20rem;
    align-items: center;
    gap: 0.75rem;
`;

export const ProgressBarLayer = styled.div`
    height: 0.5rem;
    flex: 1 0 0;
`;

export const ProgressBarBackground = styled.div`
    width: 20rem;
    height: 0.5rem;
    flex-shrink: 0;
    border-radius: 0.25rem;
    background: ${colors.LIGHT_GREY_200};
`;

export const ProgressBarValue = styled.div<{ width: number }>`
    width: ${({ width }) => width}%;
    height: 0.5rem;
    flex-shrink: 0;
    border-radius: 0.25rem;
    background: ${colors.LIGHT_GREEN_500};
`;

// Reviews Components
export const ReviewsContainer = styled(motion.div)`
    ${flexColumn};
    gap: 3.125rem;
    align-self: stretch;
`;

export const ReviewsContainerHeader = styled(motion.header)`
    ${flexColumn};
    gap: 1.5rem;
    align-self: stretch;
`;

export const ReviewsContainerHeaderContent = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`;

export const ReviewsContainerHeaderTitle = styled(motion.h1)`
    ${textStyle(colors.BLACK, fonts.POPPINS, '1.5rem', '500', '145%')}
`;

export const ReviewsContainerContent = styled(motion.div)`
    ${flexColumn};
    gap: 2rem;
    align-self: stretch;
`;

export const ReviewsListContainer = styled(motion.div)`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
`;

export const ReviewItemContainer = styled(motion.div)`
    ${flexColumn};
    width: 33%;
    gap: 0.75rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: ${colors.WHITE};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ReviewMessage = styled.p`
    ${flexColumn};
    width: 29rem;
    gap: 0.75rem;
`;

export const ReviewContainerHeader = styled.div`
    ${flexColumn};
    gap: 1.25rem;
    align-self: stretch;
`;

export const RCStarsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.3125rem;

    svg {
        width: 0.75rem;
        height: 0.75rem;
    }
`;

export const RCHeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`;

export const RCDateText = styled.div`
    ${textStyle(colors.BLACK, fonts.POPPINS, '0.875rem', '300', '145%')}
    opacity: 0.3;
`;

export const ReviewTitle = styled.span`
    ${textStyle(colors.BLACK, fonts.POPPINS, '1.5rem', '500', '145%')}
    width: 16.6875rem;
`;

export const ReviewTitleContainer = styled.div`
  ${flexColumn};
  align-items: flex-start;
`;

export const ReviewAuthor = styled.p`
  ${textStyle(colors.BLACK, fonts.POPPINS, '0.875rem', '300', '145%')}
  opacity: 0.7;
`;