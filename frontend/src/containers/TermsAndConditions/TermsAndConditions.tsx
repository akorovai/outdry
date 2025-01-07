import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { colors, fonts } from '../../consts'
import { Breadcrumb } from '../../components'
import term1 from '../../assets/images/terms_1.png'
import term2 from '../../assets/images/terms_2.png'
import term3 from '../../assets/images/terms_3.png'
import term4 from '../../assets/images/terms_4.png'
import term5 from '../../assets/images/terms_5.png'
import term6 from '../../assets/images/terms_6.png'
import term7 from '../../assets/images/terms_7.png'
import term8 from '../../assets/images/terms_8.png'
import term9 from '../../assets/images/terms_9.png'
import term10 from '../../assets/images/terms_10.png'
import term11 from '../../assets/images/terms_11.png'
import term12 from '../../assets/images/terms_12.png'

const ContainerHeader = styled(motion.div)`
  display: flex;
  padding: 3.125rem 5rem;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  background: ${colors.LIGHT_GREEN_100};
`

const HeaderText = styled(motion.p)`
  color: ${colors.BLACK};
  font-family: ${fonts.INTER};
  font-size: 3rem;
  font-style: normal;
  font-weight: 600;
  line-height: 3.75rem;
  letter-spacing: -0.06rem;
`

const ContainerHeaderContent = styled(motion.header)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
`

const TextSection = styled(motion.section)`
  display: flex;
  padding: 3.125rem 5rem;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  align-self: stretch;
  background: ${colors.WHITE};
`

const TextSectionContent = styled(motion.div)`
  display: flex;
  width: 74.75rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.125rem;
`

const JoinSection = styled(motion.div)`
  display: flex;
  padding: 0 5rem 6.25rem 5rem;
  flex-direction: column;
  align-items: center;
  gap: 3.125rem;
  align-self: stretch;
  background: ${colors.WHITE};
`

const JSHeader = styled(motion.span)`
  color: ${colors.BLACK};
  font-family: ${fonts.POPPINS};
  text-align: center;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.75rem; /* 122.222% */
  letter-spacing: -0.045rem;
`

const JSContent = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 100%;
`

const Card = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.LIGHT_GREEN_500};
  height: 20rem;
  overflow: hidden;
  border: none;
  border-radius: 0;
`

const CardImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

interface CardProps {
  imageUrl: string
}

const ReusableCard: React.FC<CardProps> = ({ imageUrl }) => {
  return (
    <Card whileHover={{ scale: 1.01 }} transition={{ type: 'spring', stiffness: 300 }}>
      <CardImage src={imageUrl} alt='Card Image' />
    </Card>
  )
}

const FirstParagraphContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.875rem;
  align-self: stretch;
`

const FirstParagraphHeader = styled(motion.span)`
  color: ${colors.BLACK};
  font-family: ${fonts.POPPINS};
  align-self: stretch;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.75rem; /* 122.222% */
  letter-spacing: -0.045rem;
`

const FirstParagraphContent = styled(motion.span)`
  color: ${colors.BLACK};
  align-self: stretch;
  font-family: ${fonts.POPPINS};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 150% */
`

interface FirstParagraphProps {
  header: string
  content: string
}

const FirstParagraph: React.FC<FirstParagraphProps> = ({ header, content }) => {
  return (
    <FirstParagraphContainer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FirstParagraphHeader>{header}</FirstParagraphHeader>
      <FirstParagraphContent>{content}</FirstParagraphContent>
    </FirstParagraphContainer>
  )
}

// Reusable MainParagraph Component with Animation
const MainParagraphContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.875rem;
  align-self: stretch;
`

const MainParagraphHeader = styled(motion.span)`
  color: ${colors.BLACK};
  font-family: ${fonts.POPPINS};
  align-self: stretch;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.375rem;
`

const MainParagraphContent = styled(motion.span)`
  color: ${colors.BLACK};
  font-family: ${fonts.POPPINS};
  align-self: stretch;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
`

interface MainParagraphProps {
  header: string
  content: string
}

const MainParagraph: React.FC<MainParagraphProps> = ({ header, content }) => {
  return (
    <MainParagraphContainer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <MainParagraphHeader>{header}</MainParagraphHeader>
      <MainParagraphContent>{content}</MainParagraphContent>
    </MainParagraphContainer>
  )
}

const TermsAndConditions: React.FC = (): React.ReactElement => {
  const imageUrls = [term1, term2, term3, term4, term5, term6, term7, term8, term9, term10, term11, term12]

  return (
    <>
      <ContainerHeader initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <ContainerHeaderContent>
          <Breadcrumb items={['HOME', 'Terms & Conditions of sale']} />
          <HeaderText>Terms & Conditions of Sale</HeaderText>
        </ContainerHeaderContent>
      </ContainerHeader>

      <TextSection initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <TextSectionContent>
          <FirstParagraph
            header='These Terms & Conditions were last updated on May 2023.'
            content='On this page you will find the Terms & Conditions that relate to the conditions of usage and conditions of sale of this website. www.outdry.com (the “Website”) is operated by dryrobe Limited (“dryrobe”). We are registered in England and Wales under company number 08782079 and have our registered office at Unit 4 Velator Way, Braunton, Devon, EX33 2FB. Our VAT number is GB 174 7725 76. The terms “Us”, “We” and “Our” refer to dryrobe. The terms “You” and “Your” refer to users of this Website.'
          />

          <MainParagraph
            header='SECTION 1 – GENERAL'
            content='   1.1 Your use of this Website and/or Your placement of an order confirms Your agreement to these Terms & Conditions. 1.2 We reserve the right at Our discretion to change these Terms & Conditions at any time and continued use of this Website will be construed as Your acceptance of any new terms. If these Terms & Conditions are changed in any way, the date at which they were last updated will be featured at the top of this page. The version published on the Website is the version currently in force. We invite You to periodically read the Terms & Conditions to ensure You are fully informed of any relevant and applicable changes. 1.3 By using this Website, You agree that it is for Your own non-commercial use and that You will not use it to infringe, restrict or abuse the rights of others, or distribute material of an illegal nature including but not restricted to obscene, defamatory, racist, xenophobic, homophobic or other discriminatory or derogatory material or material which by its nature is spam or designed for the promotion of another organisation. 1.4 You will comply with the Terms of Service during Your use of this Website. You undertake that You will not gain or attempt to gain access to Our information technology systems to distribute any form of malicious software designed to affect Our own information technology systems or that of any other Website user. Whilst We have taken the necessary precautions to protect the Website (and dryrobe) from malicious software, We cannot be held responsible should a third party implement any form of malicious software on the Website and the resulting effects this may have on Our users. We reserve the right to withdraw access to the Website at Our discretion if We feel an individual is in breach of Our Terms & Conditions. We may also report to the police where necessary the details of any user who may be criminally liable under the Computer Misuse Act 1990. 1.5 Use of this Website infers Your agreement to observe all relevant intellectual property rights belonging to Us. 1.6 We reserve the right to change or remove any part of this Website or the entire Website itself at any time without notice. We also reserve the right to make the Website unavailable in whole or part at Our discretion without notice.'
          />

          <MainParagraph
            header='SECTION 2 – ORDERING AND PAYMENT'
            content='   2.1 All orders placed through the Website are subject to acceptance by Us. We reserve the right to refuse
              or cancel any order at Our discretion. 2.2 Payment must be made in full at the time of placing an order.
              We accept various payment methods, including credit/debit cards and PayPal. 2.3 Prices are displayed in
              the currency of your region and are inclusive of applicable taxes unless stated otherwise.'
          />

          <MainParagraph
            header='SECTION 3 – SHIPPING AND DELIVERY'
            content='   3.1 We aim to dispatch all orders within 2-3 business days. Delivery times may vary depending on your
              location. 3.2 Shipping costs will be calculated at checkout and are based on the delivery address and
              selected shipping method. 3.3 Risk of loss or damage to the products passes to You upon delivery.'
          />

          <MainParagraph
            header='SECTION 4 – RETURNS AND REFUNDS'
            content='   4.1 If You are not satisfied with Your purchase, You may return it within 30 days of receipt for a full
              refund or exchange. 4.2 To be eligible for a return, the product must be unused and in its original
              packaging. 4.3 Refunds will be processed within 14 days of receiving the returned product.'
          />

          <MainParagraph
            header='SECTION 5 – INTELLECTUAL PROPERTY'
            content='   5.1 All content on this Website, including text, graphics, logos, and images, is the property of dryrobe
              and is protected by intellectual property laws. 5.2 You may not reproduce, distribute, or use any content
              from this Website without Our prior written consent.'
          />

          <MainParagraph
            header='SECTION 6 – LIMITATION OF LIABILITY'
            content='   6.1 To the fullest extent permitted by law, dryrobe shall not be liable for any indirect, incidental, or
              consequential damages arising out of Your use of this Website or the products purchased through it. 6.2
              Our total liability to You for any claim arising from these Terms & Conditions shall not exceed the total
              amount paid by You for the products in question.'
          />

          <MainParagraph
            header='SECTION 7 – GOVERNING LAW'
            content='      7.1 These Terms & Conditions are governed by and construed in accordance with the laws of England and
              Wales. 7.2 Any disputes arising from these Terms & Conditions shall be subject to the exclusive
              jurisdiction of the courts of England and Wales.'
          />
        </TextSectionContent>
      </TextSection>

      <JoinSection
        initial={{ opacity: 0 }} // Initial animation state
        whileInView={{ opacity: 1 }} // Animate when in view
        transition={{ duration: 0.8 }} // Animation duration
      >
        <JSHeader>Join Our Community</JSHeader>
        <JSContent>
          {imageUrls.map((url, index) => (
            <ReusableCard key={index} imageUrl={url} />
          ))}
        </JSContent>
      </JoinSection>
    </>
  )
}

export default TermsAndConditions
