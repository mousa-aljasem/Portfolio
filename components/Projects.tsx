"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import mousa from "../public/mousa.png";
import Link from "next/link";

type Props = {};

export default function Projects({}: Props) {
  const projects = [
    {
      id: 1,
      title: "Data Visualisers",
      image: mousa,
      alt: "Picture of the visualising website",
      description:
        "A website allowing visualisation of popular pathfinding and sorting algorithms in practice, built using React",
      href: "https://github.com/mousa-aljasem",
    },
    {
      id: 2,
      title: "E-Commerce",
      image: mousa,
      alt: "Picture of the e-commerse website",
      description: "A website showing a full E-Commerce solution etc etc",
      href: "https://github.com/mousa-aljasem",
    },
    {
      id: 3,
      title: "E-Commerce",
      image: mousa,
      alt: "Picture of the e-commerse website",
      description: "A website showing a full E-Commerce solution etc etc",
      href: "https://github.com/mousa-aljasem",
    },
    {
      id: 4,
      title: "E-Commerce",
      image: mousa,
      alt: "Picture of the e-commerse website",
      description: "A website showing a full E-Commerce solution etc etc",
      href: "https://github.com/mousa-aljasem",
    },
  ];
  return (
    <motion.div
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.div
              initial={{
                y: -300,
                opacity: 0,
              }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              <div className="max-w-lg">
                <Image src={project.image} alt={project.alt} />
              </div>
            </motion.div>

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <div className="text-center">
                <h4 className="text-4xl font-semibold">
                  <span className="underline decoration-primary-color/50">
                    {project.title}
                  </span>
                </h4>
                <a className="" target="_blank" href={project.href}>
                  Click here to view
                </a>
              </div>

              <p className="text-lg text-center md:text-left">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-primary-color/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}
