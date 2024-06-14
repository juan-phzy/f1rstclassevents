"use client";

import Image from "next/image";

interface Props {
  sObj: { [key: string]: { title: string; desc: string } };
  serv: string;
}

const ServiceCard = ({ serv, sObj }: Props) => {
  return (
    <section className="servcard-container">
      <div className="servcard-title">{sObj[serv].title}</div>
      <div className="servcard-image">
        <Image
          className="object-cover"
          src={`/services/${serv}.jpg`}
          alt="services image"
          fill
        />
      </div>
      <div className="servcard-desc">{sObj[serv].desc}</div>
    </section>
  );
};

export default ServiceCard;
