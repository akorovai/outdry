import { Navigate, Route, Routes } from 'react-router-dom'

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
} from '@/pages'
import routePath from '@/consts/routePath'

const App = () => {
  return (
    <Routes>
      <Route path={routePath.HOME} element={<HomePage />} />
      <Route path={routePath.PRODUCTS} element={<ProductsPage />} />
      <Route path={routePath.WISHLIST} element={<WhishListPage />} />
      <Route path={routePath.PRODUCT} element={<ProductPage />} />
      <Route path={routePath.PROFILE} element={<PersonalCabinetPage />} />
      <Route path={routePath.LOGIN} element={<LoginPage />} />
      <Route path={routePath.REGISTRATION} element={<RegisterPage />} />
      <Route path={routePath.FORGET_PASSWORD} element={<ForgetPasswordPage />} />
      <Route path={routePath.TERMS_AND_CONDITIONS} element={<TermsAndConditionsPage />} />
      <Route path={routePath.CHECKOUT} element={<CheckoutPage />} />
      <Route path='*' element={<Navigate to={'/'} />} />
    </Routes>
  )
}

export default App
