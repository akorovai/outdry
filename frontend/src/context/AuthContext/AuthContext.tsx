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
const BASE_URL = 'https://outdry-backend.orangeforest-84325f96.polandcentral.azurecontainerapps.io'

export const api = axios.create({
  baseURL: `${BASE_URL}/`,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(JSON.parse(localStorageService.getItem(storage.USER) || 'null'))
  const [token, setToken] = useState<string | null>(localStorageService.getItem(storage.ACCESS_TOKEN) || null)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [refreshSubscribers, setRefreshSubscribers] = useState<Array<(token: string) => void>>([])
  const navigate = useNavigate()

  const updateTokens = useCallback((accessToken: string, refreshToken?: string) => {
    setToken(accessToken)
    localStorageService.setItem(storage.ACCESS_TOKEN, accessToken)
    if (refreshToken) {
      localStorageService.setItem(storage.REFRESH_TOKEN, refreshToken)
    }
  }, [])

  const clearAuthData = useCallback(() => {
    setUser(null)
    setToken(null)
    localStorageService.removeItem(storage.ACCESS_TOKEN)
    localStorageService.removeItem(storage.REFRESH_TOKEN)
    localStorageService.removeItem(storage.USER)
  }, [])

  const logout = useCallback(async (): Promise<void> => {
    try {
      const currentToken = localStorageService.getItem(storage.ACCESS_TOKEN)
      if (currentToken) {
        await api.post(AuthEndpoints.LOGOUT, null, {
          headers: { Authorization: `Bearer ${currentToken}` },
        })
      }
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      clearAuthData()
      navigate('/login')
    }
  }, [navigate, clearAuthData])

  const onRefreshed = useCallback(
    (token: string) => {
      refreshSubscribers.forEach(callback => callback(token))
      setRefreshSubscribers([])
    },
    [refreshSubscribers],
  )

  const refreshToken = useCallback(async (): Promise<string> => {
    try {
      if (isRefreshing) {
        return new Promise(resolve => {
          setRefreshSubscribers(prev => [...prev, resolve])
        })
      }

      setIsRefreshing(true)
      const refreshToken = localStorageService.getItem(storage.REFRESH_TOKEN)
      if (!refreshToken) {
        throw new Error('No refresh token found')
      }

      const response: AxiosResponse<{ accessToken: string }> = await axios.post(
        `${BASE_URL}${AuthEndpoints.REFRESH_TOKEN}`,
        { refreshToken },
        { headers: { 'Content-Type': 'application/json' } },
      )

      const newToken = response.data.accessToken
      updateTokens(newToken)
      onRefreshed(newToken)
      return newToken
    } catch (error) {
      console.error('Token refresh error:', error)
      await logout()
      throw error
    } finally {
      setIsRefreshing(false)
    }
  }, [isRefreshing, logout, updateTokens, onRefreshed])

  const isAuthError = (status?: number) => status === 401 || status === 403

  useEffect(() => {
    let requestInterceptor: number
    let responseInterceptor: number

    const setupInterceptors = () => {
      requestInterceptor = api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
        const currentToken = localStorageService.getItem(storage.ACCESS_TOKEN)
        if (currentToken) {
          config.headers.Authorization = `Bearer ${currentToken}`
        }
        return config
      })

      responseInterceptor = api.interceptors.response.use(
        response => response,
        async (error: AxiosError) => {
          const originalRequest = error.config as CustomAxiosRequestConfig

          if (isAuthError(error.response?.status) && originalRequest && !originalRequest._retry) {
            originalRequest._retry = true

            try {
              const newToken = await refreshToken()
              originalRequest.headers.Authorization = `Bearer ${newToken}`
              return api(originalRequest)
            } catch (refreshError) {
              console.error('Token refresh failed:', refreshError)
              if (error.response?.status === 403) {
                console.error('Access forbidden. Redirecting to login...')
              }
              await logout()
              throw refreshError
            }
          }
          return Promise.reject(error)
        },
      )
    }

    setupInterceptors()

    return () => {
      api.interceptors.request.eject(requestInterceptor)
      api.interceptors.response.eject(responseInterceptor)
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
        updateTokens(accessToken, refreshToken)
        localStorageService.setItem(storage.USER, JSON.stringify(user))

        navigate('/')
      } catch (error) {
        console.error('Login error:', error)
        throw new Error((error as AxiosError<ErrorResponse>).response?.data?.message || 'Login failed')
      }
    },
    [navigate, updateTokens],
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
        updateTokens(jwtToken)
        navigate('/')
      } catch (error) {
        console.error('Account activation error:', error)
        throw new Error((error as AxiosError<ErrorResponse>).response?.data?.message || 'Account activation failed')
      }
    },
    [navigate, updateTokens],
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
      value={{
        user,
        token,
        login,
        logout,
        register,
        refreshToken,
        activateAccount,
        recoverAccount,
        changePassword,
        BASE_URL,
      }}
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
