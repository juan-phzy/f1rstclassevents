"use client"

import { FaInstagram, FaPhone, FaMapPin   } from "react-icons/fa";
import { MdEmail } from "react-icons/md";




const Footer = () => {
  return (
    <section id="contact" className="footer-container">
      <div className="footer-title">Contact Us</div>
      <div className="footer-list">
        <a href="https://www.instagram.com/f1cevents/" target="blank" className="f-list-item"><FaInstagram className="w-[20px] h-[20px]" /> @f1cevents</a>
        <a href="https://www.google.com/search?q=f1rst+class+events&sca_esv=13f83d3e4d744b27&sca_upv=1&ei=q6lrZsiENaKp5NoPnLK_iA8&ved=0ahUKEwiIhuvthNqGAxWiFFkFHRzZD_EQ4dUDCBA&uact=5&oq=f1rst+class+events&gs_lp=Egxnd3Mtd2l6LXNlcnAiEmYxcnN0IGNsYXNzIGV2ZW50czIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeSOUYUPMCWJYYcAN4AZABAJgBaqAByQuqAQQxNy4xuAEDyAEA-AEBmAIVoAKWDMICChAAGLADGNYEGEfCAgsQLhiABBiRAhiKBcICCxAAGIAEGJECGIoFwgIKEAAYgAQYQxiKBcICERAuGIAEGLEDGNEDGIMBGMcBwgILEAAYgAQYsQMYgwHCAhoQLhiABBiRAhiKBRiXBRjcBBjeBBjgBNgBAcICDhAuGIAEGJECGLEDGIoFwgIOEAAYgAQYkQIYsQMYigXCAg0QABiABBixAxhDGIoFwgIQEAAYgAQYsQMYQxiDARiKBcICCBAuGIAEGLEDwgIIEAAYgAQYsQPCAg4QLhiABBjHARiOBRivAcICBRAAGIAEwgIHEC4YgAQYCsICBxAAGIAEGArCAh0QLhiABBjHARiOBRivARiXBRjcBBjeBBjgBNgBAcICCxAuGIAEGMcBGK8BwgIFEC4YgASYAwCIBgGQBgi6BgYIARABGBSSBwQyMC4xoAeytgE&sclient=gws-wiz-serp&lqi=ChJmMXJzdCBjbGFzcyBldmVudHNIi-b-ydmxgIAIWioQABABEAIYABgBGAIiEmYxcnN0IGNsYXNzIGV2ZW50cyoICAIQABABEAKSAQJkapoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOS2IzRTNlRU5CRUFFqgE7EAEyHxABIhvXy4u7HbmFF8Wj4fqe96KvJSLyWfuUW-1F0h0yFhACIhJmMXJzdCBjbGFzcyBldmVudHPgAQA#rlimm=10145074912570380560" target="blank" className="f-list-item"><FaPhone className="w-[20px] h-[20px]" /> {`(732)-522-9047`}</a>
        <div className="f-list-item"><MdEmail className="w-[20px] h-[20px]" /> admin@f1cevents.com</div>
        <a href="https://www.google.com/search?q=f1rst+class+events&sca_esv=13f83d3e4d744b27&sca_upv=1&ei=q6lrZsiENaKp5NoPnLK_iA8&ved=0ahUKEwiIhuvthNqGAxWiFFkFHRzZD_EQ4dUDCBA&uact=5&oq=f1rst+class+events&gs_lp=Egxnd3Mtd2l6LXNlcnAiEmYxcnN0IGNsYXNzIGV2ZW50czIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeSOUYUPMCWJYYcAN4AZABAJgBaqAByQuqAQQxNy4xuAEDyAEA-AEBmAIVoAKWDMICChAAGLADGNYEGEfCAgsQLhiABBiRAhiKBcICCxAAGIAEGJECGIoFwgIKEAAYgAQYQxiKBcICERAuGIAEGLEDGNEDGIMBGMcBwgILEAAYgAQYsQMYgwHCAhoQLhiABBiRAhiKBRiXBRjcBBjeBBjgBNgBAcICDhAuGIAEGJECGLEDGIoFwgIOEAAYgAQYkQIYsQMYigXCAg0QABiABBixAxhDGIoFwgIQEAAYgAQYsQMYQxiDARiKBcICCBAuGIAEGLEDwgIIEAAYgAQYsQPCAg4QLhiABBjHARiOBRivAcICBRAAGIAEwgIHEC4YgAQYCsICBxAAGIAEGArCAh0QLhiABBjHARiOBRivARiXBRjcBBjeBBjgBNgBAcICCxAuGIAEGMcBGK8BwgIFEC4YgASYAwCIBgGQBgi6BgYIARABGBSSBwQyMC4xoAeytgE&sclient=gws-wiz-serp&lqi=ChJmMXJzdCBjbGFzcyBldmVudHNIi-b-ydmxgIAIWioQABABEAIYABgBGAIiEmYxcnN0IGNsYXNzIGV2ZW50cyoICAIQABABEAKSAQJkapoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOS2IzRTNlRU5CRUFFqgE7EAEyHxABIhvXy4u7HbmFF8Wj4fqe96KvJSLyWfuUW-1F0h0yFhACIhJmMXJzdCBjbGFzcyBldmVudHPgAQA#rlimm=10145074912570380560" target="blank" className="f-list-item"><FaMapPin className="w-[20px] h-[20px]" /> Piscataway, NJ, USA</a>
      </div>
    </section>
  );
};

export default Footer;
