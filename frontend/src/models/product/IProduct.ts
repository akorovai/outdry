export interface IProduct {
  id?: number
  name: string
  description: string
  links: (string | File)[]
  amount: number
  size: string
  type: { id: number; name: string }
  color: { id: number; name: string; code: string }
  price: number
  discount?: number
  gender: string
}
