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
import { IAddressInfo, OrderResponse } from '@/models'

interface OverviewProps {
  setActiveMenuOption: (option: string) => void
  addresses: IAddressInfo[]
  orders: OrderResponse[]
  loading: boolean
}

const Overview: FC<OverviewProps> = ({ setActiveMenuOption, addresses, orders, loading }): ReactElement => {
  const mostRecentOrder = orders.length > 0 ? orders[orders.length - 1] : null
  const firstAddress = addresses[0]

  if (loading) {
    return <div>Loading...</div>
  }

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
          mostRecentOrder && (
            <OrderItem>
              <OrderItemLeft>
                <OrderImage src={mostRecentOrder.orderItems[0].imageLink} alt='Order' />
                <LeftOrderInfo>
                  <DateText>{new Date(mostRecentOrder.createdAt).toLocaleDateString()}</DateText>
                  <NumberOfItemsText>{mostRecentOrder.orderItems.length} items</NumberOfItemsText>
                </LeftOrderInfo>
              </OrderItemLeft>
              <OrderItemRight>
                <StatusLabel status={mostRecentOrder.status}>
                  <StatusText status={mostRecentOrder.status}>{mostRecentOrder.status}</StatusText>
                </StatusLabel>
              </OrderItemRight>
            </OrderItem>
          )
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
