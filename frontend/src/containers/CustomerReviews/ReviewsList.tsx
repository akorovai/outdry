import React from 'react';
import {ReviewItem} from './ReviewItem';

import {ReviewsListContainer} from "./styles.ts";


interface ReviewsListProps {
    reviews: {
        title: string; author: string; date: string; message: string; rating: number;
    }[];
}

const containerVariants = {
    hidden: {opacity: 0}, visible: {
        opacity: 1, transition: {
            staggerChildren: 0.2,
        },
    },
};



export const ReviewsList: React.FC<ReviewsListProps> = ({reviews}) => {
    return (<ReviewsListContainer
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {reviews.map((review, index) => (<ReviewItem key={index} {...review} />))}

        </ReviewsListContainer>);
};