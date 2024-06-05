"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  IoIosStar,
  IoIosStarHalf,
  IoIosStarOutline,
} from "react-icons/io";

const BookingsPage = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getReviews = async () => {
      const key = process.env.NEXT_PUBLIC_GOOGLE_API;
      console.log("key", key);
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
      .then((data) => {
        console.log(data);
        setReviews(data.result.reviews);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="reviews-container">
      <div className="reviews-content">
        <div className="reviews-title">Reviews & Gallery</div>

        <div className="reviews-card-container">
          {reviews.map((review: any) => {
            const fullStars = review.rating ? Math.floor(review.rating) : 0; // Number of full stars
            const halfStar = review.rating
              ? review.rating % 1 >= 0.5
                ? 1
                : 0
              : 0; // Is there a half star?
            const emptyStars = 5 - fullStars - halfStar; // Remaining stars are empty

            return (
              <div key={review.author_url} className="review-card">
                <div className="review-header">
                  <Image
                    src={review.profile_photo_url}
                    alt={`${review.author_name}'s profile`}
                    width={35}
                    height={35}
                  />
                  <div>
                    <a
                      href={review.author_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {review.author_name}
                    </a>
                    <p>{review.relative_time_description}</p>
                  </div>
                </div>

                <div className="review-stars">
                  {Array.from({ length: fullStars }, (_, i) => (
                    <IoIosStar key={i} className="text-amber-400" size={15} />
                  ))}
                  {halfStar === 1 && (
                    <IoIosStarHalf className="text-amber-400" size={15} />
                  )}
                  {Array.from({ length: emptyStars }, (_, i) => (
                    <IoIosStarOutline
                      key={i}
                      className="text-amber-400"
                      size={15}
                    />
                  ))}
                </div>

                <div className="review-body">
                  <p>{review.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BookingsPage;
