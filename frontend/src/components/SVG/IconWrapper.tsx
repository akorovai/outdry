import styled, { RuleSet } from 'styled-components';


export const IconWrapper = styled.div<{
    onClick?: () => void;
    clickable?: boolean;
    color?: string | RuleSet<object>;
}>`
    svg {
        width: 100%;
        height: 100%;
        path {
            stroke: ${({ color }) => color};
        }
    }

    cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};
`;
