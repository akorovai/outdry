import styled from "styled-components";
import { motion } from "framer-motion";
import { colors, fonts } from "../../consts";

export const SectionContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 50px;
    align-self: stretch;
`;

export const ProductsSection = styled(motion.div)`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    align-self: stretch;
    flex-wrap: wrap;
    gap: 8px;
`;

export const ListNavigationPanel = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`;

export const NavbarPanelText = styled(motion.p)`
    color: ${colors.BLACK};
    font-family: ${fonts.POPPINS};
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
`;