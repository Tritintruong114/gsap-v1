"use client";
import Button from "@/components/elements/button/button";
import ShapeOne from "@/public/shape-one";
import Image from "next/image";
import { useState } from "react";
import Marquee from "react-fast-marquee";

export default function Home() {
  const [projectTitle, setProjectTitle] = useState("");

  return (
    <>
      <section
        data-comp="section"
        className="sm:pb-xxl py-base h-screen sm:overflow-hidden"
      >
        <div data-comp="container" className="sm:mx-auto px-base h-full ">
          <div
            data-comp="hero"
            className="grid grid-cols-1  sm:grid-cols-4 gap-base h-full"
          >
            <div className=" sm:col-span-3 text-center flex justify-center items-center flex-col border border-bruno-yellow">
              <h1 className="font-bebas text-fluid-display-2xl leading-normal">
                Bruno Truong
              </h1>
            </div>
            <div className="sm:col-span-1 bg-bruno-yellow flex justify-center items-center font-bold text-fluid-body-xl">
              <div className="text-bruno-black">
                <p>
                  Locate: <span className="font-normal">Viet Nam 🇻🇳</span>
                </p>
                <p>
                  Passsionate:{" "}
                  <span className="font-normal">Build Crazy Stuff</span>
                </p>
                <p>
                  Expertise:{" "}
                  <span className="font-normal">Creative Development</span>
                </p>
              </div>
            </div>
            <div className="sm:col-span-4 flex sm:h-full justify-center items-center  bg-bruno-yellow text-fluid-body-xxl font-bebas text-bruno-black col-span-1">
              <Marquee pauseOnHover autoFill speed={30}>
                <ShapeOne />
                <span className="px-base pt-1 text-center flex items-center justify-center">
                  Creative
                </span>
                <ShapeOne />

                <span className="px-base pt-1 text-center">Passionate</span>
                <ShapeOne />

                <span className="px-base pt-1 text-center">Visionary</span>
                <ShapeOne />

                <span className="px-base pt-1 text-center">Soulful</span>
              </Marquee>
            </div>

            <div className="sm:col-span-1">
              <ul className="flex flex-col justify-between h-full">
                <Button setProjectTitle={setProjectTitle}>Wooder</Button>
                <Button setProjectTitle={setProjectTitle}>One Cycle</Button>
                <Button setProjectTitle={setProjectTitle}>Hyrbrbase</Button>
                <Button setProjectTitle={setProjectTitle}>Crypto Flow</Button>
                <Button setProjectTitle={setProjectTitle}>
                  Maison De Villa
                </Button>
                <Button setProjectTitle={setProjectTitle}>
                  Manh Hieu Photography
                </Button>
              </ul>
            </div>
            <div className="sm:col-span-3 border-2 p-3 border-bruno-yellow w-full h-full">
              <div className=" h-full w-full bg-yellow-200 relative">
                <Image
                  src="/images/maison.jpg"
                  alt=""
                  fill
                  className="object-cover w-full h-full"
                />
                <h3 className="project_tilte ml-3 duration-500 relative z-10 text-start font-bebas text-fluid-body-xxl">
                  {projectTitle}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
