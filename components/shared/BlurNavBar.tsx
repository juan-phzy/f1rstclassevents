"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import NavModal from "./NavModal";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BlurNavBar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const blurmodalRef = useRef(null); // Add a ref to your modal

	const blurNavRef = useRef(null);

	useGSAP(() => {
		// Initial setup for the modal - hidden by default
		gsap.set(blurmodalRef.current, { autoAlpha: 0 });

		const blurNav = blurNavRef.current;
		gsap.from(blurNav, {
			autoAlpha: 0,
			y: -100,
			duration: 1,
			scrollTrigger: {
				trigger: ".nav-container", // Reference the regular NavBar's class
				start: "bottom top", // Start the animation when the bottom of the NavBar hits the top of the viewport
				toggleActions: "play none reverse reset",
				markers: true,
				scrub: 1,
				onUpdate: (self) => {
					console.log("progress:", self.progress.toFixed(3));
				},
			},
		});
	}, []);

	useGSAP(() => {
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
	}, [menuOpen]);

	return (
		<>
			<section ref={blurNavRef} className="blur-nav-container">
				<div className="nav-logo">
					<Image
						className="object-contain"
						src="/images/f1c-logo.png"
						alt="F1rst Class Events"
						fill
					/>
				</div>

				<div className="nav-link-container ">
					<div>Home</div>
					<div>Services</div>
					<div>Team</div>
					<div>Book</div>
					<div>Gallery</div>
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
