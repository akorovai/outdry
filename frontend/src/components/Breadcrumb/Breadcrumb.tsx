import React from 'react';

import { SVG } from '../index.ts';
import { BreadcrumbContainer, BreadcrumbText } from './Breadcrumb.styled.ts';
import {colors} from "../../consts";

interface BreadcrumbProps {
    items?: string[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items = [] }) => {
    if (items.length === 0) {
        return null;
    }

    return (
        <BreadcrumbContainer
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <BreadcrumbText
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {item}
                    </BreadcrumbText>
                    {index < items.length - 1 && <SVG.Arrow color={colors.BLACK} />}
                </React.Fragment>
            ))}
        </BreadcrumbContainer>
    );
};

export default Breadcrumb;