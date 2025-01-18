import { Route, Routes, Navigate } from 'react-router-dom'

import {
  ForgetPasswordPage,
  HomePage,
  LoginPage,
  PersonalCabinetPage,
  ProductPage,
  ProductsPage,
  RegisterPage,
  TermsAndConditionsPage,
  WhishListPage,
  CheckoutPage,
  WarehousePage,
} from '@/pages'
import routePath from '@/consts/routePath'
import { PrivateRoute } from './context/AuthContext/PrivateRoute.tsx'

const App = () => {
  return (
    <Routes>
      <Route path={routePath.HOME} element={<PrivateRoute element={<HomePage />} />} />
      <Route path={routePath.PRODUCTS} element={<PrivateRoute element={<ProductsPage />} />} />
      <Route path={routePath.WISHLIST} element={<PrivateRoute element={<WhishListPage />} />} />
      <Route path={routePath.PRODUCT} element={<PrivateRoute element={<ProductPage />} />} />
      <Route path={routePath.PROFILE} element={<PrivateRoute element={<PersonalCabinetPage />} />} />
      <Route path={routePath.CHECKOUT} element={<PrivateRoute element={<CheckoutPage />} />} />
      <Route path={routePath.WAREHOUSE} element={<PrivateRoute element={<WarehousePage />} />} />

      <Route path={routePath.LOGIN} element={<LoginPage />} />
      <Route path={routePath.REGISTRATION} element={<RegisterPage />} />
      <Route path={routePath.FORGET_PASSWORD} element={<ForgetPasswordPage />} />
      <Route path={routePath.TERMS_AND_CONDITIONS} element={<TermsAndConditionsPage />} />

      <Route path='*' element={<Navigate to={'/'} />} />
    </Routes>
  )
}

export default App
