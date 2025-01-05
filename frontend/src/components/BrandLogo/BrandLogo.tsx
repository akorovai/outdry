import React from 'react';
import { motion } from 'framer-motion';
import SVG from '../SVG/SVG.tsx';
import { BrandLogoContainer, BrandText } from './BrandLogo.styled.ts';
import { colors } from '../../consts';

interface IBrandLogoProps {
    onClick?: () => void;
    to?: string;
}

const BrandLogo: React.FC<IBrandLogoProps> = ({ onClick, to = '/' }): React.ReactElement => {
    return (
        <BrandLogoContainer
            to={to}
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            <motion.div  transition={{ duration: 1 }}>
                <SVG.Logo color={colors.WHITE} />
            </motion.div>
            <BrandText>Outdry</BrandText>
        </BrandLogoContainer>
    );
};

export default BrandLogo;