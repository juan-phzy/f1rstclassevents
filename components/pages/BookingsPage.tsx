"use client"
import React from "react";

const BookingsPage = () => {
  return (
    <div id="bookings" className="booking-container">
      <div className="booking-content">
        <iframe
					className="bg-white rounded-2xl"
					title="BookingForm"
          src="https://docs.google.com/forms/d/e/1FAIpQLSdxCPGxLEsPOYwLj8Sr939359cYnTg4Pk-dL-ENwKsT8bAQZQ/viewform?embedded=true"
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
