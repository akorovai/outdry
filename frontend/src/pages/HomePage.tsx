import React from 'react';
import styled from 'styled-components';
import {HeroSection, Footer, StoreWideSection, PromotionsSection} from '../components';
import Navbar from '../components/Navbar/Navbar.tsx';

const HomePageContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
`;

const HomePage: React.FC = (): React.ReactElement => {
    return (
        <HomePageContainer>
            <Navbar />
            <HeroSection />
            <PromotionsSection/>
            <StoreWideSection/>
            <Footer />
        </HomePageContainer>
    );
};

export default HomePage;