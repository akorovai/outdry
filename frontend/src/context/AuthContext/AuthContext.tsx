import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { User, AuthResponse, Credentials, UserData, AuthContextType } from './types'
import storage from '@/consts/storage'
import { localStorageService } from '../../services'
import AuthEndpoints from './AuthEndpoints'
import { jwtDecode } from 'jwt-decode'
interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean
}

interface ErrorResponse {
  message: string
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const api = axios.create({
  baseURL: `https://outdry-backend.orangeforest-84325f96.polandcentral.azurecontainerapps.io/`,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(JSON.parse(localStorageService.getItem(storage.USER) || 'null'))
  const [token, setToken] = useState<string | null>(localStorageService.getItem(storage.ACCESS_TOKEN) || null)
  const navigate = useNavigate()

  const logout = useCallback(async (): Promise<void> => {
    try {
      await api.post(AuthEndpoints.LOGOUT)
      setUser(null)
      setToken(null)
      localStorageService.removeItem(storage.ACCESS_TOKEN)
      localStorageService.removeItem(storage.REFRESH_TOKEN)
      localStorageService.removeItem(storage.USER)
      navigate('/login')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }, [navigate])

  const refreshToken = useCallback(async (): Promise<void> => {
    try {
      const refreshToken = localStorageService.getItem(storage.REFRESH_TOKEN)
      if (!refreshToken) {
        throw new Error('No refresh token found')
      }
      const response: AxiosResponse<{ accessToken: string }> = await api.post(AuthEndpoints.REFRESH_TOKEN, {
        refreshToken,
      })
      const newToken = response.data.accessToken
      localStorageService.setItem(storage.ACCESS_TOKEN, newToken)
      setToken(newToken)
    } catch (error) {
      console.error('Token refresh error:', error)
      await logout()
      throw new Error((error as AxiosError<ErrorResponse>).response?.data?.message || 'Token refresh failed')
    }
  }, [logout])

  useEffect(() => {
    const interceptor = api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      const token = localStorageService.getItem(storage.ACCESS_TOKEN)
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    })

    return () => {
      api.interceptors.request.eject(interceptor)
    }
  }, [])

  useEffect(() => {
    const interceptor = api.interceptors.response.use(
      response => response,
      async (error: AxiosError) => {
        const originalRequest = error.config as CustomAxiosRequestConfig
        if (error.response?.status === 401 && originalRequest && !originalRequest._retry) {
          originalRequest._retry = true
          try {
            const newToken = await refreshToken()
            originalRequest.headers.Authorization = `Bearer ${newToken}`
            return api(originalRequest)
          } catch (refreshError) {
            console.error('Token refresh failed:', refreshError)
            await logout()
          }
        }
        return Promise.reject(error)
      },
    )

    return () => {
      api.interceptors.response.eject(interceptor)
    }
  }, [logout, refreshToken])

  const login = useCallback(
    async (credentials: Credentials): Promise<void> => {
      try {
        const response: AxiosResponse<AuthResponse> = await api.post(AuthEndpoints.AUTHENTICATE, credentials)
        const { accessToken, refreshToken } = response.data

        const decodedRefreshToken = jwtDecode<{
          userId: string
          username: string
          sub: string
          authorities: string[]
        }>(refreshToken)

        const user: User = {
          userId: decodedRefreshToken.userId,
          email: decodedRefreshToken.sub,
          nickname: decodedRefreshToken.username,
          authorities: decodedRefreshToken.authorities,
        }

        setUser(user)
        setToken(accessToken)
        localStorageService.setItem(storage.ACCESS_TOKEN, accessToken)
        localStorageService.setItem(storage.REFRESH_TOKEN, refreshToken)
        localStorageService.setItem(storage.USER, JSON.stringify(user))

        navigate('/')
      } catch (error) {
        console.error('Login error:', error)
        throw new Error((error as AxiosError<ErrorResponse>).response?.data?.message || 'Login failed')
      }
    },
    [navigate],
  )

  const register = useCallback(
    async (userData: UserData): Promise<void> => {
      try {
        await api.post(AuthEndpoints.REGISTER, userData)
        navigate('/login')
      } catch (error) {
        console.error('Registration error:', error)
        throw new Error((error as AxiosError<ErrorResponse>).response?.data?.message || 'Registration failed')
      }
    },
    [navigate],
  )

  const activateAccount = useCallback(
    async (emailToken: string): Promise<void> => {
      try {
        const response: AxiosResponse<{ jwtToken: string }> = await api.post(AuthEndpoints.ACTIVATE_ACCOUNT, null, {
          params: { emailToken },
        })
        const { jwtToken } = response.data
        localStorageService.setItem(storage.ACCESS_TOKEN, jwtToken)
        setToken(jwtToken)
        navigate('/')
      } catch (error) {
        console.error('Account activation error:', error)
        throw new Error((error as AxiosError<ErrorResponse>).response?.data?.message || 'Account activation failed')
      }
    },
    [navigate],
  )

  const recoverAccount = useCallback(async (email: string): Promise<void> => {
    try {
      await api.get(AuthEndpoints.RECOVER_ACCOUNT, { params: { email } })
    } catch (error) {
      console.error('Account recovery error:', error)
      throw new Error((error as AxiosError<ErrorResponse>).response?.data?.message || 'Account recovery failed')
    }
  }, [])

  const changePassword = useCallback(async (token: string, newPassword: string): Promise<void> => {
    try {
      await api.post(
        AuthEndpoints.CHANGE_PASSWORD,
        { password: newPassword },
        { headers: { Authorization: `Bearer ${token}` } },
      )
    } catch (error) {
      console.error('Password change error:', error)
      throw new Error((error as AxiosError<ErrorResponse>).response?.data?.message || 'Password change failed')
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{ user, token, login, logout, register, refreshToken, activateAccount, recoverAccount, changePassword }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
