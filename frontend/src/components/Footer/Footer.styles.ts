import styled from 'styled-components';
import { colors, fonts } from '../../consts';

// Reusable Typography Components
export const Text = styled.p<{ size?: number; weight?: number; lineHeight?: number }>`
    color: ${colors.WHITE};
    font-family: ${fonts.POPPINS};
    font-size: ${({ size }) => size || 16}px;
    font-style: normal;
    font-weight: ${({ weight }) => weight || 400};
    line-height: ${({ lineHeight }) => lineHeight || 24}px;
`;


export const SectionTitle = styled(Text).attrs({
    size: 20,
    weight: 700,
    lineHeight: 30,
})``;

export const SectionLink = styled(Text).attrs({
    size: 18,
    weight: 400,
    lineHeight: 28,
})`
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

// Layout Components
export const FooterWrapper = styled.div`
    display: flex;
    height: 438px;
    padding: 100px 80px;
    align-items: center;
    gap: 28px;
    width: 100%;
    max-width: 100vw;
    background: ${colors.DARK_GREEN};
    box-sizing: border-box;
`;

export const BrandSection = styled.div`
    display: flex;
    width: 338px;
    flex-direction: column;
    align-items: flex-start;
    gap: 159px;
`;

export const BrandLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const LinksSection = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex: 1;
    gap: 146px;
`;

export const LinksContainer = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 80px;
`;

export const LinkGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
`;

export const LinkList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
`;