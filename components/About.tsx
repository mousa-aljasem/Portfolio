"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import mousa from "../public/mousa.png";
import Link from "next/link";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md-text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.div
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
      >
        <Image src={mousa} alt="Picture of Mousa Aljasem" />
      </motion.div>

      <motion.div
        className="space-y-10 px-0 md:px-10"
        initial={{
          x: 200,
          opacity: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
      >
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-primary-color">little</span>{" "}
          background
        </h4>
        <p className="text-base text-justify">
          Hello! I have been a professional developer since 2015. Since then I
          have also graduated with a Bachelors in Computer Science and expanded
          my knowledge in all things Computer Science. I am incredibly motivated
          and can pick things up super quickly. I have worked in various teams
          both as a team player and leader.
        </p>
        <div></div>
        <a
          href="CV.pdf"
          className="px-5 py-2 mt-4 border rounded border-primary-color text-primary-color"
          target="_blank"
        >
          View my CV
        </a>
      </motion.div>
    </div>
  );
}
