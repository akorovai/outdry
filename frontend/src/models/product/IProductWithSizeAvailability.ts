export interface ColorResponse {
  id: string | number
  name: string
  code: string
}

export interface TypeResponse {
  id: number
  name: string
}

export enum Size {
  XS = 'Extra Small',
  S = 'Small',
  M = 'Medium',
  L = 'Large',
  XL = 'Extra Large',
  XXL = 'Double Extra Large',
}

export interface IProductWithSizeAvailability {
  id: number
  name: string
  description: string
  price: number
  color: ColorResponse
  type: {
    id: number
    name: string
  }
  links: string[]
  gender: string
  amount: number
  discount: number
  size: string
  sizeAvailabilityByColor: Record<string, string[]>
}
