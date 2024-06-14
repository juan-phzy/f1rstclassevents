"use client"
import React from "react";

const BookingsPage = () => {
  return (
    <div id="bookings" className="booking-container">
      <div className="booking-content">
        <iframe
					className="bg-white rounded-2xl"
					title="BookingForm"
          src="https://docs.google.com/forms/d/e/1FAIpQLSeGdrzlbhS2yO_jSACCceW2M__9gT3iA4ys4d0jy8tNYxbsig/viewform?embedded=true"
          width="85%"
          height="95%"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default BookingsPage;
