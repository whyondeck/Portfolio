// components/common/ScrollSectionWrapper.tsx
"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ScrollSectionWrapper({
  children,
  animation = "fadeUp",
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: animation === "fadeUp" ? 60 : 0,
      scale: animation === "fadeScale" ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className="min-h-screen flex items-center justify-center"
    >
      {children}
    </motion.section>
  );
}
