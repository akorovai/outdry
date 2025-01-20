import styled, { keyframes } from 'styled-components'
import { colors, fonts } from '../../consts'
import { Link } from 'react-router-dom'

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
`

const hoverScale = keyframes`
    0% { transform: scale(1); }
    100% { transform: scale(1.1); }
`

export const NavbarContainer = styled.div`
  display: flex;
  padding: 24px 5%; // Use percentage for padding to make it responsive
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  background: ${colors.LIGHT_GREEN_500};
  animation: ${fadeIn} 0.5s ease;

  @media (max-width: 768px) {
    padding: 16px 5%; // Adjust padding for smaller screens
    flex-direction: column; // Stack elements vertically on small screens
    gap: 16px; // Add gap between stacked elements
  }
`

export const NavbarCategoriesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;

  @media (max-width: 768px) {
    gap: 16px; // Reduce gap for smaller screens
    flex-direction: column; // Stack elements vertically on small screens
  }
`

export const CategoriesMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 10px; // Reduce gap for smaller screens
    flex-wrap: wrap; // Allow categories to wrap on smaller screens
    justify-content: center; // Center-align categories
  }
`

export const CategoryText = styled(Link)`
  display: block;
  color: ${colors.WHITE};
  font-family: ${fonts.POPPINS};
  font-size: 1rem; // Use rem for scalability
  font-weight: 400;
  line-height: 28px;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.DARK_GREEN};
    animation: ${hoverScale} 0.3s ease forwards;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    font-size: 0.875rem; // Reduce font size for smaller screens
  }
`

export const UserMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  @media (max-width: 768px) {
    gap: 20px; // Reduce gap for smaller screens
  }
`

export const UsersOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 8px; // Reduce gap for smaller screens
  }
`

export const SearchInputField = styled.div`
  display: flex;
  width: 100%; // Make the search input field responsive
  max-width: 380px; // Set a max-width for larger screens
  padding: 4px 8px;
  align-items: center;
  background: ${colors.WHITE};
  border: 1px solid ${colors.WHITE};
  border-radius: 4px;
  position: relative;

  @media (max-width: 768px) {
    max-width: 100%; // Allow the search input to take full width on smaller screens
  }
`

export const SearchInput = styled.input`
  border: none;
  background: transparent;
  outline: none;
  font-size: 1rem; // Use rem for scalability
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

  @media (max-width: 768px) {
    font-size: 0.875rem; // Reduce font size for smaller screens
  }
`

export const UserOptionLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${colors.WHITE};
  font-size: 1.5rem; // Размер текста (если есть)
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.DARK_GREEN};
    text-decoration: none;
  }

  svg {
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`

export const SearchIconWrapper = styled.div`
  position: absolute;
  right: 16px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`

export const BrandLogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`
