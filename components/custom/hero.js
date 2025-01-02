"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      viewport={{ once: false, margin: "-100px 0px -100px 0px" }}
      transition={{ duration: 0.8 }}
      className="relative h-[65vh] w-screen m-0 overflow-hidden"
    >
      <div className="absolute inset-0">
        <video
          src="/herovid.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative h-full flex flex-col justify-end items-start px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="text-white w-full flex flex-col md:flex-row justify-between items-start md:items-end"
        >
          <div className="flex flex-col md:flex-row md:items-end mb-4">
            <h1 className="text-8xl md:text-[180px] lg:text-[150px] font-bold leading-none">
              Fund People
            </h1>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
