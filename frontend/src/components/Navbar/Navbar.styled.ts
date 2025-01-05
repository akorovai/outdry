import styled, { keyframes } from 'styled-components';
import { colors, fonts } from '../../consts';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
`;

const hoverScale = keyframes`
    0% { transform: scale(1); }
    100% { transform: scale(1.1); }
`;

export const NavbarContainer = styled.div`
    display: flex;
    padding: 24px 80px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    background: ${colors.LIGHT_GREEN_500};
    animation: ${fadeIn} 0.5s ease;
`;

export const NavbarCategoriesContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 28px;
`;

export const CategoriesMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const CategoryText = styled(Link)`
    display: block;
    color: ${colors.WHITE};
    font-family: ${fonts.POPPINS};
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
        color: ${colors.DARK_GREEN};
        animation: ${hoverScale} 0.3s ease forwards;
        text-decoration: none;
    }
`;

export const UserMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`;

export const UsersOptions = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const SearchInputField = styled.div`
    display: flex;
    width: 380px;
    padding: 4px 8px;
    align-items: center;
    background: ${colors.WHITE};
    border: 1px solid ${colors.WHITE};
    border-radius: 4px;
    position: relative;
`;

export const SearchInput = styled.input`
    border: none;
    background: transparent;
    outline: none;
    font-size: 16px;
    color: ${colors.BLACK};
    font-family: ${fonts.POPPINS};

    &::placeholder {
        color: ${colors.BLACK};
    }

    flex: 1;
    margin-left: 10px;
    box-sizing: border-box;

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
        display: none;
    }
`;

export const UserOptionLink = styled(Link)`
    display: flex;
    align-items: center;
    color: ${colors.WHITE};
    font-size: 24px;
    cursor: pointer;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
        color: ${colors.DARK_GREEN};
        animation: ${hoverScale} 0.3s ease forwards;
        text-decoration: none;
    }
`;

export const SearchIconWrapper = styled.div`
    position: absolute;
    right: 16px;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
`;

export const BrandLogoLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
`;