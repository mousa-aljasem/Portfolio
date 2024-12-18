import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import jet2holidays from "../public/jet2holidays.jpg";

import {
  TbBrandCSharp,
  TbSql,
  TbBrandJavascript,
  TbBrandHtml5,
  TbBrandCss3,
} from "react-icons/tb";
import { SiAkamai,
  SiDynatrace,
  SiElastic
 } from "react-icons/si";

type Props = {};

export default function ExperienceCard_Jet2({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] snap-center bg-offgray-color p-10 hover:opacity-100 opacity-40 cursor-pointer traansition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
      >
        <Image
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
          src={jet2holidays}
          alt="Jet2holidays Logo"
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">IT Graduate</h4>
        <p className="font-bold text-2xl mt-1">2024 - Current</p>
        <div className="flex space-x-2 my-2 text-3xl">
          <TbSql />
          <TbBrandCSharp />
          <TbBrandJavascript />
          <TbBrandHtml5 />
          <TbBrandCss3 />
          <SiAkamai />
          <SiDynatrace />
          <SiElastic />
          {/* Tech Used */}
        </div>
        {/*
        <p className="uppercase py-5 text-gray-300">
          2015 - 2018
        </p>
        */}
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Collaborated in multiple teams like Site Reliability Engineering and DevOps Releases
          </li>
          <li>
            Created custom, complex SQL queries, which generated reports, traversed JSON and fixed customer issues. 
          </li>
          <li>
            Created a tool in HTML/CSS and JS to auto-fill information from an excel spreadsheet to a site that did not allow batch processing. 
          </li>
          <li>
            Worked with Akamai, Dynatrace and Elastic to monitor the site as well as implementing security policies to stop bot activity.
          </li>
        </ul>
      </div>
    </article>
  );
}
