"use client";

import Image from "next/image";
import ServiceCard from "../cards/ServiceCard";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState } from "react";
import { servicesArray, servicesObj } from "@/constants";

const Services = () => {
  const [chosenService, setChosenService] = useState("dj");

  const goLeft = () => {
    const index = servicesArray.indexOf(chosenService);
    if (index === 0) {
      setChosenService(servicesArray[servicesArray.length - 1]);
    } else {
      setChosenService(servicesArray[index - 1]);
    }
  };

  const goRight = () => {
    const index = servicesArray.indexOf(chosenService);
    if (index === servicesArray.length - 1) {
      setChosenService(servicesArray[0]);
    } else {
      setChosenService(servicesArray[index + 1]);
    }
  };

  return (
    <section id="services" className="services-container">
      <Image
        loading="eager"
        className="object-cover absolute top-0 left-0 z-0"
        src={`/services/${chosenService}.jpg`}
        alt={`${chosenService} service`}
        fill
      />

      <div className="services-bg z-10"></div>

      <div className="services-content z-20">
        <div className="services-header">Services</div>
        <div className="services-card">
          <div className="services-grid">
            {servicesArray.map((service: string) => {
              return (
                <button
                  key={service}
                  onClick={() => setChosenService(service)}
                  className={`hover:bg-white/25 sgrid-item ${
                    service === chosenService && "text-white bg-white/30"
                  }`}
                >
                  {servicesObj[service].title}
                </button>
              );
            })}
          </div>

          <button onClick={goLeft} className="services-arrow">
            <BsChevronLeft className="w-full h-full" />
          </button>

          <ServiceCard serv={chosenService} />

          <button onClick={goRight} className="services-arrow">
            <BsChevronRight className="w-full h-full" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
