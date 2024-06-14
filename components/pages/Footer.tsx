"use client"

import { FaInstagram, FaPhone, FaMapPin   } from "react-icons/fa";
import { MdEmail } from "react-icons/md";




const Footer = () => {
  return (
    <section id="footer" className="footer-container">
      <div className="footer-title">Contact Us</div>
      <div className="footer-list">
        <a href="https://www.instagram.com/f1cevents/" target="blank" className="f-list-item"><FaInstagram className="w-[20px] h-[20px]" /> @f1cevents</a>
        <div className="f-list-item"><FaPhone className="w-[20px] h-[20px]" /> {`(732)-522-9047`}</div>
        <div className="f-list-item"><MdEmail className="w-[20px] h-[20px]" /> admin@f1cevents.com</div>
        <div className="f-list-item"><FaMapPin className="w-[20px] h-[20px]" /> Piscataway, NJ, USA</div>
      </div>
    </section>
  );
};

export default Footer;
