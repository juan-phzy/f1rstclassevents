"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

import { IoIosMenu, IoMdClose } from "react-icons/io";
import NavModal from "./NavModal";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const NavBar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [isMounted, setIsMounted] = useState(false); // New state to track mounting

	const modalRef = useRef(null); // Add a ref to your modal

	useEffect(() => {
		setIsMounted(true); // Set isMounted to true when component mounts
	}, []);

	useGSAP(() => {
		// Initial setup for the modal - hidden by default
		gsap.set(modalRef.current, { autoAlpha: 0 });

		gsap.to(".nav-container", {
			autoAlpha: 0,
			duration: 0.5,
			scrollTrigger: {
				trigger: ".nav-container", // Reference the regular NavBar's class
				start: "bottom top", // Start the animation when the bottom of the NavBar hits the top of the viewport
				toggleActions: "play none reverse reset",
				//markers: false,
				scrub: 1,
			},
		});
	}, [isMounted]);

	useGSAP(() => {
		if (menuOpen) {
			gsap.to(modalRef.current, { autoAlpha: 1, duration: 0.5 });
		} else {
			gsap.to(modalRef.current, { autoAlpha: 0, duration: 0.5 });
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
		return (
			<section className="nav-container">
				<div className="w-full h-[80px]"></div>
			</section>
		); // Return null while component has not mounted
	}

	return (
		<>
			<section id="mainnav" className="nav-container">
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
					{/* <a href="#mainnav">HOME</a>
					<a href="#services">SERVICES</a>
					<a href="#events">EVENTS</a>
					<a href="#team">TEAM</a>
					<a href="#bookings">INTEREST</a>
					<a href="#reviews">REVIEWS</a>
					<a href="#reviews">GALLERY</a>
					<a href="#contact">CONTACT</a> */}
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
			<NavModal ref={modalRef} open={menuOpen} toggle={setMenuOpen} />
		</>
	);
};

export default NavBar;
