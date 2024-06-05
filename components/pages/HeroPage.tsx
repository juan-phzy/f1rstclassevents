"use client";
import Spline from "@splinetool/react-spline/next";

const HeroPage = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-3d">
        <Spline scene="https://prod.spline.design/REygNwz3qKiVvlAK/scene.splinecode" />
      </div>
      <div className="hero-content">
        <div className="hero-title">
          <span>Welcome to</span>
          <span className="text-5xl lg:text-6xl py-2">F1rst Class Events</span>
          <span className="mt-2 text-left text-2xl hidden md:block">
            Book Your Next Big Event & Let&apos;s Party!
          </span>
        </div>

        <div className="hero-text md:hidden">
          <span>Book Your Next Big Event & Let&apos;s Party!</span>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
