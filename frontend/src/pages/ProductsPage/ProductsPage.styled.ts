import styled from "styled-components";
import { motion } from "framer-motion";

export const PageContainer = styled(motion.div)`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
`;

export const FilterWithProductsContainer = styled(motion.div)`
    display: flex;
    padding: 50px 100px 100px 100px;
    flex-direction: column;
    align-items: flex-start;
    gap: 50px;
    align-self: stretch;
`;