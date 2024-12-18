"use client";
import React from "react";
import { motion } from "framer-motion";
import ExperienceCard_Osborne from "./ExperienceCard_Osborne";
import ExperienceCard_Jet2 from "./ExperienceCard_Jet2";

type Props = {};

export default function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      viewport={{
        once: true,
      }}
    >
      {/* <div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"> */}
      <div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          Experience
        </h3>
        {/* <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory"> */}
        <div className="flex space-x-5 mx-auto">
          <ExperienceCard_Osborne />
          <ExperienceCard_Jet2 />
        </div>
      </div>
    </motion.div>
  );
}
