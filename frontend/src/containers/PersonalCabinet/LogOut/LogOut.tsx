import React, { useEffect } from 'react'
import { useAuth } from '@/context/AuthContext/AuthContext.tsx'

import { useNavigate } from 'react-router-dom'

const LogOut: React.FC = (): React.ReactElement => {
  const { logout } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    logout().then(() => {
      navigate('/login')
    })
  }, [logout, navigate])

  return (
    <div>
      <p>Logging out...</p>
    </div>
  )
}

export default LogOut
