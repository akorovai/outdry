import React, { useState } from 'react'
import { MainButton } from '@/components'
import {
  DateText,
  Divider,
  LeftOrderInfo,
  NoOrdersText,
  NumberOfItemsText,
  OrderContainerWrapper,
  OrderContainerWrapperSecondLayer,
  OrderImage,
  OrderItem,
  OrderItemLeft,
  OrderItemRight,
  OrdersHeaderTitle,
  OrdersList,
  StatusLabel,
  StatusText,
} from './Orders.styled'
import { colors } from '@/consts'
import { OrderOverlay } from '@/components/Overlay'
import { OrderResponse } from '@/models'

interface OrdersProps {
  orders: OrderResponse[] // Receive orders as a prop
  loading: boolean // Receive loading state as a prop
}

const Orders: React.FC<OrdersProps> = ({ orders, loading }): React.ReactElement => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState<OrderResponse | null>(null)

  const openOverlay = (order: OrderResponse) => {
    setSelectedOrder(order)
    setIsOverlayVisible(true)
  }

  const closeOverlay = () => {
    setIsOverlayVisible(false)
    setSelectedOrder(null)
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <OrderContainerWrapper>
      <OrderContainerWrapperSecondLayer>
        <OrdersHeaderTitle>Your Orders</OrdersHeaderTitle>
        <OrdersList>
          {orders.length === 0 ? (
            <NoOrdersText>You haven't placed any orders yet</NoOrdersText>
          ) : (
            orders.map((order, index) => (
              <OrderItem key={order.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <OrderItemLeft>
                  <OrderImage src='https://via.placeholder.com/106' alt='Order' />
                  <LeftOrderInfo>
                    <DateText>{new Date(order.createdAt).toLocaleDateString()}</DateText>
                    <NumberOfItemsText>{order.orderItems.length} items</NumberOfItemsText>
                  </LeftOrderInfo>
                </OrderItemLeft>
                <OrderItemRight>
                  <StatusLabel status={order.status}>
                    <StatusText status={order.status}>{order.status}</StatusText>
                  </StatusLabel>
                  <MainButton
                    width={70}
                    backgroundColor={colors.BLACK}
                    textColor={colors.WHITE}
                    hoverEffect={{
                      backgroundColor: colors.LIGHT_GREY_600,
                      textColor: colors.WHITE,
                    }}
                    onClick={() => openOverlay(order)}
                  >
                    More details
                  </MainButton>
                </OrderItemRight>
              </OrderItem>
            ))
          )}
        </OrdersList>
        <Divider />
      </OrderContainerWrapperSecondLayer>

      {isOverlayVisible && selectedOrder && <OrderOverlay products={selectedOrder.orderItems} onClose={closeOverlay} />}
    </OrderContainerWrapper>
  )
}

export default Orders
