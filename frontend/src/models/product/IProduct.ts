export interface IProduct {
  id: number
  name: string
  description: string
  price: number
  color: ColorResponse
  type: TypeResponse
  links: string[]
  gender: string
  amount: number
  discount: number
  size: string
}

export interface ColorResponse {
  id: number
  name: string
  code: string
}

export interface TypeResponse {
  id: number
  name: string
}
