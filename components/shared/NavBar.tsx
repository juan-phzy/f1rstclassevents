"use client";

import Image from "next/image";
import { useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import NavModal from "./NavModal";

const NavBar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

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
			<NavModal />
		</>
	);
};

export default NavBar;
