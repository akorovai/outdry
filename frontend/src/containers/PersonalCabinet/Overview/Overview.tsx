import { FC, ReactElement } from 'react'
import {
  buttonVariants,
  containerVariants,
  NoContentText,
  OverviewContainer,
  OverviewHeader,
  SectionHeader,
  textVariants,
  ViewAllButton,
} from './Overview.styled'
import { AddressItem, StoredAdrressText } from '../AddressBook/AddressBook.styled'
import {
  DateText,
  Divider as OrderDivider,
  LeftOrderInfo,
  NumberOfItemsText,
  OrderImage,
  OrderItem,
  OrderItemLeft,
  OrderItemRight,
  StatusLabel,
  StatusText,
} from '../Orders/Orders.styled'
import { IAddressInfo } from '@/models'

interface OverviewProps {
  setActiveMenuOption: (option: string) => void
  addresses: IAddressInfo[]
}

const Overview: FC<OverviewProps> = ({ setActiveMenuOption, addresses }): ReactElement => {
  const orders = [
    { id: 1, date: '27.07.2032', items: 3, status: 'In Process' },
    { id: 2, date: '28.07.2032', items: 5, status: 'Canceled' },
    { id: 3, date: '29.07.2032', items: 2, status: 'Delivered' },
  ]

  const firstOrder = orders[0]
  const firstAddress = addresses[0]

  return (
    <OverviewContainer variants={containerVariants} initial='hidden' animate='visible'>
      <div style={{ width: '100%' }}>
        <SectionHeader>
          <OverviewHeader variants={textVariants} initial='hidden' animate='visible'>
            Recent Orders
          </OverviewHeader>
          {orders.length > 0 && (
            <ViewAllButton onClick={() => setActiveMenuOption('Orders')} variants={buttonVariants} whileHover='hover'>
              View All
            </ViewAllButton>
          )}
        </SectionHeader>
        {orders.length === 0 ? (
          <NoContentText variants={textVariants} initial='hidden' animate='visible'>
            You haven't placed any orders yet
          </NoContentText>
        ) : (
          <OrderItem>
            <OrderItemLeft>
              <OrderImage src='https://via.placeholder.com/106' alt='Order' />
              <LeftOrderInfo>
                <DateText>{firstOrder.date}</DateText>
                <NumberOfItemsText>{firstOrder.items} items</NumberOfItemsText>
              </LeftOrderInfo>
            </OrderItemLeft>
            <OrderItemRight>
              <StatusLabel status={firstOrder.status}>
                <StatusText status={firstOrder.status}>{firstOrder.status}</StatusText>
              </StatusLabel>
            </OrderItemRight>
          </OrderItem>
        )}
      </div>
      <OrderDivider />

      <div style={{ width: '100%' }}>
        <SectionHeader>
          <OverviewHeader variants={textVariants} initial='hidden' animate='visible'>
            Addresses
          </OverviewHeader>
          {addresses.length > 0 && (
            <ViewAllButton
              onClick={() => setActiveMenuOption('Address Book')}
              variants={buttonVariants}
              whileHover='hover'
            >
              View All
            </ViewAllButton>
          )}
        </SectionHeader>
        {addresses.length === 0 ? (
          <NoContentText variants={textVariants} initial='hidden' animate='visible'>
            No addresses saved yet
          </NoContentText>
        ) : (
          <AddressItem>
            <StoredAdrressText>
              {firstAddress.fullName}, Address: {firstAddress.street}, {firstAddress.apartment}, City:{' '}
              {firstAddress.city}, State: {firstAddress.state}, ZIP Code: {firstAddress.postalCode}, Phone:{' '}
              {firstAddress.phone}
            </StoredAdrressText>
          </AddressItem>
        )}
      </div>
    </OverviewContainer>
  )
}

export default Overview
