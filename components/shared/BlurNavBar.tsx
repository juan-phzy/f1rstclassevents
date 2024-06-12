"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

import { IoIosMenu, IoMdClose } from "react-icons/io";
import NavModal from "./NavModal";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BlurNavBar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [isMounted, setIsMounted] = useState(false); // New state to track mounting

	const blurmodalRef = useRef(null);
	const blurNavRef = useRef(null);

	useEffect(() => {
		setIsMounted(true); // Set isMounted to true when component mounts
	}, []);

	useGSAP(() => {
		if (!isMounted) return;
		// Initial setup for the modal - hidden by default
		gsap.set(blurmodalRef.current, { autoAlpha: 0 });
		gsap.set(blurNavRef.current, { y: -100, autoAlpha: 0 });

		gsap.to(blurNavRef.current, {
			autoAlpha: 1,
			y: 0,
			duration: 1,
			scrollTrigger: {
				trigger: ".nav-container", // Reference the regular NavBar's class
				start: "bottom top", // Start the animation when the bottom of the NavBar hits the top of the viewport
				toggleActions: "play none reverse reset",
				scrub: 1,
				markers: false,
			},
		});
	}, [isMounted]);

	useGSAP(() => {
		if (!isMounted) return;

		if (menuOpen) {
			gsap.to(blurmodalRef.current, { autoAlpha: 1, duration: 0.5 });
		} else {
			gsap.to(blurmodalRef.current, { autoAlpha: 0, duration: 0.5 });
		}
		// Animation for menu open/close icon
		gsap.to(".mobile-menu-open", {
			rotation: menuOpen ? 180 : 0,
			duration: 0.5,
		});
		gsap.to(".mobile-menu-close", {
			rotation: menuOpen ? 360 : 180,
			duration: 0.5,
			autoAlpha: menuOpen ? 1 : 0,
		});
	}, [menuOpen, isMounted]);

	if (!isMounted) {
		return null; // Return null while component has not mounted
	}

	return (
		<>
			<section ref={blurNavRef} className="blur-nav-container">
				<div className="nav-logo">
					<Image
						loading="eager"
						className="object-contain"
						src="/images/f1c-logo.png"
						alt="F1rst Class Events"
						fill
					/>
				</div>

				<div className="nav-link-container ">
					<a href="#mainnav">Home</a>
					<a href="#services">Services</a>
					<a href="#team">Team</a>
					<a href="#bookings">Book</a>
					<a href="#reviews">Gallery</a>
				</div>

				<button
					className="mobile-nav-menu-container"
					onClick={() => setMenuOpen(!menuOpen)}
				>
					<IoIosMenu
						className={`mobile-menu-open ${menuOpen && `hidden`}`}
						size={35}
					/>
					<IoMdClose
						className={`mobile-menu-close ${!menuOpen && `hidden`}`}
						size={35}
					/>
				</button>
			</section>
			<NavModal ref={blurmodalRef} open={menuOpen} />
		</>
	);
};

export default BlurNavBar;
