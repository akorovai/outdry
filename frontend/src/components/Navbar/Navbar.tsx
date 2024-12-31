import React, {useState} from 'react';
import styled from 'styled-components';
import {BrandLogo, SVG} from '../index.ts';
import {colors, fonts} from '../../consts';
import {Link} from 'react-router-dom';

const NavbarContainer = styled.div`
    display: flex;
    padding: 24px 80px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    background: ${colors.LIGHT_GREEN_500};
`;

const NavbarCategoriesContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 28px;
`;

const CategoriesMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const CategoryText = styled(Link)`
    display: block;
    color: ${colors.WHITE};
    font-family: ${fonts.POPPINS};
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
        color: ${colors.DARK_GREEN};
    }
`;

const UserMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`;

const UsersOptions = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const SearchInputField = styled.div`
    display: flex;
    width: 380px;
    padding: 12px 16px;
    align-items: center;
    background: ${colors.WHITE};
    border: 1px solid ${colors.WHITE};
    border-radius: 4px;
    transition: border-color 0.2s ease;
    position: relative; /* Для позиционирования иконки */
`;

const SearchInput = styled.input`
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

    /* Убираем встроенный крестик в поле поиска */

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
        display: none;
    }
`;

const UserOptionLink = styled(Link)`
    display: flex;
    align-items: center;
    color: ${colors.WHITE};
    font-size: 24px;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
        color: ${colors.DARK_GREEN};
    }
`;

const SearchIconWrapper = styled.div`
    position: absolute;
    right: 16px;
    cursor: pointer;
`;

interface NavbarProps {
    isMinimal?: boolean; // Проп для управления состоянием Navbar
}

const Navbar: React.FC<NavbarProps> = ({isMinimal = false}): React.ReactElement => {
    const [searchValue, setSearchValue] = useState('');

    const handleClearSearch = () => {
        setSearchValue('');
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            console.log('Search for:', searchValue);
        }
    };

    return (<NavbarContainer>
            <NavbarCategoriesContainer>
                <BrandLogo/>
                {!isMinimal && ( // Показываем категории только если isMinimal = false
                    <CategoriesMenu>
                        <CategoryText to="/new-in">New in</CategoryText>
                        <CategoryText to="/new-in">Men</CategoryText>
                        <CategoryText to="/new-in">Women</CategoryText>
                        <CategoryText to="/new-in">Kids</CategoryText>
                        <CategoryText to="/new-in">Accessories</CategoryText>
                        <CategoryText to="/new-in">Sale</CategoryText>
                    </CategoriesMenu>)}
            </NavbarCategoriesContainer>

            <UserMenu>
                {!isMinimal ? (<>
                        <SearchInputField>
                            <SearchInput
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                            <SearchIconWrapper onClick={handleClearSearch}>
                                {searchValue ? (<SVG.Cross color={colors.BLACK}/>) : (
                                    <SVG.Search color={colors.BLACK}/>)}
                            </SearchIconWrapper>
                        </SearchInputField>
                        <UsersOptions>
                            <UserOptionLink to="/wishlist">
                                <SVG.Like color={colors.WHITE}/>
                            </UserOptionLink>
                            <UserOptionLink to="/profile">
                                <SVG.User color={colors.WHITE}/>
                            </UserOptionLink>
                            <UserOptionLink to="/cart">
                                <SVG.Bucket color={colors.WHITE}/>
                            </UserOptionLink>
                        </UsersOptions>
                    </>) : <UserOptionLink to="/cart">
                    <SVG.Bucket color={colors.WHITE}/>
                </UserOptionLink>}

            </UserMenu>
        </NavbarContainer>);
};

export default Navbar;