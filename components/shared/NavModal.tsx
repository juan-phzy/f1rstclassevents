import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { forwardRef, Ref, useState } from "react";

const NavModal = forwardRef<HTMLDivElement, { open: boolean }>((props, ref) => {
	const [menuOpen, setMenuOpen] = useState(props.open);

	return (
		<section ref={ref as Ref<HTMLDivElement>} className="mobile-nav-modal">
			<button>Home</button>
			<button>Services</button>
			<button>Our Team</button>
			<button>Schedule</button>
			<button>Gallery</button>
		</section>
	);
});

NavModal.displayName = "NavModal";

export default NavModal;
