import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors, fonts } from '../../consts';

// Определяем интерфейс для пропсов
interface TextProps {
    size?: number;
    weight?: number;
    lineHeight?: number;
}

// Используем интерфейс для типизации пропсов
export const Text = styled(motion.p).attrs<TextProps>(({ size, weight, lineHeight }) => ({
    style: {
        fontSize: `${size || 16}px`,
        fontWeight: weight || 400,
        lineHeight: `${lineHeight || 24}px`,
    },
}))<TextProps>`
    color: ${colors.WHITE};
    font-family: ${fonts.POPPINS};
    font-style: normal;
`;

// Применяем атрибуты по умолчанию
export const SectionTitle = styled(Text).attrs({
    size: 20,
    weight: 700,
    lineHeight: 30,
})``;

// Используем motion.p и передаем пропсы через attrs
export const SectionLink = styled(motion.p).attrs<TextProps>(({ size, weight, lineHeight }) => ({
    style: {
        fontSize: `${size || 18}px`,
        fontWeight: weight || 400,
        lineHeight: `${lineHeight || 28}px`,
    },
}))<TextProps>`
    cursor: pointer;
    color: ${colors.WHITE};
    font-family: ${fonts.POPPINS};
    font-style: normal;
`;

export const FooterWrapper = styled(motion.div)`
    display: flex;
    height: 438px;
    padding: 100px 100px;
    align-items: center;
    gap: 28px;
    width: 100%;
    max-width: 100vw;
    background: ${colors.DARK_GREEN};
    box-sizing: border-box;
`;

export const BrandSection = styled(motion.div)`
    display: flex;
    width: 338px;
    flex-direction: column;
    align-items: flex-start;
    gap: 160px;
`;

export const LinksSection = styled(motion.div)`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex: 1;
    gap: 146px;
`;

export const LinksContainer = styled(motion.div)`
    display: flex;
    align-items: flex-start;
    gap: 80px;
`;

export const LinkGroup = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
`;

export const LinkList = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
`;