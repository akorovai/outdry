import styled from "styled-components";
import { motion } from "framer-motion";
import { colors, fonts } from "../../consts";

export const PageContainer = styled(motion.div)`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
`;

export const MainContentContainer = styled(motion.div)`
    display: flex;
    padding: 30px 80px 50px 80px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
`;

export const WishListContent = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
`;

export const WishListHeaderContainer = styled(motion.div)`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const WishListTitle = styled(motion.p)`
    color: ${colors.BLACK};
    font-family: ${fonts.POPPINS};
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: 38px;
`;

export const DeleteAllButton = styled(motion.button)`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;

    svg {
        width: 32px;
        stroke: ${colors.ERROR};
    }

    p {
        color: ${colors.ERROR};
        font-family: ${fonts.POPPINS};
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
        align-self: stretch;
    }

    &:hover {
        opacity: 0.8;
    }
`;