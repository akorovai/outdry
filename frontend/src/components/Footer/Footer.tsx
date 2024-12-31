import React from 'react';

import {
    FooterWrapper,
    BrandSection,
    Text,
    LinksSection,
    LinksContainer,
    LinkGroup,
    LinkList,
    SectionTitle,
    SectionLink,
} from './Footer.styles';
import {BrandLogo} from "../index.ts";


const Footer: React.FC = (): React.ReactElement => {
    const handleLinkClick = (linkName: string) => {
        console.log(`Clicked on: ${linkName}`);
      
    };

    return (
        <FooterWrapper>
            <BrandSection>
                <BrandLogo/>
                <Text size={12} weight={400} lineHeight={18}>
                    Copyright © 2024 Outdry Templates | All Rights Reserved
                </Text>
            </BrandSection>
            <LinksSection>
                <LinksContainer>
                    <LinkGroup>
                        <SectionTitle>About</SectionTitle>
                        <LinkList>
                            <SectionLink onClick={() => handleLinkClick('Shipping & Return')}>Shipping & Return</SectionLink>
                            <SectionLink onClick={() => handleLinkClick('Privacy Policy')}>Privacy Policy</SectionLink>
                            <SectionLink onClick={() => handleLinkClick('Terms of Service')}>Terms of Service</SectionLink>
                        </LinkList>
                    </LinkGroup>
                    <LinkGroup>
                        <SectionTitle>Info</SectionTitle>
                        <LinkList>
                            <SectionLink onClick={() => handleLinkClick('Ambassador Program')}>Ambassador Program</SectionLink>
                            <SectionLink onClick={() => handleLinkClick('Discounts')}>Discounts</SectionLink>
                            <SectionLink onClick={() => handleLinkClick('Help Center')}>Help Center</SectionLink>
                            <SectionLink onClick={() => handleLinkClick('Contact Us')}>Contact Us</SectionLink>
                        </LinkList>
                    </LinkGroup>
                </LinksContainer>
            </LinksSection>
        </FooterWrapper>
    );
};

export default Footer;