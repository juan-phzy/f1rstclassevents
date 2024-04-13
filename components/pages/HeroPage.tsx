import React from "react";

const HeroPage = () => {
	return (
		<section className="hero-container">
			<div className="hero-title">
				<span>Welcome to</span>
				<span>F1rst Class Events</span>
				<span className="mt-2 text-left text-2xl hidden md:block">
					Book Your Next Big Event & Let&apos;s Party!
				</span>
			</div>
			<div className="hero-3d">3d Animation Goes Here</div>
			<div className="hero-text md:hidden">
				<span>Book Your Next</span>{" "}
				<span>Big Event & Let&apos;s Party!</span>
			</div>
		</section>
	);
};

export default HeroPage;
