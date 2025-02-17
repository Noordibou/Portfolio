import React from "react";
import { motion } from "framer-motion";

export default function RightSide() {
  return (
    <motion.div
    initial={{ x: -100, opacity: 0, scale: 1 }}
    animate={{ x: 0, opacity: 1, scale: 1 }}
    transition={{ duration: 1.5 }}
      className="h-full flex flex-col justify-start items-start gap-2 "
    >
      <div className="flex flex-col items-start gap-2 text-left ">
        <span className="text-primaryColor font-titleFont tracking-widest text-sm">
          currently at
        </span>
        <span className="text-primaryColor font-titleFont tracking-widest text-sm leading-relaxed">
          National Center for Computational Hydroscience and Engineering (NCCHE)
        </span>
      </div>
    </motion.div>
  );
}
