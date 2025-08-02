import { motion } from "framer-motion";
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative h-[500px] md:h-[600px] bg-cover bg-center flex items-center px-4 sm:px-6"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1310384629/photo/solar-panel-cell-on-dramatic-sunset-sky-background-clean-alternative-power-energy-concept.jpg?s=612x612&w=0&k=20&c=HW8S4AbKe1fyEuu5E-XC4gwlIrUghNY6kaiS-gzDu0A=')",
      }}
    >
      {/* Dark Overlay */}
      <motion.div
        className="bg-black/50 absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Text Content */}
      <motion.div
        className="relative z-10 max-w-4xl"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.p
          className="text-green-400 font-semibold mb-2 uppercase tracking-widest text-sm sm:text-base font-playfair"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Welcome to
          <motion.span
            className="ml-2 text-lime-400 inline-block"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.6,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
          >
            Wattigoenergies
          </motion.span>
        </motion.p>

        <motion.h1
          className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug sm:leading-tight font-playfair"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Powering the Future <br />
          With <span className="text-lime-400">Renewable.</span>
        </motion.h1>
      </motion.div>
    </section>
  );
};

export default HeroSection;
