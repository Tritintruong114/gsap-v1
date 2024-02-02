"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Home() {
  useGSAP(() => {
    const timeline = gsap.timeline();
    const context = gsap.context(() => {
      timeline
        .to(".clip_path-container", {
          duration: 1.2,
          marginTop: "0px",
          ease: "power2.inOut",
        })
        .to(".clip_path-container", {
          ease: "power2.inOut",
          duration: 0.9,
          clipPath: "inset(0% round 0rem)",
        })
        .to(".hero_title", {
          top: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.inOut",
        });
    });

    return () => context.kill();
  }, []);
  return (
    <main className="rounded-3xl bg-white h-screen overflow-y-scroll no-scrollbar relative flex justify-center items-center">
      <div className="clip_path-container absolute inset-0 bg-bruno-white mt-[100vh]">
        <div className="w-screen h-screen absolute">
          <video
            preload="none"
            muted
            loop
            autoPlay
            className="w-full h-full object-cover"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="relative z-10 px-base py-xxxl text-bruno-white h-full w-full text-center sm:text-left flex flex-col items-center sm:items-start justify-between">
          <h1 className="text-[15vw] sm:text-[15vw] overflow-hidden leading-none font-bebas">
            <p className="h-fit overflow-hidden">
              <span className="hero_title relative -bottom-96">McLaren P1</span>
            </p>
          </h1>
          <div className="flex justify-between items-end w-full">
            <div>
              <p className=" leading-none text-[3vw] h-fit overflow-hidden">
                <span className="hero_title relative -bottom-96">
                  Winner always{" "}
                </span>
              </p>
              <p className=" leading-none text-[3vw] h-fit overflow-hidden">
                <span className="hero_title relative -bottom-96">
                  find a ways{" "}
                </span>
              </p>
            </div>
            <button className="text-[2vw]">Explore</button>
          </div>
        </div>
      </div>
    </main>
  );
}
