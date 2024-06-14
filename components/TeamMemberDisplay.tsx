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
  const srivImg = useRef(null);

  const sri = useRef(null);
  const sriText = useRef(null);
  const sriImg = useRef(null);

  const dContainer = useRef(null);

  useGSAP(() => {
    //Names
    gsap.to(dContainer.current, {
      scrollTrigger: {
        trigger: ".team-container",
        start: "50% 50%",
        end: "+=300px",
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
      duration: .7,
      scrollTrigger: {
        trigger: ".team-container",
        start: "50% 50%",
        end: "+=150px",
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
        duration: .7,
        scrollTrigger: {
          trigger: ".team-container",
          start: "50% 50%",
          end: "+=150px",
          toggleActions: "none play reverse none",
          // scrub: 1,
          markers: false,
        },
      }
    );

    //Text
    gsap.to(srivText.current, {
      y: -120,
      opacity: 0,
      duration: .7,
      scrollTrigger: {
        trigger: ".team-container",
        start: "50% 50%",
        end: "+=150px",
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
        duration: .7,
        scrollTrigger: {
          trigger: ".team-container",
          start: "50% 50%",
          end: "+=150px",
          toggleActions: "none play reverse none",
          // scrub: 1,
          markers: false,
        },
      }
    );


    //Images
    gsap.to(srivImg.current, {
      y: -120,
      opacity: 0,
      duration: .7,
      scrollTrigger: {
        trigger: ".team-container",
        start: "50% 50%",
        end: "+=150px",
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
        duration: .7,
        scrollTrigger: {
          trigger: ".team-container",
          start: "50% 50%",
          end: "+=150px",
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
            <span>DJ Sriv</span>
            <div className="team-image-sm">
              <Image
                loading="eager"
                className="object-contain"
                src="/images/sriv-small.jpg"
                alt="sriv-small"
                sizes="50vw"
                fill
              />
            </div>
          </div>
          <div className="member-name" ref={sri}>
            <span>MC Sri</span>
            <div className="team-image-sm">
              <Image
                loading="eager"
                className="object-contain"
                src="/images/sri-small.jpg"
                alt="sri-small"
                sizes="50vw"
                fill
              />
            </div>
          </div>
          
        </div>

        <div className="member-desc-container">
          <div className="member-desc" ref={srivText}>
            <span className="font-bold">Specialty: DJ / Emcee</span>
            <span className="text-[.8rem]  lg:text-base">
              A glimpse into my journey: My venture into DJing commenced in
              early 2020 during my college days. Fuelled by my profound love for
              music, every social gathering became an opportunity for me to take
              charge of the tunes, igniting a passion within me. Witnessing the
              joy sparked by my music selections, I found myself drawn to the
              role of curating happiness through sound. As the pandemic subsided
              in late 2021, doors opened for me to DJ at various events
              including birthdays, cultural celebrations like garba, and ringing
              in the New Year. With each opportunity, my skills and service
              expanded, elevating both the scale of my events and the quality of
              my performance. Embracing the privilege of being a focal point
              during pivotal moments in people&apos;s lives, I wholeheartedly
              cherish the role I play as a host-like figure.
            </span>
          </div>
          <div className="member-desc" ref={sriText}>
            <span className="font-bold">Specialty: Emcee</span>
            <span className="text-[.8rem] lg:text-base">
              A glimpse into my journey: Believe it or not, I used to be
              incredibly introverted and plagued by stage fright. But one day, I
              decided enough was enough—I stepped out of my comfort zone and
              discovered a hidden talent waiting to be unleashed. Now, I&apos;m
              the one bringing the energy to the crowd, orchestrating
              unforgettable experiences with my charm and enthusiasm.
              Specializing in event coordination and hosting, I ensure every
              detail is meticulously planned, from coordinating activities to
              hosting games, making sure everyone has a blast. My journey from a
              shy, fearful individual to a confident Emcee has been nothing
              short of empowering. I&apos;ve learned that courage and
              determination can truly transform lives, and I&apos;m living proof
              of that. So, if you&apos;re ready for an unforgettable event
              filled with energy and excitement, I&apos;m your go-to Emcee!
            </span>
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
          sizes="50vw"
          fill
        />
        <Image
          loading="eager"
          ref={sriImg}
          className="object-contain"
          src="/images/sri-full.jpg"
          alt="sriv-full"
          sizes="50vw"
          fill
        />
      </div>
    </>
  );
};

export default TeamMemberDisplay;
