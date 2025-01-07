import { ChangeEvent, FC } from 'react'
import { motion } from 'framer-motion'
import { Breadcrumb, CheckoutInput } from '@/components'
import {
  CompleteSecondStepAndNewThirdSection,
  CSSANTSContent,
  FCHeader,
  FCTitle,
  FirstStepContainer,
  FormContainer,
  FSFCTitle,
  FSFormContainer,
  SECInfo,
  SECInfoTime,
  SECInfoTitle,
  SecondStapWithShippingMethodContainer,
  SecondStepContainer,
  SecondStepsResults,
  ShippingContainer,
  ShippingTitle,
  StepsContainer,
  ThirdStepContainer,
} from './CheckoutContainer.styled'
import { ShippingMethod } from './ShippingMethod'
import {
  validateCity,
  validateEmail,
  validatePhone,
  validateRequired,
  validateState,
  validateZipCode,
} from './validators.ts'
import { PaymentMethod } from './PaymentMethod.tsx'

interface CheckoutFormProps {
  email: string
  fullName: string
  address: string
  city: string
  zipCode: string
  state: string
  phone: string
  selectedShippingMethod: string
  deliveryTime: string
  currentStep: number
  isStepTwoComplete: boolean
  onEmailChange: (e: ChangeEvent<HTMLInputElement>) => void
  onFullNameChange: (e: ChangeEvent<HTMLInputElement>) => void
  onAddressChange: (e: ChangeEvent<HTMLInputElement>) => void
  onCityChange: (e: ChangeEvent<HTMLInputElement>) => void
  onZipCodeChange: (e: ChangeEvent<HTMLInputElement>) => void
  onStateChange: (e: ChangeEvent<HTMLInputElement>) => void
  onPhoneChange: (e: ChangeEvent<HTMLInputElement>) => void
  onSelectShippingMethod: (method: string) => void
  selectedPaymentMethod: string
  onSelectPaymentMethod: (method: string) => void
}

export const CheckoutForm: FC<CheckoutFormProps> = ({
  email,
  fullName,
  address,
  city,
  zipCode,
  state,
  phone,
  selectedShippingMethod,
  currentStep,
  isStepTwoComplete,
  onEmailChange,
  onFullNameChange,
  onAddressChange,
  onCityChange,
  onZipCodeChange,
  onStateChange,
  onPhoneChange,
  onSelectShippingMethod,
  deliveryTime,
  selectedPaymentMethod,
  onSelectPaymentMethod,
}) => {
  return (
    <FormContainer>
      <FCHeader>
        <Breadcrumb items={['Step 1', 'Step 2', 'Step 3', 'Step 4']} activeIndex={currentStep - 1} />
        <FCTitle>Checkout</FCTitle>
      </FCHeader>

      <StepsContainer>
        <FirstStepContainer>
          <FSFormContainer>
            <FSFCTitle>1. Enter your email</FSFCTitle>
            <CheckoutInput
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={onEmailChange}
              validator={validateEmail}
              disabled={currentStep !== 1}
            />
          </FSFormContainer>
        </FirstStepContainer>

        {currentStep === 2 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <SecondStapWithShippingMethodContainer>
              <SecondStepContainer>
                <FSFCTitle>2. Shipping details</FSFCTitle>
                <FSFormContainer>
                  <CheckoutInput
                    type='text'
                    placeholder='Full Name'
                    value={fullName}
                    onChange={onFullNameChange}
                    validator={validateRequired}
                  />
                  <CheckoutInput
                    type='text'
                    placeholder='Address'
                    value={address}
                    onChange={onAddressChange}
                    validator={validateRequired}
                  />
                  <CheckoutInput
                    type='text'
                    placeholder='City'
                    value={city}
                    onChange={onCityChange}
                    validator={validateCity}
                  />
                  <CheckoutInput
                    type='text'
                    placeholder='Zip Code'
                    value={zipCode}
                    onChange={onZipCodeChange}
                    validator={validateZipCode}
                  />
                  <CheckoutInput
                    type='text'
                    placeholder='State'
                    value={state}
                    onChange={onStateChange}
                    validator={validateState}
                  />
                  <CheckoutInput
                    type='text'
                    placeholder='Phone Number'
                    value={phone}
                    onChange={onPhoneChange}
                    validator={validatePhone}
                  />
                </FSFormContainer>
              </SecondStepContainer>

              {isStepTwoComplete && (
                <ShippingContainer>
                  <ShippingTitle>Shipping method</ShippingTitle>
                  <ShippingMethod
                    selectedShippingMethod={selectedShippingMethod}
                    onSelectShippingMethod={onSelectShippingMethod}
                  />
                </ShippingContainer>
              )}
            </SecondStapWithShippingMethodContainer>
          </motion.div>
        )}

        {currentStep >= 3 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <CompleteSecondStepAndNewThirdSection>
              <FSFCTitle>2. Shipping details</FSFCTitle>
              <CSSANTSContent>
                <SecondStepsResults>
                  <h1>{fullName}</h1>
                  <h3>{`Address: ${address}, City: ${city}, State: ${state}, ZIP Code: ${zipCode}, Phone: ${phone}`}</h3>
                </SecondStepsResults>
                <SECInfo>
                  <SECInfoTitle>{selectedShippingMethod}</SECInfoTitle>
                  <SECInfoTime>{deliveryTime}</SECInfoTime>
                </SECInfo>
              </CSSANTSContent>
              <ThirdStepContainer>
                <FSFCTitle>3. Payment</FSFCTitle>
                <PaymentMethod
                  selectedPaymentMethod={selectedPaymentMethod}
                  onSelectPaymentMethod={onSelectPaymentMethod}
                />
              </ThirdStepContainer>
            </CompleteSecondStepAndNewThirdSection>
          </motion.div>
        )}
      </StepsContainer>
    </FormContainer>
  )
}
