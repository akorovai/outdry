import { ChangeEvent, FC, ReactElement, useState } from 'react'
import { MainButton } from '@/components'
import checkout_final from '@/assets/images/checkout_final.png'
import {
  CheckoutLeftContainer,
  CheckoutLeftContainerContent,
  ContinueToPaymentContainer,
  ContinueToPaymentText,
  FCCMainSection,
  FCCTitle,
  FinalContainer,
  FinalContainerContent,
  ImageContainer,
  RightContainer,
  RightContainerContent,
  ThankYouText,
  WrapperContainer,
} from './CheckoutContainer.styled'
import { CheckoutForm } from './CheckoutForm'
import { ProductList } from './ProductList'
import { Subtotal } from './Subtotal'
import { HassleFreeReturns } from './HassleFreeReturns'
import { colors } from '@/consts'
import { useNavigate } from 'react-router-dom'
import routePath from '../../consts/routePath.ts'

import { validateCity, validatePhone, validateRequired, validateState, validateZipCode } from './validators.ts'

interface Product {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  variant?: string
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

const textVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
}

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 0.4 } },
}

const CheckoutContainer: FC = (): ReactElement => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [state, setState] = useState('')
  const [phone, setPhone] = useState('')
  const [selectedShippingMethod, setSelectedShippingMethod] = useState('Standard Shipping')
  const [currentStep, setCurrentStep] = useState(1)
  const [deliveryTime, setDeliveryTime] = useState('3-5 business days')
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('Visa')

  const [products] = useState<Product[]>([
    {
      id: '1',
      name: 'Geo Palms - Mens Recycled Zip Hoodie - Grey',
      price: 45.0,
      quantity: 1,
      image: 'path/to/image',
      variant: 'Grey/XS',
    },
  ])

  const subtotal = products.reduce((total, product) => total + product.price * product.quantity, 0)

  const shippingCost =
    selectedShippingMethod === 'Standard Shipping' ? 0 : selectedShippingMethod === 'Expedited Shipping' ? 12.99 : 24.99

  const total = subtotal + shippingCost

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
  const handleFullNameChange = (e: ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)
  const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)
  const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => setCity(e.target.value)
  const handleZipCodeChange = (e: ChangeEvent<HTMLInputElement>) => setZipCode(e.target.value)
  const handleStateChange = (e: ChangeEvent<HTMLInputElement>) => setState(e.target.value)
  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)

  const handleSelectShippingMethod = (method: string) => {
    setSelectedShippingMethod(method)

    switch (method) {
      case 'Standard Shipping':
        setDeliveryTime('4-7 business days')
        break
      case 'Expedited Shipping':
        setDeliveryTime('1-3 business days')
        break
      case 'Overnight Shipping':
        setDeliveryTime('1 business day')
        break
      default:
        setDeliveryTime('3-5 business days')
    }
  }

  const handleSelectPaymentMethod = (method: string) => {
    setSelectedPaymentMethod(method)
  }

  const isStepOneValid = () => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const isStepTwoComplete = () => {
    return (
      validateRequired(fullName) !== '' &&
      validateRequired(address) !== '' &&
      validateCity(city) !== '' &&
      validateZipCode(zipCode) !== '' &&
      validateState(state) !== '' &&
      validatePhone(phone) !== '' &&
      selectedShippingMethod.trim() !== ''
    )
  }

  const handleContinueToStepTwo = () => {
    if (isStepOneValid()) {
      setCurrentStep(2)
    }
  }

  const handleContinueToStepThree = () => {
    if (isStepTwoComplete()) {
      setCurrentStep(3)
    }
  }

  const handleCompletePayment = () => {
    console.log('Payment completed!')
    setCurrentStep(4)
  }

  const getButtonText = (step: number): string => {
    switch (step) {
      case 1:
        return 'Continue to shipping'
      case 2:
        return 'Continue to payment'
      case 3:
        return 'Complete payment'
      default:
        return 'Continue'
    }
  }

  return (
    <WrapperContainer>
      {currentStep !== 4 && (
        <CheckoutLeftContainer>
          <CheckoutLeftContainerContent>
            <CheckoutForm
              email={email}
              fullName={fullName}
              address={address}
              city={city}
              zipCode={zipCode}
              state={state}
              phone={phone}
              selectedShippingMethod={selectedShippingMethod}
              deliveryTime={deliveryTime}
              currentStep={currentStep}
              isStepTwoComplete={isStepTwoComplete()}
              onEmailChange={handleEmailChange}
              onFullNameChange={handleFullNameChange}
              onAddressChange={handleAddressChange}
              onCityChange={handleCityChange}
              onZipCodeChange={handleZipCodeChange}
              onStateChange={handleStateChange}
              onPhoneChange={handlePhoneChange}
              onSelectShippingMethod={handleSelectShippingMethod}
              selectedPaymentMethod={selectedPaymentMethod}
              onSelectPaymentMethod={handleSelectPaymentMethod}
            />
            <ContinueToPaymentContainer>
              <MainButton
                backgroundColor={colors.LIGHT_GREEN_500}
                textColor={colors.WHITE_25}
                onClick={
                  currentStep === 1
                    ? handleContinueToStepTwo
                    : currentStep === 2
                      ? handleContinueToStepThree
                      : handleCompletePayment
                }
                disabled={(currentStep === 1 && !isStepOneValid()) || (currentStep === 2 && !isStepTwoComplete())}
              >
                {getButtonText(currentStep)}
              </MainButton>
              <ContinueToPaymentText>
                By completing your purchase, you consent to our collection and use of your information as described in
                this policy. If you have any questions or concerns about our privacy practices, please contact our
                customer service team.
              </ContinueToPaymentText>
            </ContinueToPaymentContainer>
          </CheckoutLeftContainerContent>
        </CheckoutLeftContainer>
      )}

      {currentStep !== 4 && (
        <RightContainer>
          <RightContainerContent>
            <ProductList products={products} />
            <Subtotal total={total} shippingCost={shippingCost} />
            <HassleFreeReturns />
          </RightContainerContent>
        </RightContainer>
      )}

      {currentStep === 4 && (
        <FinalContainer variants={containerVariants} initial='hidden' animate='visible'>
          <FinalContainerContent>
            <ThankYouText variants={textVariants}>Thank You</ThankYouText>
            <FCCMainSection>
              <FCCTitle variants={textVariants}>
                {`Your order is paid successfully and being delivered within ${deliveryTime}`}
              </FCCTitle>
              <MainButton
                backgroundColor={colors.LIGHT_GREEN_500}
                textColor={colors.WHITE}
                onClick={() => navigate(routePath.HOME)}
                width={40}
              >
                Continue to payment
              </MainButton>
            </FCCMainSection>
          </FinalContainerContent>
          <ImageContainer path={checkout_final} variants={imageVariants}>
            <div className='image' />
          </ImageContainer>
        </FinalContainer>
      )}
    </WrapperContainer>
  )
}

export default CheckoutContainer
