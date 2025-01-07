import React from 'react';
import { RatingSummary } from './RatingSummary';
import { ReviewsSection } from './ReviewsSection';
import { ComponentContainer } from './styles';
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Stagger the animation of children by 0.2 seconds
        },
    },
};
const CustomerReviews: React.FC = () => {
    const reviews = [
        { title: 'Ideal for dog walkers', author: 'Ivan Z.', date: '7 months ago', message: '...', rating: 5 },
        { title: 'Great for hiking', author: 'Anna K.', date: '5 months ago', message: '...', rating: 4 },
        { title: 'Comfortable and durable', author: 'John D.', date: '3 months ago', message: '...', rating: 5 },
    ];


    const totalReviews = reviews.length;


    const averageRating = parseFloat(
        (reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews).toFixed(1)
    );


    const starRatings = [5, 4, 3, 2, 1].map((stars) => {
        const count = reviews.filter((review) => review.rating === stars).length;
        const percentage = parseFloat(((count / totalReviews) * 100).toFixed(1));
        return { stars, percentage };
    });


    const percentageOfReviewers = starRatings.find((rating) => rating.stars === 5)?.percentage || 0;

    return (
        <ComponentContainer
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <RatingSummary
                averageRating={averageRating}
                totalReviews={totalReviews}
                starRatings={starRatings}
                percentageOfReviewers={percentageOfReviewers}
            />
            <ReviewsSection reviews={reviews} />
        </ComponentContainer>
    );
};

export default CustomerReviews;