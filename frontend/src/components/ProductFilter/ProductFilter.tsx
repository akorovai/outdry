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
import { colors as colorConsts } from '@/consts'

interface IProductFilterProps {
  number_of_products: number
  title: string
  onFilterChange: (filters: {
    sizes: string[]
    productTypes: string[]
    colors: string[]
    genders: string[]
    prices: string[]
  }) => void
  onSortChange: (sortOption: string) => void
  sizes: string[]
  productTypes: string[]
  availableColors: string[]
  genders: string[]
  prices: string[]
  category: string
}

const ProductFilter: React.FC<IProductFilterProps> = ({
  number_of_products,
  title,
  onFilterChange,
  onSortChange,
  sizes,
  productTypes,
  availableColors,
  genders,
  prices,
  category,
}): React.ReactElement => {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedGenders, setSelectedGenders] = useState<string[]>([])
  const [selectedPrices, setSelectedPrices] = useState<string[]>([])
  const [selectedSort, setSelectedSort] = useState<string>('')

  const sortOptions = [
    'Best selling',
    'Alphabetically A-Z',
    'Alphabetically Z-A',
    'Price, low to high',
    'Price, high to low',
  ]

  const shouldShowGenderFilter = !['men', 'women', 'girls', 'boys', 'unisex'].includes(category)

  const handleFilterChange = (
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>,
    value: string,
  ) => {
    let newSelected
    if (selected.includes(value)) {
      newSelected = selected.filter(item => item !== value)
    } else {
      newSelected = [...selected, value]
    }
    setSelected(newSelected)

    onFilterChange({
      sizes: selectedSizes,
      productTypes: selectedProductTypes,
      colors: selectedColors,
      genders: selectedGenders,
      prices: selectedPrices,
    })
  }

  const handleSortChange = (option: string) => {
    if (selectedSort === option) {
      setSelectedSort('')
      onSortChange('')
    } else {
      setSelectedSort(option)
      onSortChange(option)
    }
  }

  const resetFilters = () => {
    setSelectedSizes([])
    setSelectedProductTypes([])
    setSelectedColors([])
    setSelectedGenders([])
    setSelectedPrices([])
    onFilterChange({
      sizes: [],
      productTypes: [],
      colors: [],
      genders: [],
      prices: [],
    })
  }

  const resetSort = () => {
    setSelectedSort('')
    onSortChange('')
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
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={resetFilters}>
            <SVG.Settings color={colorConsts.BLACK} />
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
            options={availableColors}
            selectedOptions={selectedColors}
            onOptionChange={color => handleFilterChange(selectedColors, setSelectedColors, color)}
            placeholder='Color'
          />
          {shouldShowGenderFilter && (
            <DropdownMenu
              options={genders}
              selectedOptions={selectedGenders}
              onOptionChange={gender => handleFilterChange(selectedGenders, setSelectedGenders, gender)}
              placeholder='Gender'
            />
          )}
          <DropdownMenu
            options={prices}
            selectedOptions={selectedPrices}
            onOptionChange={price => handleFilterChange(selectedPrices, setSelectedPrices, price)}
            placeholder='Price'
          />
        </DropDownContainers>
        <FeaturedContainer>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={resetSort}>
            <SVG.Arrows color={colorConsts.BLACK} />
          </motion.div>
          <DropdownMenu
            options={sortOptions}
            selectedOptions={selectedSort ? [selectedSort] : []}
            onOptionChange={handleSortChange}
            placeholder={selectedSort || 'Featured'}
          />
          <ProductsText>{number_of_products} products</ProductsText>
        </FeaturedContainer>
      </FiltersContainer>
    </ProductFilterContainer>
  )
}

export default ProductFilter
