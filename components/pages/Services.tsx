"use client";

import Image from "next/image";
import ServiceCard from "../cards/ServiceCard";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState } from "react";


interface Props {
  title: string;
  sArray: string[];
  sObj: { [key: string]: { title: string; desc: string } };
}

const Services = ({sArray,sObj, title}:Props) => {
  const initialService = sArray[0];
  const [chosenService, setChosenService] = useState(initialService);

  const goLeft = () => {
    const index = sArray.indexOf(chosenService);
    if (index === 0) {
      setChosenService(sArray[sArray.length - 1]);
    } else {
      setChosenService(sArray[index - 1]);
    }
  };

  const goRight = () => {
    const index = sArray.indexOf(chosenService);
    if (index === sArray.length - 1) {
      setChosenService(sArray[0]);
    } else {
      setChosenService(sArray[index + 1]);
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

        <div className="services-header">{title}</div>

        <div className="services-card">

          <div className="services-grid">
            {sArray.map((service: string) => {
              return (
                <button
                  key={service}
                  onClick={() => setChosenService(service)}
                  className={`hover:bg-white/25 sgrid-item ${
                    service === chosenService && "text-white bg-white/30"
                  }`}
                >
                  {sObj[service].title}
                </button>
              );
            })}
          </div>

          <button onClick={goLeft} className="services-arrow">
            <BsChevronLeft className="w-full h-full" />
          </button>

          <ServiceCard serv={chosenService} sObj={sObj} />

          <button onClick={goRight} className="services-arrow">
            <BsChevronRight className="w-full h-full" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
