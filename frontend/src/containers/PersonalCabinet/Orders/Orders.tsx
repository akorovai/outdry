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

const orders = [
  {
    id: 1,
    date: '27.07.2032',
    items: 3,
    status: 'In Process',
    products: [
      {
        id: 1,
        imageUrl: '/images/geo-palms-t-shirt.jpg',
        title: 'Geo Palms - Mens Tie Dye T-Shirt',
        description: 'Multi/XS',
      },
      {
        id: 2,
        imageUrl: '/images/classic-denim-jeans.jpg',
        title: 'Classic Denim Jeans',
        description: 'Blue/32',
      },
      {
        id: 3,
        imageUrl: '/images/leather-jacket.jpg',
        title: 'Leather Jacket',
        description: 'Black/M',
      },
    ],
  },
  {
    id: 2,
    date: '28.07.2032',
    items: 5,
    status: 'Canceled',
    products: [
      {
        id: 4,
        imageUrl: '/images/running-shoes.jpg',
        title: 'Running Shoes',
        description: 'Black/42',
      },
      {
        id: 5,
        imageUrl: '/images/woolen-sweater.jpg',
        title: 'Woolen Sweater',
        description: 'Grey/L',
      },
      {
        id: 6,
        imageUrl: '/images/baseball-cap.jpg',
        title: 'Baseball Cap',
        description: 'Red/One Size',
      },
      {
        id: 7,
        imageUrl: '/images/canvas-backpack.jpg',
        title: 'Canvas Backpack',
        description: 'Green/One Size',
      },
      {
        id: 8,
        imageUrl: '/images/classic-denim-jeans.jpg',
        title: 'Classic Denim Jeans',
        description: 'Blue/32',
      },
    ],
  },
  {
    id: 3,
    date: '29.07.2032',
    items: 2,
    status: 'Delivered',
    products: [
      {
        id: 9,
        imageUrl: '/images/geo-palms-t-shirt.jpg',
        title: 'Geo Palms - Mens Tie Dye T-Shirt',
        description: 'Multi/XS',
      },
      {
        id: 10,
        imageUrl: '/images/leather-jacket.jpg',
        title: 'Leather Jacket',
        description: 'Black/M',
      },
    ],
  },
]

const Orders: React.FC = (): React.ReactElement => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState<(typeof orders)[0] | null>(null)

  const openOverlay = (order: (typeof orders)[0]) => {
    setSelectedOrder(order)
    setIsOverlayVisible(true)
  }

  const closeOverlay = () => {
    setIsOverlayVisible(false)
    setSelectedOrder(null)
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
                    <DateText>{order.date}</DateText>
                    <NumberOfItemsText>{order.items} items</NumberOfItemsText>
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

      {isOverlayVisible && selectedOrder && <OrderOverlay products={selectedOrder.products} onClose={closeOverlay} />}
    </OrderContainerWrapper>
  )
}

export default Orders
