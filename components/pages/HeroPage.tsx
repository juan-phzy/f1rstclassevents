"use client";
import Image from "next/image";

const HeroPage = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
          <div className="hero-image">
            <Image
              loading="eager"
              className="object-contain"
              src="/images/f1c-logo.png"
              alt="F1rst Class Events"
              fill
            />
          </div>
          <div className="hero-text">
            Bringing Your Illusions to Reality
          </div>
      </div>
    </section>
  );
};

export default HeroPage;
