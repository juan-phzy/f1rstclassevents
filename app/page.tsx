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
			<Services />
			<TeamPage />
			<BookingsPage />
			<ReviewsPage />
		</main>
	);
}
