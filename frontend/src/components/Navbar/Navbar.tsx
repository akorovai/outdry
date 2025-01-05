import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrandLogo, SVG } from '../index.ts';
import {
    NavbarContainer,
    NavbarCategoriesContainer,
    CategoriesMenu,
    CategoryText,
    UserMenu,
    UsersOptions,
    SearchInputField,
    SearchInput,
    UserOptionLink,
    SearchIconWrapper,
    BrandLogoLink,
} from './Navbar.styled.ts';
import { colors } from '../../consts';
import { CartOverlay } from "../Overlay";

interface NavbarProps {
    isMinimal?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isMinimal = false }): React.ReactElement => {
    const [searchValue, setSearchValue] = useState('');
    const [isCartOverlayOpen, setIsCartOverlayOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (isCartOverlayOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isCartOverlayOpen]);

    const handleClearSearch = () => {
        setSearchValue('');
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            console.log('Search for:', searchValue);
        }
    };

    const handleLogoClick = () => {
        navigate('/');
    };

    const toggleCartOverlay = () => {
        setIsCartOverlayOpen((prev) => !prev);
    };

    return (
        <>
            <NavbarContainer>
                <NavbarCategoriesContainer>
                    <BrandLogoLink to="/" onClick={handleLogoClick}>
                        <BrandLogo />
                    </BrandLogoLink>
                    {!isMinimal && (
                        <CategoriesMenu>
                            <CategoryText to="/products/new-in">New in</CategoryText>
                            <CategoryText to="/products/men">Men</CategoryText>
                            <CategoryText to="/products/women">Women</CategoryText>
                            <CategoryText to="/products/kids">Kids</CategoryText>
                            <CategoryText to="/products/accessories">Accessories</CategoryText>
                            <CategoryText to="/products/sale">Sale</CategoryText>
                        </CategoriesMenu>
                    )}
                </NavbarCategoriesContainer>

                <UserMenu>
                    {!isMinimal ? (
                        <>
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
                                    {searchValue ? <SVG.Cross color={colors.BLACK} /> : <SVG.Search color={colors.BLACK} />}
                                </SearchIconWrapper>
                            </SearchInputField>
                            <UsersOptions>
                                <UserOptionLink to="/wishlist">
                                    <SVG.Like color={colors.WHITE} />
                                </UserOptionLink>
                                <UserOptionLink to="/profile">
                                    <SVG.User color={colors.WHITE} />
                                </UserOptionLink>
                                <UserOptionLink to="#" onClick={toggleCartOverlay}>
                                    <SVG.Bucket color={colors.WHITE} />
                                </UserOptionLink>
                            </UsersOptions>
                        </>
                    ) : (
                        <UserOptionLink to="#" onClick={toggleCartOverlay}>
                            <SVG.Bucket color={colors.WHITE} />
                        </UserOptionLink>
                    )}
                </UserMenu>
            </NavbarContainer>

            {isCartOverlayOpen && <CartOverlay onClose={toggleCartOverlay} />}
        </>
    );
};

export default Navbar;