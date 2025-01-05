import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors, fonts } from '../../consts';

export const BreadcrumbContainer = styled(motion.div)`
    display: flex;
    align-items: center;
    gap: 4px;

    svg {
        transform: rotate(180deg);
    }
`;

export const BreadcrumbText = styled(motion.p)`
    color: ${colors.BLACK};
    font-family: ${fonts.POPPINS};
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
    margin: 0;
`;