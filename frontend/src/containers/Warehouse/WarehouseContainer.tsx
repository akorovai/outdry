import React, { useEffect, useState } from 'react'
import { FilterWithProductsContainer } from '../../pages/ProductsPage/ProductsPage.styled.ts'
import { FunctionButton, ProductFilter, SVG } from '../../components'
import { AddProductOverlay } from '../../components/Overlay'
import {
  ButtonsContainer,
  ButtonsSection,
  ButtonsTitle,
  CheckboxContainer,
  DiscountedPrice,
  EditableInput,
  OriginalPrice,
  ParameterText,
  ProductImage,
  ProductNameSection,
  ProductsWithButtons,
  ProductTableContainer,
  RightButtonsContainer,
  SectionContainer,
  SelectedParameter,
  SelectedParameterArrows,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  TableWrapper,
} from './WarehouseContainer.styled'
import { colors } from '../../consts'

interface Product {
  id: number
  name: string
  inventory: number
  size: string
  type: string
  color: string
  price: number
  discount: number | null
  gender: string
  image: string
}

interface EditedValues {
  [key: number]: Partial<Product>
}

const WarehouseContainer: React.FC = (): React.ReactElement => {
  const [selectedParameter, setSelectedParameter] = useState<string>('Products')
  const [selectedProducts, setSelectedProducts] = useState<{ [key: number]: boolean }>({})
  const [selectAll, setSelectAll] = useState<boolean>(false)
  const [editing, setEditing] = useState<boolean>(false)
  const [editedValues, setEditedValues] = useState<EditedValues>({})
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: 'Product 1',
      inventory: 10,
      size: 'M',
      type: 'T-Shirt',
      color: 'Red',
      price: 20,
      discount: 10,
      gender: 'Unisex',
      image: 'https://www.mountaingoatsoftware.com/uploads/blog/2016-09-06-what-is-a-product.png',
    },
    {
      id: 2,
      name: 'Product 2',
      inventory: 5,
      size: 'L',
      type: 'Jeans',
      color: 'Blue',
      price: 40,
      discount: null,
      gender: 'Male',
      image: 'https://www.mountaingoatsoftware.com/uploads/blog/2016-09-06-what-is-a-product.png',
    },
    {
      id: 3,
      name: 'Product 3',
      inventory: 8,
      size: 'S',
      type: 'Dress',
      color: 'Green',
      price: 30,
      discount: 20,
      gender: 'Female',
      image: 'https://www.mountaingoatsoftware.com/uploads/blog/2016-09-06-what-is-a-product.png',
    },
  ])

  const [isOverlayVisible, setIsOverlayVisible] = useState<boolean>(false)

  const handleParameterClick = (parameter: string) => {
    setSelectedParameter(parameter)
  }

  const handleProductSelect = (id: number) => {
    setSelectedProducts(prev => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const handleSelectAll = () => {
    const newSelectAll = !selectAll
    setSelectAll(newSelectAll)

    const updatedSelectedProducts: { [key: number]: boolean } = {}
    products.forEach(product => {
      updatedSelectedProducts[product.id] = newSelectAll
    })

    setSelectedProducts(updatedSelectedProducts)
  }

  const handleDelete = () => {
    const updatedProducts = products.filter(product => !selectedProducts[product.id])
    setProducts(updatedProducts)
    setSelectedProducts({})
    setSelectAll(false)
  }

  const handleChange = () => {
    setEditing(!editing)
    if (editing) {
      const updatedProducts = products.map(product => ({
        ...product,
        ...editedValues[product.id],
      }))
      setProducts(updatedProducts)
      setEditedValues({})
    }
  }

  const handleInputChange = (id: number, field: string, value: string) => {
    setEditedValues(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value,
      },
    }))
  }

  const handleKeyDown = (e: React.KeyboardEvent, id: number) => {
    if (e.key === 'Enter') {
      const updatedProducts = products.map(product =>
        product.id === id ? { ...product, ...editedValues[id] } : product,
      )
      setProducts(updatedProducts)
      setEditedValues(prev => {
        const newValues = { ...prev }
        delete newValues[id]
        return newValues
      })
    }
  }

  const handleDiscountChange = (discount?: number) => {
    if (discount === undefined) return

    const updatedProducts = products.map(product => {
      if (selectedProducts[product.id]) {
        return {
          ...product,
          discount: discount,
        }
      }
      return product
    })
    setProducts(updatedProducts)
  }

  const renderPrice = (price: number, discount: number | null) => {
    if (discount) {
      const discountedPrice = price * (1 - discount / 100)
      return (
        <>
          <DiscountedPrice>${discountedPrice.toFixed(2)}</DiscountedPrice>
          <OriginalPrice>${price.toFixed(2)}</OriginalPrice>
        </>
      )
    }
    return `$${price.toFixed(2)}`
  }

  useEffect(() => {
    if (isOverlayVisible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOverlayVisible])

  const openOverlay = () => {
    setIsOverlayVisible(true)
  }

  const closeOverlay = () => {
    setIsOverlayVisible(false)
  }

  return (
    <SectionContainer>
      <FilterWithProductsContainer
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <ProductFilter number_of_products={28} title={'Warehouse'} />
        <ProductsWithButtons>
          <ButtonsContainer>
            <ButtonsTitle>Products</ButtonsTitle>
            <ButtonsSection>
              <FunctionButton
                text='Discount'
                icon={<SVG.Percent color={colors.WHITE} />}
                backgroundColor={colors.LIGHT_GREY_700}
                textColor={colors.WHITE}
                onClick={handleDiscountChange}
                expandable
              />
              <RightButtonsContainer>
                <FunctionButton
                  text={editing ? 'Save' : 'Change'}
                  icon={<SVG.Recycle color={colors.WHITE} />}
                  backgroundColor={colors.LIGHT_GREY_700}
                  textColor={colors.WHITE}
                  onClick={handleChange}
                />
                <FunctionButton
                  text='Add'
                  icon={<SVG.Plus color={colors.WHITE} />}
                  backgroundColor={colors.DARK_GREEN_2}
                  textColor={colors.WHITE}
                  onClick={openOverlay}
                />
                <FunctionButton
                  text='Delete'
                  icon={<SVG.Trash color={colors.WHITE} />}
                  backgroundColor={colors.ERROR}
                  textColor={colors.WHITE}
                  onClick={handleDelete}
                />
              </RightButtonsContainer>
            </ButtonsSection>
          </ButtonsContainer>
          <TableWrapper>
            <ProductTableContainer>
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>
                    <CheckboxContainer onClick={handleSelectAll}>
                      {selectAll ? (
                        <SVG.SelectedCheckbox color={colors.DARK_GREEN_2} />
                      ) : (
                        <SVG.UnSelectedCheckbox color={colors.LIGHT_GREY_300} />
                      )}
                    </CheckboxContainer>
                  </TableHeaderCell>
                  {['Products', 'Inventory', 'Size', 'Product Type', 'Colour', 'Price', 'Gender', 'Discount'].map(
                    parameter => (
                      <TableHeaderCell key={parameter}>
                        {selectedParameter === parameter ? (
                          <SelectedParameter
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ParameterText isActive>{parameter}</ParameterText>
                            <SelectedParameterArrows
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.2, duration: 0.3 }}
                            >
                              <SVG.Arrow color={colors.LIGHT_GREY_700} />
                              <SVG.Arrow color={colors.LIGHT_GREY_700} />
                            </SelectedParameterArrows>
                          </SelectedParameter>
                        ) : (
                          <ParameterText
                            isActive={selectedParameter === parameter}
                            onClick={() => handleParameterClick(parameter)}
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            {parameter}
                          </ParameterText>
                        )}
                      </TableHeaderCell>
                    ),
                  )}
                </TableRow>
              </TableHeader>
              <tbody>
                {products.map((product, index) => (
                  <TableRow
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <TableCell>
                      <CheckboxContainer onClick={() => handleProductSelect(product.id)}>
                        {selectedProducts[product.id] ? (
                          <SVG.SelectedCheckbox color={colors.DARK_GREEN_2} />
                        ) : (
                          <SVG.UnSelectedCheckbox color={colors.LIGHT_GREY_300} />
                        )}
                      </CheckboxContainer>
                    </TableCell>
                    <TableCell>
                      <ProductNameSection>
                        <ProductImage src={product.image} alt={product.name} />
                        {editing && selectedProducts[product.id] ? (
                          <EditableInput
                            type='text'
                            defaultValue={product.name}
                            onChange={e => handleInputChange(product.id, 'name', e.target.value)}
                            onKeyDown={e => handleKeyDown(e, product.id)}
                          />
                        ) : (
                          product.name
                        )}
                      </ProductNameSection>
                    </TableCell>
                    <TableCell>
                      {editing && selectedProducts[product.id] ? (
                        <EditableInput
                          type='text'
                          defaultValue={product.inventory}
                          onChange={e => handleInputChange(product.id, 'inventory', e.target.value)}
                          onKeyDown={e => handleKeyDown(e, product.id)}
                        />
                      ) : (
                        `${product.inventory} in stock`
                      )}
                    </TableCell>
                    <TableCell>
                      {editing && selectedProducts[product.id] ? (
                        <EditableInput
                          type='text'
                          defaultValue={product.size}
                          onChange={e => handleInputChange(product.id, 'size', e.target.value)}
                          onKeyDown={e => handleKeyDown(e, product.id)}
                        />
                      ) : (
                        product.size
                      )}
                    </TableCell>
                    <TableCell>
                      {editing && selectedProducts[product.id] ? (
                        <EditableInput
                          type='text'
                          defaultValue={product.type}
                          onChange={e => handleInputChange(product.id, 'type', e.target.value)}
                          onKeyDown={e => handleKeyDown(e, product.id)}
                        />
                      ) : (
                        product.type
                      )}
                    </TableCell>
                    <TableCell>
                      {editing && selectedProducts[product.id] ? (
                        <EditableInput
                          type='text'
                          defaultValue={product.color}
                          onChange={e => handleInputChange(product.id, 'color', e.target.value)}
                          onKeyDown={e => handleKeyDown(e, product.id)}
                        />
                      ) : (
                        product.color
                      )}
                    </TableCell>
                    <TableCell>
                      {editing && selectedProducts[product.id] ? (
                        <EditableInput
                          type='text'
                          defaultValue={product.price}
                          onChange={e => handleInputChange(product.id, 'price', e.target.value)}
                          onKeyDown={e => handleKeyDown(e, product.id)}
                        />
                      ) : (
                        renderPrice(product.price, product.discount)
                      )}
                    </TableCell>
                    <TableCell>
                      {editing && selectedProducts[product.id] ? (
                        <EditableInput
                          type='text'
                          defaultValue={product.gender}
                          onChange={e => handleInputChange(product.id, 'gender', e.target.value)}
                          onKeyDown={e => handleKeyDown(e, product.id)}
                        />
                      ) : (
                        product.gender
                      )}
                    </TableCell>
                    <TableCell>{product.discount ? `${product.discount}%` : 'No discount'}</TableCell>
                  </TableRow>
                ))}
              </tbody>
            </ProductTableContainer>
          </TableWrapper>
        </ProductsWithButtons>
      </FilterWithProductsContainer>

      {isOverlayVisible && <AddProductOverlay onClose={closeOverlay} />}
    </SectionContainer>
  )
}

export default WarehouseContainer
