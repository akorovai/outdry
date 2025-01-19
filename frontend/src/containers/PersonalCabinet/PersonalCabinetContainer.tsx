import React, { useState, useEffect } from 'react'
import { Breadcrumb } from '@/components'
import {
  Container,
  ContentWrapper,
  Divider,
  MenuContent,
  MenuHeader,
  MenuWrapper,
  Option,
  OptionsList,
  Title,
} from './PersonalCabinet.styled'
import Overview from './Overview/Overview.tsx'
import Orders from './Orders/Orders.tsx'
import AddressBook from './AddressBook/AddressBook.tsx'
import LogOut from './LogOut/LogOut.tsx'
import { useAuth } from '@/context/AuthContext/AuthContext.tsx'

import useAddresses from './AddressBook/useAddresses'
import useOrders from './Orders/useOrders.tsx'
import { useLocation } from 'react-router-dom'

const PersonalCabinet: React.FC = (): React.ReactElement => {
  const { user, token } = useAuth()
  const [selectedOption, setSelectedOption] = useState<string>('Overview')
  const location = useLocation()

  const { addresses, loading: addressesLoading, error, addAddress, editAddress, deleteAddress } = useAddresses(token)
  const { orders, loading: ordersLoading } = useOrders()

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const tab = queryParams.get('tab')

    if (tab === 'orders') {
      setSelectedOption('Orders')
    }
  }, [location.search])

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
  }

  const options = [
    {
      key: 'Overview',
      component: (
        <Overview
          setActiveMenuOption={setSelectedOption}
          addresses={addresses}
          orders={orders}
          loading={ordersLoading}
        />
      ),
    },
    {
      key: 'Orders',
      component: <Orders orders={orders} loading={ordersLoading} />,
    },
    {
      key: 'Address Book',
      component: (
        <AddressBook
          addresses={addresses}
          loading={addressesLoading}
          error={error}
          onAddAddress={addAddress}
          onEditAddress={editAddress}
          onDeleteAddress={deleteAddress}
        />
      ),
    },
    { key: 'Log Out', component: <LogOut /> },
  ]

  const renderContent = () => {
    const selected = options.find(opt => opt.key === selectedOption)
    return selected ? selected.component : null
  }

  return (
    <Container>
      <MenuWrapper>
        <MenuContent>
          <MenuHeader>
            <Breadcrumb items={['Home', 'personal cabinet']} />
            <Title>Hi, {user?.nickname}</Title>
          </MenuHeader>
          <OptionsList>
            {options.map(option => (
              <Option
                key={option.key}
                isSelected={selectedOption === option.key}
                onClick={() => handleOptionClick(option.key)}
              >
                {option.key}
              </Option>
            ))}
          </OptionsList>
        </MenuContent>
        <Divider />
      </MenuWrapper>
      <ContentWrapper>{renderContent()}</ContentWrapper>
    </Container>
  )
}

export default PersonalCabinet
