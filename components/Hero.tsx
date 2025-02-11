import React from "react";
import { motion } from "framer-motion";
import RightSide from "./RightSide";

export default function Hero() {
  return (
    <section className="relative max-w-contentContainer mx-auto pt-10 flex flex-col gap-4 lg:gap-8 md:px-10 min-h-screen justify-center">
      <div className="flex flex-col gap-10 mt-20">
        {/* NOOR */}
        <motion.h1
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-textDark font-titleFont text-[60px] md:text-[90px] lg:text-[180px] font-semibold"
        >
          NOOR
        </motion.h1>

        {/* Full Stack Developer title */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm md:text-base uppercase  tracking-[8px] font-bold md:tracking-[10px] lg:tracking-[20px] font-bodyFont text-center mt-4 animate-gradient bg-gradient-to-r from-orange-600 via-blue-600 to-purple-600 bg-clip-text text-transparent bg-300% hover:bg-gradient-to-l"
        >
          Full Stack Developer
        </motion.h2>

        {/* DIBOU */}
        <motion.h1
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-textDark font-titleFont text-[60px] md:text-[90px] lg:text-[180px] font-semibold text-right "
        >
          DIBOU
        </motion.h1>

        <RightSide />
      </div>
    </section>
  );
}