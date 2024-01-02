"use client";
import React, { useEffect, useRef } from "react";
import { animate, motion, useAnimation, useInView } from "framer-motion";
import { relative } from "path";
interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}

export const Animasi = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    console.log(isInView);
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.25 },
          },
        }}
        initial="hidden"
        animate={mainControls}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "gold", // Menggunakan nilai warna emas dengan nama warna CSS
          zIndex: 20,
        }}
      ></motion.div>
    </div>
  );
};
