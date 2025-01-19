import React, { useEffect, useState } from 'react'
import { FilterWithProductsContainer } from '../../pages/ProductsPage/ProductsPage.styled.ts'
import { Breadcrumb, FunctionButton, SVG } from '../../components'
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
import { colors } from '@/consts'
import { useProductApi } from './useWarehouse'
import { IProduct } from '@/models'
import { FilterHeader, FilterTitle } from '@/components/ProductFilter/ProductFilter.styled.ts'

interface EditedValues {
  [key: number]: Partial<IProduct>
}

const WarehouseContainer: React.FC = (): React.ReactElement => {
  const [selectedParameter, setSelectedParameter] = useState<string>('Products')
  const [selectedProducts, setSelectedProducts] = useState<{ [key: number]: boolean }>({})
  const [selectAll, setSelectAll] = useState<boolean>(false)
  const [editing, setEditing] = useState<boolean>(false)
  const [editedValues, setEditedValues] = useState<EditedValues>({})
  const [products, setProducts] = useState<IProduct[]>([])
  const [isOverlayVisible, setIsOverlayVisible] = useState<boolean>(false)

  const { addProduct, modifyProduct, deleteProduct, addDiscount, getAllProducts } = useProductApi()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getAllProducts()
        console.log('Fetched products:', products)
        if (Array.isArray(products)) {
          setProducts(products)
        } else {
          console.error('Expected an array of products but received:', products)
          setProducts([])
        }
      } catch (err) {
        console.error('Failed to fetch products:', err)
        setProducts([])
      }
    }

    fetchProducts()
  }, [])

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
      updatedSelectedProducts[product.id || 0] = newSelectAll
    })

    setSelectedProducts(updatedSelectedProducts)
  }

  const handleDelete = async () => {
    try {
      await Promise.all(
        Object.keys(selectedProducts).map(async id => {
          if (selectedProducts[Number(id)]) {
            await deleteProduct(Number(id))
          }
        }),
      )

      const updatedProducts = products.filter(product => !selectedProducts[product.id || 0])
      setProducts(updatedProducts)
      setSelectedProducts({})
      setSelectAll(false)
    } catch (err) {
      console.error('Failed to delete products:', err)
    }
  }

  const handleChange = async () => {
    if (editing) {
      try {
        await Promise.all(
          Object.keys(editedValues).map(async id => {
            const productId = Number(id)
            const product = products.find(p => p.id === productId)
            if (product) {
              const productRequest: IProduct = {
                ...product,
                ...editedValues[productId],
                discount: product.discount !== null ? product.discount : undefined,
              }

              const updatedProduct = await modifyProduct(productId, productRequest)
              setProducts(prevProducts => prevProducts.map(p => (p.id === productId ? updatedProduct : p)))
            }
          }),
        )

        setEditedValues({})
      } catch (err) {
        console.error('Failed to update products:', err)
      }
    }
    setEditing(!editing)
  }

  const handleInputChange = (id: number, field: string, value: string) => {
    setEditedValues(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: field === 'amount' || field === 'price' ? Number(value) : value,
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

  const handleDiscountChange = async (discount?: number) => {
    if (discount === undefined || discount < 0 || discount > 100) {
      console.error('Invalid discount value')
      return
    }

    try {
      await Promise.all(
        Object.keys(selectedProducts).map(async id => {
          if (selectedProducts[Number(id)]) {
            await addDiscount(Number(id), discount)
          }
        }),
      )

      const updatedProducts = products.map(product => {
        if (selectedProducts[product.id || 0]) {
          return {
            ...product,
            discount: discount,
          }
        }
        return product
      })
      setProducts(updatedProducts)
    } catch (err) {
      console.error('Failed to apply discount:', err)
    }
  }

  const renderPrice = (price: number, discount: number | null | undefined) => {
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
  const getSrc = (link: string | File): string => {
    if (typeof link === 'string') {
      return link
    }
    return URL.createObjectURL(link)
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
  const sizeMapping: { [key: string]: string } = {
    XS: 'XS',
    S: 'S',
    M: 'M',
    L: 'L',
    XL: 'XL',
    XXL: 'XXL',
  }

  const handleAddProduct = async (product: IProduct) => {
    try {
      const mappedProduct = {
        ...product,
        size: sizeMapping[product.size] || product.size,
      }
      console.log('Product being sent to backend:', mappedProduct)
      const newProduct = await addProduct(mappedProduct)
      setProducts(prevProducts => [...prevProducts, newProduct])
      setIsOverlayVisible(false)
    } catch (err) {
      console.error('Failed to add product:', err)
    }
  }

  return (
    <SectionContainer>
      <FilterWithProductsContainer
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <FilterHeader>
          <Breadcrumb items={['Home', 'Warehouse']} activeIndex={0} />
          <FilterTitle>{'Warehouse'}</FilterTitle>
        </FilterHeader>
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
                {Array.isArray(products) &&
                  products.map((product, index) => (
                    <TableRow
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <TableCell>
                        <CheckboxContainer onClick={() => handleProductSelect(product.id || 0)}>
                          {selectedProducts[product.id || 0] ? (
                            <SVG.SelectedCheckbox color={colors.DARK_GREEN_2} />
                          ) : (
                            <SVG.UnSelectedCheckbox color={colors.LIGHT_GREY_300} />
                          )}
                        </CheckboxContainer>
                      </TableCell>
                      <TableCell>
                        <ProductNameSection>
                          <ProductImage src={getSrc(product.links[0])} alt={product.name} />;
                          {editing && selectedProducts[product.id || 0] ? (
                            <EditableInput
                              type='text'
                              defaultValue={product.name}
                              onChange={e => handleInputChange(product.id || 0, 'name', e.target.value)}
                              onKeyDown={e => handleKeyDown(e, product.id || 0)}
                            />
                          ) : (
                            product.name
                          )}
                        </ProductNameSection>
                      </TableCell>
                      <TableCell>
                        {editing && selectedProducts[product.id || 0] ? (
                          <EditableInput
                            type='number'
                            defaultValue={product.amount}
                            onChange={e => handleInputChange(product.id || 0, 'amount', e.target.value)}
                            onKeyDown={e => handleKeyDown(e, product.id || 0)}
                          />
                        ) : (
                          `${product.amount} in stock`
                        )}
                      </TableCell>
                      <TableCell>
                        {editing && selectedProducts[product.id || 0] ? (
                          <EditableInput
                            type='text'
                            defaultValue={product.size}
                            onChange={e => handleInputChange(product.id || 0, 'size', e.target.value)}
                            onKeyDown={e => handleKeyDown(e, product.id || 0)}
                          />
                        ) : (
                          product.size
                        )}
                      </TableCell>
                      <TableCell>
                        {editing && selectedProducts[product.id || 0] ? (
                          <EditableInput
                            type='text'
                            defaultValue={product.type.name}
                            onChange={e => handleInputChange(product.id || 0, 'type', e.target.value)}
                            onKeyDown={e => handleKeyDown(e, product.id || 0)}
                          />
                        ) : (
                          product.type.name
                        )}
                      </TableCell>
                      <TableCell>
                        {editing && selectedProducts[product.id || 0] ? (
                          <EditableInput
                            type='text'
                            defaultValue={product.color.name}
                            onChange={e => handleInputChange(product.id || 0, 'color', e.target.value)}
                            onKeyDown={e => handleKeyDown(e, product.id || 0)}
                          />
                        ) : (
                          product.color.name
                        )}
                      </TableCell>
                      <TableCell>
                        {editing && selectedProducts[product.id || 0] ? (
                          <EditableInput
                            type='number'
                            defaultValue={product.price}
                            onChange={e => handleInputChange(product.id || 0, 'price', e.target.value)}
                            onKeyDown={e => handleKeyDown(e, product.id || 0)}
                          />
                        ) : (
                          renderPrice(product.price, product.discount)
                        )}
                      </TableCell>
                      <TableCell>
                        {editing && selectedProducts[product.id || 0] ? (
                          <EditableInput
                            type='text'
                            defaultValue={product.gender}
                            onChange={e => handleInputChange(product.id || 0, 'gender', e.target.value)}
                            onKeyDown={e => handleKeyDown(e, product.id || 0)}
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

      {isOverlayVisible && <AddProductOverlay onClose={closeOverlay} onAddProduct={handleAddProduct} />}
    </SectionContainer>
  )
}

export default WarehouseContainer
