import { ReactNode } from 'react'
import { useAuth } from './AuthContext.tsx'
import { Navigate } from 'react-router-dom'

interface PrivateRouteProps {
  element: ReactNode
}

export const PrivateRoute = ({ element }: PrivateRouteProps) => {
  const { token } = useAuth()

  if (!token) {
    return <Navigate to='/login' />
  }

  return <>{element}</>
}
