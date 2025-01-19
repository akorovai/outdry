export interface IProduct {
  id?: number
  name: string
  description: string
  links: string[] | File[]
  amount: number
  size: string
  type: { id: number; name: string }
  color: { id: number; name: string; code: string }
  price: number
  discount?: number
  gender: string
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
