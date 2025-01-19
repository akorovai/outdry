import React, { useEffect, useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { BrandLogo, SVG } from '../index.ts'
import {
  BrandLogoLink,
  CategoriesMenu,
  CategoryText,
  NavbarCategoriesContainer,
  NavbarContainer,
  SearchIconWrapper,
  SearchInput,
  SearchInputField,
  UserMenu,
  UserOptionLink,
  UsersOptions,
} from './Navbar.styled.ts'
import { colors, routePath } from '@/consts'
import { CartOverlay } from '../Overlay'
import { useAuth } from '../../context/AuthContext/AuthContext.tsx'

interface NavbarProps {
  isMinimal?: boolean
}

const Navbar: React.FC<NavbarProps> = ({ isMinimal = false }): React.ReactElement => {
  const [searchValue, setSearchValue] = useState('')
  const [isCartOverlayOpen, setIsCartOverlayOpen] = useState(false)
  const navigate = useNavigate()
  const { user } = useAuth()

  const isAdmin = useMemo(() => user?.authorities?.includes('ROLE_ADMIN'), [user])

  useEffect(() => {
    if (isCartOverlayOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isCartOverlayOpen])

  const handleClearSearch = () => {
    setSearchValue('')
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      console.log('Search for:', searchValue)
    }
  }

  const handleLogoClick = () => {
    navigate('/')
  }

  const toggleCartOverlay = () => {
    setIsCartOverlayOpen(prev => !prev)
  }

  const createPath = (value: string) => {
    return routePath.PRODUCTS.replace(':category', value)
  }

  return (
    <>
      <NavbarContainer>
        <NavbarCategoriesContainer>
          <BrandLogoLink to='/' onClick={handleLogoClick}>
            <BrandLogo />
          </BrandLogoLink>
          {!isMinimal && (
            <CategoriesMenu>
              <CategoryText to={createPath('new-in')}>New in</CategoryText>
              <CategoryText to={createPath('men')}>Men</CategoryText>
              <CategoryText to={createPath('women')}>Women</CategoryText>
              <CategoryText to={createPath('boys')}>Boys</CategoryText>
              <CategoryText to={createPath('girls')}>Girls</CategoryText>
              <CategoryText to={createPath('unisex')}>Unisex</CategoryText>
              <CategoryText to={createPath('sale')}>Sale</CategoryText>
            </CategoriesMenu>
          )}
        </NavbarCategoriesContainer>

        <UserMenu>
          {!isMinimal ? (
            <>
              <SearchInputField>
                <SearchInput
                  type='search'
                  placeholder='Search'
                  aria-label='Search'
                  value={searchValue}
                  onChange={e => setSearchValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <SearchIconWrapper onClick={handleClearSearch}>
                  {searchValue ? <SVG.Cross color={colors.BLACK} /> : <SVG.Search color={colors.BLACK} />}
                </SearchIconWrapper>
              </SearchInputField>
              <UsersOptions>
                <UserOptionLink to={routePath.WISHLIST}>
                  <SVG.Like color={colors.WHITE} />
                </UserOptionLink>
                <UserOptionLink to={routePath.PROFILE}>
                  <SVG.User color={colors.WHITE} />
                </UserOptionLink>
                <UserOptionLink to='#' onClick={toggleCartOverlay}>
                  <SVG.Bucket color={colors.WHITE} />
                </UserOptionLink>
                {isAdmin && (
                  <UserOptionLink to={routePath.WAREHOUSE}>
                    <SVG.Warehouse color={colors.WHITE} />
                  </UserOptionLink>
                )}
              </UsersOptions>
            </>
          ) : (
            <UserOptionLink to='#' onClick={toggleCartOverlay}>
              <SVG.Bucket color={colors.WHITE} />
            </UserOptionLink>
          )}
        </UserMenu>
      </NavbarContainer>

      {isCartOverlayOpen && <CartOverlay onClose={toggleCartOverlay} />}
    </>
  )
}

export default Navbar
