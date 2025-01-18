import React from 'react'
import { AnimatePresence } from 'framer-motion'

import { SVG } from '@/components'
import { colors } from '@/consts'
import {
  ArrowIcon,
  DropdownContainer,
  DropdownHeader,
  DropdownItem,
  DropdownList,
  slideInOut,
} from './AddProductOverlay.styled.ts'

interface DropdownProps {
  options: string[]
  selectedOption: string
  onSelect: (option: string) => void
  placeholder: string
  isOpen: boolean
  toggleDropdown: () => void
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedOption,
  onSelect,
  placeholder,
  isOpen,
  toggleDropdown,
}) => {
  return (
    <DropdownContainer>
      <DropdownHeader
        onClick={toggleDropdown}
        whileHover={{ backgroundColor: colors.LIGHT_GREY_200 }}
        whileTap={{ scale: 0.95 }}
      >
        {selectedOption || placeholder}
        <ArrowIcon animate={{ rotate: isOpen ? -90 : 0 }} transition={{ duration: 0.2 }}>
          <SVG.Arrow color={colors.LIGHT_GREY_700} />
        </ArrowIcon>
      </DropdownHeader>
      <AnimatePresence>
        {isOpen && (
          <DropdownList {...slideInOut}>
            {options.map(option => (
              <DropdownItem
                key={option}
                onClick={() => {
                  onSelect(option)
                  toggleDropdown()
                }}
              >
                {option}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </AnimatePresence>
    </DropdownContainer>
  )
}
