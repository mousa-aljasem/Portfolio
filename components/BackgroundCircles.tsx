import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      className="relative flex justify-center items-center"
      initial={{
        scale: 0,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <div className="absolute rounded-full border border-secondary-color h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute rounded-full border border-secondary-color h-[300px] w-[300px] mt-52" />
      <div className="absolute rounded-full border border-secondary-color h-[500px] w-[500px] mt-52" />
      <div className="absolute rounded-full border border-primary-color h-[650px] w-[650px] mt-52 animate-pulse opacity-20" />
      <div className="absolute rounded-full border border-secondary-color h-[800px] w-[800px] mt-52" />
    </motion.div>
  );
}
