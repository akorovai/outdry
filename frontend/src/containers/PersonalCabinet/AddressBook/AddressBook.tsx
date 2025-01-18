import React, { useState } from 'react'
import { MainButton } from '@/components'
import { colors } from '@/consts'
import { IAddressInfo } from '@/models'
import {
  SectionContainer,
  Divider,
  AddressBookContentSection,
  AddressesContainer,
  AddressesHeader,
  AddressesTitle,
  HeaderText,
  AddressList,
  StoredAdrressText,
  AddressItem,
  AddressFunctions,
  AddressFunctionText,
  InputField,
} from './AddressBook.styled'

interface AddressBookProps {
  addresses?: IAddressInfo[]
  loading: boolean
  error: string | null
  onAddAddress: (address: IAddressInfo) => Promise<void>
  onEditAddress: (addressId: number, updatedAddress: IAddressInfo) => Promise<void>
  onDeleteAddress: (addressId: number) => Promise<void>
}

const AddressBook: React.FC<AddressBookProps> = ({
  addresses = [],
  loading,
  error,
  onAddAddress,
  onEditAddress,
  onDeleteAddress,
}): React.ReactElement => {
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editedAddress, setEditedAddress] = useState<IAddressInfo | null>(null)

  const [isAddingNewAddress, setIsAddingNewAddress] = useState<boolean>(false)
  const [newAddress, setNewAddress] = useState<IAddressInfo>({
    id: 0,
    fullName: '',
    state: '',
    street: '',
    apartment: '',
    postalCode: '',
    city: '',
    phone: '',
    userId: 0,
  })

  const handleAddAddress = () => {
    setIsAddingNewAddress(true)
    setNewAddress({
      id: addresses.length + 1,
      fullName: '',
      state: '',
      street: '',
      apartment: '',
      postalCode: '',
      city: '',
      phone: '',
      userId: 0,
    })
  }

  const handleNewAddressInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof IAddressInfo) => {
    setNewAddress({ ...newAddress, [field]: e.target.value })
  }

  const handleSaveNewAddress = async () => {
    try {
      await onAddAddress(newAddress)
      setIsAddingNewAddress(false)
    } catch (err) {
      console.error('Error saving new address:', err)
    }
  }

  const handleCancelNewAddress = () => {
    setIsAddingNewAddress(false)
  }

  const handleEditAddress = (id: number) => {
    const addressToEdit = addresses.find(address => address.id === id)
    if (addressToEdit) {
      setEditingId(id)
      setEditedAddress({ ...addressToEdit })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof IAddressInfo) => {
    if (editedAddress) {
      setEditedAddress({ ...editedAddress, [field]: e.target.value })
    }
  }

  const handleSaveAddress = async () => {
    if (editedAddress) {
      try {
        await onEditAddress(editedAddress.id || 0, editedAddress)
        setEditingId(null)
        setEditedAddress(null)
      } catch (err) {
        console.error('Error saving edited address:', err)
      }
    }
  }

  const handleDeleteAddress = async (id: number) => {
    try {
      await onDeleteAddress(id)
    } catch (err) {
      console.error('Error deleting address:', err)
    }
  }

  if (loading) {
    return <div>Loading addresses...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <SectionContainer>
      <AddressBookContentSection>
        <AddressesContainer>
          <AddressesHeader>
            <AddressesTitle>Address Book</AddressesTitle>
            <HeaderText>Saved addresses allow for a faster checkout</HeaderText>
            <HeaderText>
              {addresses.length} address{addresses.length !== 1 ? 'es' : ''}
            </HeaderText>
          </AddressesHeader>
          <AddressesTitle>Stored addresses</AddressesTitle>
          <AddressList>
            {isAddingNewAddress && (
              <AddressItem>
                <InputField
                  type='text'
                  value={newAddress.fullName}
                  onChange={e => handleNewAddressInputChange(e, 'fullName')}
                  placeholder='Full Name'
                />
                <InputField
                  type='text'
                  value={newAddress.street}
                  onChange={e => handleNewAddressInputChange(e, 'street')}
                  placeholder='Street'
                />
                <InputField
                  type='text'
                  value={newAddress.apartment}
                  onChange={e => handleNewAddressInputChange(e, 'apartment')}
                  placeholder='Apartment'
                />
                <InputField
                  type='text'
                  value={newAddress.city}
                  onChange={e => handleNewAddressInputChange(e, 'city')}
                  placeholder='City'
                />
                <InputField
                  type='text'
                  value={newAddress.state}
                  onChange={e => handleNewAddressInputChange(e, 'state')}
                  placeholder='State'
                />
                <InputField
                  type='text'
                  value={newAddress.postalCode}
                  onChange={e => handleNewAddressInputChange(e, 'postalCode')}
                  placeholder='Postal Code'
                />
                <InputField
                  type='text'
                  value={newAddress.phone}
                  onChange={e => handleNewAddressInputChange(e, 'phone')}
                  placeholder='Phone'
                />
                <AddressFunctions>
                  <AddressFunctionText onClick={handleSaveNewAddress}>Save</AddressFunctionText>
                  <AddressFunctionText onClick={handleCancelNewAddress}>Cancel</AddressFunctionText>
                </AddressFunctions>
              </AddressItem>
            )}
            {addresses.map(address => (
              <AddressItem key={address.id}>
                {editingId === address.id && editedAddress ? (
                  <>
                    <InputField
                      type='text'
                      value={editedAddress.fullName}
                      onChange={e => handleInputChange(e, 'fullName')}
                      placeholder='Full Name'
                    />
                    <InputField
                      type='text'
                      value={editedAddress.street}
                      onChange={e => handleInputChange(e, 'street')}
                      placeholder='Street'
                    />
                    <InputField
                      type='text'
                      value={editedAddress.apartment}
                      onChange={e => handleInputChange(e, 'apartment')}
                      placeholder='Apartment'
                    />
                    <InputField
                      type='text'
                      value={editedAddress.city}
                      onChange={e => handleInputChange(e, 'city')}
                      placeholder='City'
                    />
                    <InputField
                      type='text'
                      value={editedAddress.state}
                      onChange={e => handleInputChange(e, 'state')}
                      placeholder='State'
                    />
                    <InputField
                      type='text'
                      value={editedAddress.postalCode}
                      onChange={e => handleInputChange(e, 'postalCode')}
                      placeholder='Postal Code'
                    />
                    <InputField
                      type='text'
                      value={editedAddress.phone}
                      onChange={e => handleInputChange(e, 'phone')}
                      placeholder='Phone'
                    />
                    <AddressFunctions>
                      <AddressFunctionText onClick={handleSaveAddress}>Save</AddressFunctionText>
                      <AddressFunctionText onClick={() => setEditingId(null)}>Cancel</AddressFunctionText>
                    </AddressFunctions>
                  </>
                ) : (
                  <>
                    <StoredAdrressText>
                      {address.fullName}, {address.street}, {address.apartment}, {address.city}, {address.state},{' '}
                      {address.postalCode}, {address.phone}
                    </StoredAdrressText>
                    <AddressFunctions>
                      <AddressFunctionText onClick={() => handleEditAddress(address.id || 0)}>
                        Edit address
                      </AddressFunctionText>
                      <AddressFunctionText onClick={() => handleDeleteAddress(address.id || 0)}>
                        Delete
                      </AddressFunctionText>
                    </AddressFunctions>
                  </>
                )}
              </AddressItem>
            ))}
          </AddressList>
        </AddressesContainer>
        <Divider />
      </AddressBookContentSection>
      <MainButton backgroundColor={colors.LIGHT_GREEN_400} textColor={colors.WHITE} onClick={handleAddAddress}>
        Add new address
      </MainButton>
    </SectionContainer>
  )
}

export default AddressBook
