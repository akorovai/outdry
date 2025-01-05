import React from 'react';
import { motion } from 'framer-motion';
import { Footer, Navbar, Promotions } from '../../components';
import { HeroSection, PromotionsSection } from '../../containers';
import { ColorfulTitleText, MainTitleText, PageContainer } from './HomePage.styled';

const HomePage: React.FC = (): React.ReactElement => {
    return (
        <PageContainer>
            <Navbar />
            <HeroSection />
            <PromotionsSection />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
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
            </motion.div>
            <Footer />
        </PageContainer>
    );
};

export default HomePage;