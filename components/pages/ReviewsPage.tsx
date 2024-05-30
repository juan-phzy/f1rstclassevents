"use client"

import { useEffect, useState } from "react";

const BookingsPage = () => {
	const [reviews, setReviews] = useState([]);
	useEffect(() => {

		const getReviews = async () => {
			const key = process.env.NEXT_PUBLIC_GOOGLE_API;
			console.log("key",key);
			const response = await fetch(
				`https://corsproxy.io/?https://maps.googleapis.com/maps/api/place/details/json
				?fields=review
				&place_id=ChIJA-I9nwDHw4kREBF8z-GLyow
				&key=${process.env.NEXT_PUBLIC_GOOGLE_API}`
			);
			if (!response.ok) {
				throw new Error("Failed to fetch reviews");
			}
			return response.json();
		};
		const res = getReviews();
		res
			.then((data) => {console.log(data); setReviews(data.result.reviews);})
			.catch((err) => console.log(err));
		
	}, []);

	return (
		<div className="reviews-container">
			<div className="reviews-content">
			{reviews.map((review: any, index: number) => (
                <div key={index} className="review-card">
                    <div className="review-header">
                        <img width={30} height={30} src={review.profile_photo_url} alt={`${review.author_name}'s profile`} />
                        <div>
                            <a href={review.author_url} target="_blank" rel="noopener noreferrer">
                                {review.author_name}
                            </a>
                            <p>{review.relative_time_description}</p>
                        </div>
                    </div>
                    <div className="review-body">
                        <p>{review.text}</p>
                        <p>Rating: {review.rating}</p>
                    </div>
                </div>
            ))}
			</div>
		</div>
	);
};

export default BookingsPage;
