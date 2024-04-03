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
				<div className="services-header">
					<div className="services-title">Services</div>
				</div>
				<div className="services-card">
					<BsChevronLeft size={60} />
					<ServiceCard />
					<BsChevronRight size={60} />
				</div>
			</div>
		</section>
	);
};

export default Services;
