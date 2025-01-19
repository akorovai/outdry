import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  AddImageContainer,
  AICContent,
  DropImageHereContainer,
  DropImageHereText,
  fadeInOut,
  imageAnimation,
  ImagePreview,
  ImageUploaderContainer,
  ImageWrapper,
  OrLine,
  OrSection,
  OrTest,
  removeButtonAnimation,
  RemoveImageButton,
  RemoveImageIcon,
  ScrollableContainer,
  UploadedImagesContainer,
} from './AddProductOverlay.styled.ts'
import { MainButton } from '../../index.ts'
import { colors } from '@/consts'

interface ImageUploaderProps {
  uploadedImages: File[]
  onFileInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void
  onDragLeave: (e: React.DragEvent<HTMLDivElement>) => void
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void
  onRemoveImage: (index: number) => void
  isDragging: boolean
}

const MAX_IMAGES = 3

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  uploadedImages,
  onFileInputChange,
  onDragOver,
  onDragLeave,
  onDrop,
  onRemoveImage,
  isDragging,
}) => {
  return (
    <ImageUploaderContainer>
      <AddImageContainer
        {...fadeInOut}
        transition={{ delay: 0.3, duration: 0.3 }}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        style={{ border: isDragging ? `2px dashed ${colors.LIGHT_GREEN_500}` : 'none' }}
      >
        <AICContent>
          <DropImageHereContainer>
            <DropImageHereText>Drag image here</DropImageHereText>
            <OrSection>
              <OrLine />
              <OrTest>or</OrTest>
              <OrLine />
            </OrSection>
          </DropImageHereContainer>
          <input
            type='file'
            id='file-upload'
            style={{ display: 'none' }}
            multiple
            onChange={onFileInputChange}
            disabled={uploadedImages.length >= MAX_IMAGES}
          />
          <MainButton
            backgroundColor={colors.WHITE}
            textColor={colors.BLACK}
            hoverEffect={{ backgroundColor: colors.LIGHT_GREY_200, textColor: colors.BLACK }}
            onClick={() => document.getElementById('file-upload')?.click()}
            disabled={uploadedImages.length >= MAX_IMAGES}
          >
            Upload Image
          </MainButton>
        </AICContent>
      </AddImageContainer>

      {uploadedImages.length > 0 && (
        <ScrollableContainer>
          <UploadedImagesContainer>
            <AnimatePresence>
              {uploadedImages.map((file, index) => (
                <motion.div key={index} {...imageAnimation} layout>
                  <ImageWrapper>
                    <ImagePreview src={URL.createObjectURL(file)} alt={`uploaded-${index}`} />
                    <RemoveImageButton
                      as={motion.button}
                      {...removeButtonAnimation}
                      onClick={() => onRemoveImage(index)}
                    >
                      <RemoveImageIcon>×</RemoveImageIcon>
                    </RemoveImageButton>
                  </ImageWrapper>
                </motion.div>
              ))}
            </AnimatePresence>
          </UploadedImagesContainer>
        </ScrollableContainer>
      )}
    </ImageUploaderContainer>
  )
}
