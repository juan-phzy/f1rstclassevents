import Image from "next/image";
import ServiceCard from "../cards/ServiceCard";

const Services = () => {
	return (
		<section className="services-container">
			<Image
				className="object-cover absolute top-0 left-0 z-0"
				src="/images/sample-image.jpg"
				alt="services image"
				fill
			/>
			<div className="services-bg z-10"></div>
			<div className="services-content z-20">
				<div className="services-header">
					<div className="services-title">Services</div>
					<div className="services-list">List</div>
				</div>
				<div className="services-card">
					<ServiceCard />
				</div>
			</div>
		</section>
	);
};

export default Services;
