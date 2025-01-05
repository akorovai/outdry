import styled from "styled-components";
import { motion } from "framer-motion";
import { colors, fonts } from "../../consts";

export const MainTitleText = styled(motion.h2)`
    color: ${colors.BLACK};
    font-family: ${fonts.POPPINS};
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 44px;
    letter-spacing: -0.72px;
`;

export const ColorfulTitleText = styled(motion.h2)`
    color: ${colors.LIGHT_GREEN_500};
    font-family: ${fonts.POPPINS};
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 44px;
    letter-spacing: -0.72px;
`;

export const PageContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
`;