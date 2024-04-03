"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import NavModal from "./NavModal";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const NavBar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const modalRef = useRef(null); // Add a ref to your modal

	useGSAP(() => {
		// Initial setup for the modal - hidden by default
		gsap.set(modalRef.current, { autoAlpha: 0 });

		// Toggle menuOpen state
	}, []);

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
	}, [menuOpen]);

	return (
		<>
			<section className="mobile-nav-container">
				<div className="mobile-nav-logo">
					<Image
						className="object-contain"
						src="/images/f1c-logo.png"
						alt="F1rst Class Events"
						fill
					/>
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
			<NavModal ref={modalRef} />
		</>
	);
};

export default NavBar;
