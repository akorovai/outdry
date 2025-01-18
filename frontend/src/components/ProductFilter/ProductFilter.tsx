import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Breadcrumb, DropdownMenu, SVG } from '../index.ts'
import {
  ProductFilterContainer,
  FilterHeader,
  FilterTitle,
  DropDownContainers,
  FiltersContainer,
  FeaturedContainer,
  ProductsText,
} from './ProductFilter.styled.ts'
import { colors } from '@/consts'

interface IProductFilterProps {
  number_of_products: number
  title: string
}

const ProductFilter: React.FC<IProductFilterProps> = ({ number_of_products, title }): React.ReactElement => {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedGenders, setSelectedGenders] = useState<string[]>([])
  const [selectedPrices, setSelectedPrices] = useState<string[]>([])
  const [selectedSort, setSelectedSort] = useState<string>('Featured')

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  const productTypes = [
    'Blouses',
    'T-shirts',
    'Robes',
    'Coots',
    'Jackets',
    'Dungarees',
    'Shirts',
    'Sweatshirts',
    'Swimwear',
  ]
  const colorsList = ['Black', 'Blue', 'Brown', 'Grey', 'Orange', 'Pink', 'Purple', 'Red', 'White', 'Yellow']
  const genders = ['Boys', 'Girls', 'Mens', 'Womens', 'Unisex']
  const prices = ['$0-50', '$50-100', '$100-150', '$150-200', '$200-250', '$250-300']
  const sortOptions = [
    'Featured',
    'Best selling',
    'Alphabetically A-Z',
    'Alphabetically Z-A',
    'Price, low to high',
    'Price, high to low',
  ]

  const handleFilterChange = (
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>,
    value: string,
  ) => {
    if (selected.includes(value)) {
      setSelected(selected.filter(item => item !== value))
    } else {
      setSelected([...selected, value])
    }
  }

  const handleSortChange = (option: string) => {
    setSelectedSort(option)
  }

  return (
    <ProductFilterContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FilterHeader>
        <Breadcrumb items={['Home', title]} activeIndex={0} />
        <FilterTitle>{title}</FilterTitle>
      </FilterHeader>
      <FiltersContainer>
        <DropDownContainers>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SVG.Settings color={colors.BLACK} />
          </motion.div>
          <DropdownMenu
            options={sizes}
            selectedOptions={selectedSizes}
            onOptionChange={size => handleFilterChange(selectedSizes, setSelectedSizes, size)}
            placeholder='Size'
          />
          <DropdownMenu
            options={productTypes}
            selectedOptions={selectedProductTypes}
            onOptionChange={type => handleFilterChange(selectedProductTypes, setSelectedProductTypes, type)}
            placeholder='Product Type'
          />
          <DropdownMenu
            options={colorsList}
            selectedOptions={selectedColors}
            onOptionChange={color => handleFilterChange(selectedColors, setSelectedColors, color)}
            placeholder='Color'
          />
          <DropdownMenu
            options={genders}
            selectedOptions={selectedGenders}
            onOptionChange={gender => handleFilterChange(selectedGenders, setSelectedGenders, gender)}
            placeholder='Gender'
          />
          <DropdownMenu
            options={prices}
            selectedOptions={selectedPrices}
            onOptionChange={price => handleFilterChange(selectedPrices, setSelectedPrices, price)}
            placeholder='Price'
          />
        </DropDownContainers>
        <FeaturedContainer>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SVG.Arrows color={colors.BLACK} />
          </motion.div>
          <DropdownMenu
            options={sortOptions}
            selectedOptions={[selectedSort]}
            onOptionChange={handleSortChange}
            placeholder='Featured'
          />
          <ProductsText>{number_of_products} products</ProductsText>
        </FeaturedContainer>
      </FiltersContainer>
    </ProductFilterContainer>
  )
}

export default ProductFilter
