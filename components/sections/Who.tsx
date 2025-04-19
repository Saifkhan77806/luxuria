'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Titlebtn } from "@/components/blocks/buttons/Titlebtn";

const Who = () => {
  const controls = useAnimation(); // For framer motion
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true }); // Observe element

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const text =
    "We are a team of passionate developers and designers dedicated to creating innovative solutions that make a difference. Our mission is to empower individuals and organizations through technology, providing tools and resources that enhance productivity and creativity.";

  return (
    <section id='who' className="relative flex flex-col items-center justify-center w-full pt-8 bg-black">
      {/* Blurred background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-24 bg-purple-600 opacity-30 rounded-full blur-3xl z-0" />

      {/* Section title */}
      <Titlebtn text="WHO WE ARE" />

      {/* Observed animated text container */}
      <div
        ref={ref}
        className="max-w-4xl w-[80%] relative py-8 text-center text-white z-10"
      >
        <motion.h1
          variants={sentence}
          initial="hidden"
          animate={controls}
          className="text-3xl leading-relaxed flex flex-wrap justify-center"
        >
          {text.split('').map((char, index) => (
            <motion.span
              key={index}
              variants={letter}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </section>
  );
};

export default Who;
