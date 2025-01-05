import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors, fonts } from '../../consts';

export const ProductFilterContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
`;

export const FilterHeader = styled(motion.div)`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
`;

export const FilterTitle = styled(motion.p)`
    color: ${colors.BLACK};
    font-family: ${fonts.POPPINS};
    font-size: 54px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0;
`;

export const DropDownContainers = styled(motion.div)`
    display: flex;
    align-items: center;
    gap: 12px;
    svg {
        width: 32px;
    }
`;

export const FiltersContainer = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`;

export const FeaturedContainer = styled(motion.div)`
    display: flex;
    gap: 12px;
    justify-content: space-between;
    align-items: center;
    svg {
        width: 32px;
    }
`;

export const ProductsText = styled(motion.div)`
    color: ${colors.BLACK};
    font-family: ${fonts.POPPINS};
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 145%;
    opacity: 0.7;
`;