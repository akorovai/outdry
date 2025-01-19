import React, { FC, ReactElement, useState, useCallback, memo } from 'react'
import { motion } from 'framer-motion'
import { CloseButton, OverlayHeader } from '../OrderOverlay/OrderOverlay.styled.tsx'
import { colors } from '@/consts'
import { SVG } from '@/components'
import {
  AddOverlayContent,
  AOCHeader,
  AOCTitle,
  HeaderLine,
  AOCFormContainer,
  AOCFieldsContainer,
  AOCField,
  AOCFieldTitle,
  InputFieldContainer,
  InputField,
  OverlayBackdrop,
  OverlayContent,
  inputFieldAnimation,
  scaleInOut,
  fadeInOut,
  TextArea,
} from './AddProductOverlay.styled'
import { Dropdown } from './DropDownMenu.tsx'
import { ImageUploader } from './ImageUploader.tsx'
import { BottomPanel } from './BottomPanel.tsx'
import { IProduct } from '@/models'

interface IAddProductOverlayProps {
  onClose: () => void
  onAddProduct: (product: IProduct) => void
}

const MAX_IMAGES = 3

const AddProductOverlay: FC<IAddProductOverlayProps> = memo(({ onClose, onAddProduct }): ReactElement => {
  const [productName, setProductName] = useState<string>('')
  const [selectedSize, setSelectedSize] = useState<string>('')
  const [selectedType, setSelectedType] = useState<string>('')
  const [selectedGender, setSelectedGender] = useState<string>('')
  const [colorName, setColorName] = useState<string>('')
  const [colorHex, setColorHex] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const [discount, setDiscount] = useState<string>('')
  const [amount, setAmount] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [uploadedImages, setUploadedImages] = useState<File[]>([])
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XLL']
  const types = ['T-Shirt', 'Jeans', 'Dress', 'Jacket', 'Sweater']
  const genders = ['Men', 'Women', 'Unisex', 'Boys', 'Girls']

  const handleFileInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const files = Array.from(e.target.files)
        if (uploadedImages.length + files.length > MAX_IMAGES) {
          alert(`You can upload a maximum of ${MAX_IMAGES} images.`)
          return
        }
        setUploadedImages(prev => [...prev, ...files])
      }
    },
    [uploadedImages],
  )

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      setIsDragging(false)
      if (e.dataTransfer.files) {
        const files = Array.from(e.dataTransfer.files)
        if (uploadedImages.length + files.length > MAX_IMAGES) {
          alert(`You can upload a maximum of ${MAX_IMAGES} images.`)
          return
        }
        setUploadedImages(prev => [...prev, ...files])
      }
    },
    [uploadedImages],
  )

  const handleRemoveImage = useCallback((index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index))
  }, [])

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value)
  }, [])

  const handleColorNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setColorName(e.target.value)
  }, [])

  const handleColorHexChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setColorHex(e.target.value)
  }, [])

  const handleAmountChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value)
  }, [])

  const handleDescriptionChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value)
  }, [])

  const toggleDropdown = useCallback((dropdownName: string) => {
    setOpenDropdown(prev => (prev === dropdownName ? null : dropdownName))
  }, [])

  const handleAddProductClick = useCallback(() => {
    const productRequest: IProduct = {
      name: productName,
      description,
      links: uploadedImages,
      amount: parseInt(amount, 10),
      size: selectedSize,
      type: { id: 0, name: selectedType },
      color: { id: 0, name: colorName, code: colorHex },
      price: parseFloat(price),
      discount: discount ? parseFloat(discount) : undefined,
      gender: selectedGender,
    }

    onAddProduct(productRequest)
    onClose()
  }, [
    productName,
    description,
    uploadedImages,
    amount,
    selectedSize,
    selectedType,
    colorName,
    colorHex,
    price,
    discount,
    selectedGender,
    onAddProduct,
    onClose,
  ])

  return (
    <OverlayBackdrop {...fadeInOut}>
      <OverlayContent {...scaleInOut}>
        <OverlayHeader>
          <CloseButton onClick={onClose}>
            <SVG.Cross color={colors.WHITE} />
          </CloseButton>
        </OverlayHeader>
        <AddOverlayContent>
          <AOCHeader>
            <AOCTitle>Add Product</AOCTitle>
            <HeaderLine />
          </AOCHeader>
          <AOCFormContainer>
            <AOCFieldsContainer>
              <AOCField>
                <AOCFieldTitle>Product Name</AOCFieldTitle>
                <InputFieldContainer as={motion.div} {...inputFieldAnimation}>
                  <InputField
                    type='text'
                    placeholder='Enter product name'
                    value={productName}
                    onChange={handleInputChange}
                  />
                </InputFieldContainer>
              </AOCField>
              <AOCField>
                <AOCFieldTitle>Description</AOCFieldTitle>
                <InputFieldContainer as={motion.div} {...inputFieldAnimation}>
                  <TextArea
                    placeholder='Enter product description'
                    value={description}
                    onChange={handleDescriptionChange}
                  />
                </InputFieldContainer>
              </AOCField>
              <AOCField>
                <AOCFieldTitle>Size</AOCFieldTitle>
                <Dropdown
                  options={sizes}
                  selectedOption={selectedSize}
                  onSelect={setSelectedSize}
                  placeholder='Select size'
                  isOpen={openDropdown === 'size'}
                  toggleDropdown={() => toggleDropdown('size')}
                />
              </AOCField>
              <AOCField>
                <AOCFieldTitle>Type</AOCFieldTitle>
                <Dropdown
                  options={types}
                  selectedOption={selectedType}
                  onSelect={setSelectedType}
                  placeholder='Select type'
                  isOpen={openDropdown === 'type'}
                  toggleDropdown={() => toggleDropdown('type')}
                />
              </AOCField>
              <AOCField>
                <AOCFieldTitle>Gender</AOCFieldTitle>
                <Dropdown
                  options={genders}
                  selectedOption={selectedGender}
                  onSelect={setSelectedGender}
                  placeholder='Select gender'
                  isOpen={openDropdown === 'gender'}
                  toggleDropdown={() => toggleDropdown('gender')}
                />
              </AOCField>
              <AOCField>
                <AOCFieldTitle>Color</AOCFieldTitle>
                <InputFieldContainer as={motion.div} {...inputFieldAnimation}>
                  <InputField
                    type='text'
                    placeholder='Enter color name'
                    value={colorName}
                    onChange={handleColorNameChange}
                  />
                </InputFieldContainer>
                <InputFieldContainer as={motion.div} {...inputFieldAnimation}>
                  <InputField
                    type='text'
                    placeholder='Enter HEX code (e.g., #FFFFFF)'
                    value={colorHex}
                    onChange={handleColorHexChange}
                  />
                </InputFieldContainer>
              </AOCField>
              <AOCField>
                <AOCFieldTitle>Amount</AOCFieldTitle>
                <InputFieldContainer as={motion.div} {...inputFieldAnimation}>
                  <InputField type='number' placeholder='Enter amount' value={amount} onChange={handleAmountChange} />
                </InputFieldContainer>
              </AOCField>
            </AOCFieldsContainer>

            <ImageUploader
              uploadedImages={uploadedImages}
              onFileInputChange={handleFileInputChange}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onRemoveImage={handleRemoveImage}
              isDragging={isDragging}
            />
          </AOCFormContainer>
        </AddOverlayContent>

        <BottomPanel
          price={price}
          onPriceChange={setPrice}
          onDiscountChange={setDiscount}
          onAddProduct={handleAddProductClick}
        />
      </OverlayContent>
    </OverlayBackdrop>
  )
})

export default AddProductOverlay
