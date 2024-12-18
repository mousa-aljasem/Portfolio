import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import osborneTechnologies from "../public/osborneTechnologies.jpg";

import {
  TbBrandCSharp,
  TbSql,
  TbBrandPhp,
  TbBrandHtml5,
  TbBrandCss3,
} from "react-icons/tb";
import { SiDotnet } from "react-icons/si";

type Props = {};

export default function ExperienceCard_Osborne({}: Props) {
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
          src={osborneTechnologies}
          alt="Osborne Technologies Logo"
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Software Developer</h4>
        <p className="font-bold text-2xl mt-1">2015 - 2018</p>
        <div className="flex space-x-2 my-2 text-3xl">
          <TbBrandCSharp />
          <SiDotnet />
          <TbSql />
          <TbBrandPhp />
          <TbBrandHtml5 />
          <TbBrandCss3 />
          {/* Tech Used */}
        </div>
        {/*
        <p className="uppercase py-5 text-gray-300">
          2015 - 2018
        </p>
        */}

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Worked to create many high-quality in-house tools to increase
            efficiency
          </li>
          <li>
            Collaborated on big projects to implement efficient and scalable
            code
          </li>
          <li>
            Maintained legacy code by troubleshooting through various testing
            protocols, and implemented fixes for them
          </li>
        </ul>
      </div>
    </article>
  );
}
