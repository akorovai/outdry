import React, { FC, ReactElement, useState } from 'react'
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
} from './AddProductOverlay.styled'
import { Dropdown } from './DropDownMenu.tsx'
import { ImageUploader } from './ImageUploader.tsx'
import { BottomPanel } from './BottomPanel.tsx'

interface IAddProductOverlayProps {
  onClose: () => void
}

const MAX_IMAGES = 3

const AddProductOverlay: FC<IAddProductOverlayProps> = ({ onClose }): ReactElement => {
  const [productName, setProductName] = useState<string>('')
  const [selectedSize, setSelectedSize] = useState<string>('')
  const [selectedType, setSelectedType] = useState<string>('')
  const [selectedGender, setSelectedGender] = useState<string>('')
  const [colorName, setColorName] = useState<string>('')
  const [colorHex, setColorHex] = useState<string>('')
  const [uploadedImages, setUploadedImages] = useState<File[]>([])
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const sizes = ['XS', 'S', 'M', 'L', 'XL']
  const types = ['T-Shirt', 'Jeans', 'Dress', 'Jacket', 'Sweater']
  const genders = ['Male', 'Female', 'Unisex']

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      if (uploadedImages.length + files.length > MAX_IMAGES) {
        alert(`You can upload a maximum of ${MAX_IMAGES} images.`)
        return
      }
      setUploadedImages(prev => [...prev, ...files])
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
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
  }

  const handleRemoveImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value)
  }

  const handleColorNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorName(e.target.value)
  }

  const handleColorHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorHex(e.target.value)
  }

  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdown(prev => (prev === dropdownName ? null : dropdownName))
  }

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
          price='$45.00'
          onPriceChange={value => setProductName(value)}
          onDiscountChange={value => setProductName(value)}
          onAddProduct={() => document.getElementById('file-upload')?.click()}
        />
      </OverlayContent>
    </OverlayBackdrop>
  )
}

export default AddProductOverlay
