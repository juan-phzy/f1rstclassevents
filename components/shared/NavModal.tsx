"use client";
import { forwardRef, Ref } from "react";

const NavModal = forwardRef<HTMLDivElement, { open: boolean, toggle: (open: boolean) => void }>(({ open, toggle }, ref) => {

	return (
		<section ref={ref as Ref<HTMLDivElement>} className="mobile-nav-modal">
			<a href="#mainnav" onClick={() => toggle(!open)}>Home</a>
			<a href="#services" onClick={() => toggle(!open)}>Services</a>
			<a href="#team" onClick={() => toggle(!open)}>Team</a>
			<a href="#bookings" onClick={() => toggle(!open)}>Book</a>
			<a href="#reviews" onClick={() => toggle(!open)}>Gallery</a>
		</section>
	);
});

NavModal.displayName = "NavModal";

export default NavModal;
