export interface User {
  userId: string
  email: string
  nickname: string
  authorities: string[]
}

export interface AuthResponse {
  user: User
  accessToken: string
  refreshToken: string
}
export interface Credentials {
  email: string
  password: string
}

export interface UserData extends Credentials {
  username: string
}

export interface AuthContextType {
  user: User | null
  token: string | null
  login: (credentials: Credentials) => Promise<void>
  logout: () => Promise<void>
  register: (userData: UserData) => Promise<void>
  refreshToken: () => Promise<void>
  activateAccount: (emailToken: string) => Promise<void>
  recoverAccount: (email: string) => Promise<void>
  changePassword: (token: string, newPassword: string) => Promise<void>
  BASE_URL: string
}
