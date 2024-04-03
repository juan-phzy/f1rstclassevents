import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { forwardRef, Ref } from "react";

const NavModal = forwardRef<HTMLDivElement, {}>((props, ref) => {
	useGSAP(() => {
		gsap.fromTo(
			".mobile-nav-modal",
			{ autoAlpha: 0 },
			{ autoAlpha: 1, duration: 0.5 }
		);
	}, []);

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
