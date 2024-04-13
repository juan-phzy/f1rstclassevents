import Image from "next/image";
import ServiceCard from "../cards/ServiceCard";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Services = () => {
	return (
		<section className="services-container">
			{/* <Image
				className="object-cover absolute top-0 left-0 z-0"
				src="/images/sample-image.jpg"
				alt="services image"
				fill
			/> */}

			<div className="services-bg z-10"></div>

			<div className="services-content z-20">
				<div className="services-header">Services</div>
				<div className="services-card">
					<div className="services-grid">
						<div className="sgrid-item">Weddings</div>
						<div className="sgrid-item">Birthdays</div>
						<div className="sgrid-item">Nightlife</div>
						<div className="sgrid-item">Corporate</div>
						<div className="sgrid-item">DJ Mixing</div>
						<div className="sgrid-item">MC Hosting</div>
						<div className="sgrid-item">Pro Audio</div>
					</div>

					<button className="services-arrow">
						<BsChevronLeft className="w-full h-full" />
					</button>

					<ServiceCard />

					<button className="services-arrow">
						<BsChevronRight className="w-full h-full" />
					</button>
				</div>
			</div>
		</section>
	);
};

export default Services;
