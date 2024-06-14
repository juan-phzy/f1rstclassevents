"use client";
import { forwardRef, Ref } from "react";

const NavModal = forwardRef<
  HTMLDivElement,
  { open: boolean; toggle: (open: boolean) => void }
>(({ open, toggle }, ref) => {
  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    toggle: (open: boolean) => void
  ) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href")?.substring(1);
    const targetElement = targetId ? document.getElementById(targetId) : null;

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }

    toggle(false);
  };

  return (
    <section ref={ref as Ref<HTMLDivElement>} className="mobile-nav-modal">
      <a href="#mainnav" onClick={(event) => scrollToSection(event, toggle)}>
        HOME
      </a>
      <a href="#services" onClick={(event) => scrollToSection(event, toggle)}>
        SERVICES
      </a>
      <a href="#events" onClick={(event) => scrollToSection(event, toggle)}>
        EVENTS
      </a>
      <a href="#team" onClick={(event) => scrollToSection(event, toggle)}>
        TEAM
      </a>
      <a href="#bookings" onClick={(event) => scrollToSection(event, toggle)}>
        INTEREST
      </a>
      <a href="#reviews" onClick={(event) => scrollToSection(event, toggle)}>
        REVIEWS
      </a>
      <a href="#reviews" onClick={(event) => scrollToSection(event, toggle)}>
        GALLERY
      </a>
      <a href="#contact" onClick={(event) => scrollToSection(event, toggle)}>
        CONTACT
      </a>
    </section>
  );
});

NavModal.displayName = "NavModal";

export default NavModal;
