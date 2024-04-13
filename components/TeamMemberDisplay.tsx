"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TeamMemberDisplay = () => {
	const joe = useRef(null);

	useGSAP(() => {
		gsap.to(joe.current, {
			x: 100,
			duration: 1,
			scrollTrigger: {
				trigger: ".team-container", // Reference the regular NavBar's class
				start: "top top", // Start the animation when the bottom of the NavBar hits the top of the viewport
				end: "+=2000px",
				toggleActions: "play reverse play reverse",
				scrub: 1,
				markers: true,
				pin: ".team-container",
				pinSpacing: true,
			},
		});
	}, []);

	return (
		<div className="team-display-container">
			<div className="member-name-container">
				<div className="member-name" ref={joe}>
					Joe
				</div>
				<div className="member-name">Sriv</div>
				<div className="member-name">Jane</div>
			</div>
			<div className="member-description">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua.
			</div>
		</div>
	);
};

export default TeamMemberDisplay;
