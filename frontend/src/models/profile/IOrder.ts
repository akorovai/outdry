export interface OrderItemResponse {
  id: number
  quantity: number
  price: number
  productId: number
  productName: string
  size: string
  color: string
  imageLink: string
}

export interface OrderResponse {
  id: number
  shippingTime: string
  createdAt: string
  totalPrice: number
  status: OrderStatus
  shippingPrice: number
  orderItems: OrderItemResponse[]
}

export enum OrderStatus {
  CANCELED = 'CANCELED',
  DELIVERED = 'DELIVERED',
  IN_PROGRESS = 'IN_PROGRESS',
}
