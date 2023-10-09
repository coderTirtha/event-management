import { useEffect, useState } from "react";
import CustomerReview from "./CustomerReview";

const CustomersReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('/reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="my-8">
            <div className="space-y-3">
                <h1 className="text-5xl font-font-roboto font-bold text-center">Happy Customers!</h1>
                <p className="max-w-xl mx-auto text-center text-gray-500">Discover the experiences of our valued attendees in their own words. Read their reviews and ratings to see why our events are truly unforgettable!</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        reviews.map(review => <CustomerReview key={review.name} review={review}></CustomerReview>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CustomersReviews;