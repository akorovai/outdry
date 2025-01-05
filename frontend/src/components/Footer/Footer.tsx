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
import { BrandLogo } from '../index.ts';

const Footer: React.FC = (): React.ReactElement => {
    const handleLinkClick = (linkName: string) => {
        console.log(`Clicked on: ${linkName}`);
    };


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <FooterWrapper
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <BrandSection variants={childVariants}>
                <BrandLogo />
                <Text size={12} weight={400} lineHeight={18}>
                    Copyright © 2024 Outdry Templates | All Rights Reserved
                </Text>
            </BrandSection>
            <LinksSection variants={childVariants}>
                <LinksContainer>
                    <LinkGroup variants={childVariants}>
                        <SectionTitle>About</SectionTitle>
                        <LinkList>
                            <SectionLink
                                onClick={() => handleLinkClick('Shipping & Return')}
                                whileHover={{ scale: 1.05 }} // Add hover animation
                            >
                                Shipping & Return
                            </SectionLink>
                            <SectionLink
                                onClick={() => handleLinkClick('Privacy Policy')}
                                whileHover={{ scale: 1.05 }}
                            >
                                Privacy Policy
                            </SectionLink>
                            <SectionLink
                                onClick={() => handleLinkClick('Terms of Service')}
                                whileHover={{ scale: 1.05 }}
                            >
                                Terms of Service
                            </SectionLink>
                        </LinkList>
                    </LinkGroup>
                    <LinkGroup variants={childVariants}>
                        <SectionTitle>Info</SectionTitle>
                        <LinkList>
                            <SectionLink
                                onClick={() => handleLinkClick('Ambassador Program')}
                                whileHover={{ scale: 1.05 }}
                            >
                                Ambassador Program
                            </SectionLink>
                            <SectionLink
                                onClick={() => handleLinkClick('Discounts')}
                                whileHover={{ scale: 1.05 }}
                            >
                                Discounts
                            </SectionLink>
                            <SectionLink
                                onClick={() => handleLinkClick('Help Center')}
                                whileHover={{ scale: 1.05 }}
                            >
                                Help Center
                            </SectionLink>
                            <SectionLink
                                onClick={() => handleLinkClick('Contact Us')}
                                whileHover={{ scale: 1.05 }}
                            >
                                Contact Us
                            </SectionLink>
                        </LinkList>
                    </LinkGroup>
                </LinksContainer>
            </LinksSection>
        </FooterWrapper>
    );
};

export default Footer;