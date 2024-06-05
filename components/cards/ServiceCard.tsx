"use client";

import { servicesArray, servicesObj } from "@/constants";
import Image from "next/image";

interface Props {
	serv: string;

}

const ServiceCard = ({serv}:Props) => {
  return (
    <section className="servcard-container">
      <div className="servcard-title">{servicesObj[serv].title}</div>
      <div className="servcard-image">
		<Image
			className="object-cover"
			src={`/services/${serv}.jpg`}
			alt="services image"
			fill
		/>
	  </div>
      <div className="servcard-footer">
        <div className="servcard-desc">
		{servicesObj[serv].desc}
        </div>
        <div className="servcard-btns">
          {servicesArray.map((service, index) => (
            <div key={service} className="progress-line"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
