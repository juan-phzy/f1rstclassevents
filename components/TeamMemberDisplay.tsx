"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const TeamMemberDisplay = () => {
  const sriv = useRef(null);
  const srivText = useRef(null);

  const sri = useRef(null);
  const sriText = useRef(null);

  const srivImg = useRef(null);
  const sriImg = useRef(null);

  const dContainer = useRef(null);

  useGSAP(() => {
    gsap.to(dContainer.current, {
      scrollTrigger: {
        trigger: ".team-container",
        start: "50% 50%",
        end: "+=400px",
        toggleActions: "play reverse play reverse",
        // scrub: 1,
        markers: false,
        pin: ".team-container",
        pinSpacing: true,
      },
    });
    gsap.to(sriv.current, {
      y: -70,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".team-container",
        start: "50% 50%",
        end: "+=200px",
        toggleActions: "none play reverse none",
        // scrub: 1,
        markers: false,
      },
    });
    gsap.fromTo(
      sri.current,
      { y: 70, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".team-container",
          start: "50% 50%",
          end: "+=200px",
          toggleActions: "none play reverse none",
          // scrub: 1,
          markers: false,
        },
      }
    );
    gsap.to(srivText.current, {
      y: -120,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".team-container",
        start: "50% 50%",
        end: "+=200px",
        toggleActions: "none play reverse none",
        // scrub: 1,
        markers: false,
      },
    });
    gsap.fromTo(
      sriText.current,
      { y: 120, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".team-container",
          start: "50% 50%",
          end: "+=200px",
          toggleActions: "none play reverse none",
          // scrub: 1,
          markers: false,
        },
      }
    );

    gsap.to(srivImg.current, {
      y: -120,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".team-container",
        start: "50% 50%",
        end: "+=200px",
        toggleActions: "none play reverse none",
        // scrub: 1,
        markers: false,
      },
    });
    gsap.fromTo(
      sriImg.current,
      { y: 120, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".team-container",
          start: "50% 50%",
          end: "+=200px",
          toggleActions: "none play reverse none",
          // scrub: 1,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <>
      <div className="team-display-container" ref={dContainer}>
        <div className="member-name-container">
          <div className="member-name" ref={sriv}>
            <span>Sriv</span>
            <div className="team-image-sm">
              <Image
                loading="eager"
                className="object-contain"
                src="/images/sriv-small.jpg"
                alt="sriv-small"
                fill
              />
            </div>
          </div>
          <div className="member-name" ref={sri}>
          <span>Sri</span>
            <div className="team-image-sm">
              <Image
                loading="eager"
                className="object-contain"
                src="/images/sri-small.jpg"
                alt="sri-small"
                fill
              />
            </div>
          </div>
        </div>

        <div className="member-desc-container">
          <div className="member-desc" ref={srivText}>
            With over a decade of experience in the music industry, DJ Sriv
            brings unparalleled energy and expertise to every event.
            Specializing in weddings, corporate events, and private parties, DJ
            Sriv is known for creating unforgettable moments on the dance floor.
            His extensive music library spans all genres, ensuring that every
            guest, from the youngest to the oldest, finds something to groove
            to.
          </div>
          <div className="member-desc" ref={sriText}>
            With a dynamic presence and a voice that commands attention, MC Sri
            is your go-to host for any event. Whether it&apos;s a wedding,
            corporate event, or private celebration, Sri&apos;s charisma and
            professionalism ensure that your event runs smoothly and everyone
            has a great time. Known for his engaging personality and seamless
            transitions, Sri keeps the audience entertained and the event on
            track.
          </div>
        </div>
      </div>
      <div className="team-image-lg">
        <Image
          loading="eager"
          ref={srivImg}
          className="object-contain"
          src="/images/sriv-full.jpg"
          alt="sriv-full"
          fill
        />
        <Image
          loading="eager"
          ref={sriImg}
          className="object-contain"
          src="/images/sri-full.jpg"
          alt="sriv-full"
          fill
        />
      </div>
    </>
  );
};

export default TeamMemberDisplay;
