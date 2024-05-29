"use client"

import { useEffect } from "react";

const BookingsPage = () => {
	
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
			.then((data) => console.log(data))
			.catch((err) => console.log(err));
		
	}, []);

	return (
		<div className="reviews-container">
			<div className="reviews-content">Reviews Page</div>
		</div>
	);
};

export default BookingsPage;
