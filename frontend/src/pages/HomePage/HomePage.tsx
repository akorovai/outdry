import React from 'react'
import { Footer, Navbar, Promotions } from '@/components'
import { HeroSection, PromotionsSection } from '@/containers'
import { ColorfulTitleText, MainTitleText, PageContainer } from './HomePage.styled'

const HomePage: React.FC = (): React.ReactElement => {
  return (
    <PageContainer>
      <Navbar />
      <HeroSection />
      <PromotionsSection />

      <Promotions isOnSale={true}>
        <MainTitleText
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Storewide
        </MainTitleText>
        <ColorfulTitleText
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          20% Off
        </ColorfulTitleText>
        <MainTitleText
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Men, Women & Kids
        </MainTitleText>
      </Promotions>

      <Footer />
    </PageContainer>
  )
}

export default HomePage
