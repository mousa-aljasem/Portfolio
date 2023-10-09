"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import mousaCloseUp from "../public/mousaCloseUp.jpg";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["fullstack developer", "designer", "coffee addict ☕"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={mousaCloseUp}
        alt="Picture of Mousa Aljasem"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-3xl lg:text-6xl font-semibold px-10">
          <p>Hey there! I'm Mousa</p>
          <span className="">I'm a {text}</span>
          <Cursor cursorColor="rgba(198,123,220, 1)"></Cursor>
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="hero-button">About</button>
          </Link>
          <Link href="#experience">
            <button className="hero-button">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="hero-button">Skills</button>
          </Link>
          {/* 
          <Link href="#projects">
            <button className="hero-button">Projects</button>
          </Link>
          */}
        </div>
      </div>
    </div>
  );
}
