import React from 'react';
import { motion } from 'framer-motion';

export default function LeftSide() {
    return (
        <motion.div
            initial={{ x: -100, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="h-full flex flex-col items-start justify-start gap-2"
        >
            <div className="flex flex-col items-start gap-2 -mb-36">
                <span className="text-textDark font-titleFont tracking-widest text-sm  ">
                    Based in
                </span>
                <span className="text-textDark font-titleFont tracking-widest text-sm  ">
                    Dallas, United States
                </span>
            </div>
            {/* <div className="w-[2px] h-44 bg-textDark" /> */}
        </motion.div>
    );
}