"use client";

import BookingsPage from "@/components/pages/BookingsPage";
import HeroPage from "@/components/pages/HeroPage";
import Services from "@/components/pages/Services";
import TeamPage from "@/components/pages/TeamPage";
import BlurNavBar from "@/components/shared/BlurNavBar";
import NavBar from "@/components/shared/NavBar";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import ReviewsPage from "@/components/pages/ReviewsPage";
import Footer from "@/components/pages/Footer";
import { eventsArray, eventsObj, servicesArray, servicesObj } from "@/constants";


export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <main className="main-container">
      
      <BlurNavBar />
      <NavBar />
      <HeroPage />
      <Services title="Services" sArray={servicesArray} sObj={servicesObj} />
      <Services title="Events" sArray={eventsArray} sObj={eventsObj} />
      <TeamPage />
      <BookingsPage />
      <ReviewsPage />
      <Footer />
    </main>
  );
}
