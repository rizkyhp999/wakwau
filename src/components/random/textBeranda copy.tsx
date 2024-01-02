"use client";
import React, { useEffect, useRef } from "react";
import { animate, motion, useAnimation, useInView } from "framer-motion";
export default function textBeranda() {
  const ref = useRef(null);
  const ref1 = useRef(null);
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
    <>
      <motion.div
        ref={ref}
        className=" bg-primer relative block overflow-hidden "
      >
        <motion.img
          src="blub.svg"
          alt=""
          className="absolute w-1/3 right-0 -top-[80px]"
          variants={{
            hidden: { opacity: 0, y: 1000 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          }}
          initial="hidden"
          animate={mainControls}
        />
        <motion.div className="container mx-auto p-5 mt-5">
          <motion.h1
            className="text-white text-lg text-justify font-bold"
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.25 },
              },
            }}
            initial="hidden"
            animate={slideControls}
          >
            Menurut UNESCO dalam{" "}
            <span className="text-sekunder">30 tahun terakhir</span>, 200 bahasa
            daerah di dunia <span className="text-sekunder">punah</span> . Di
            Indonesia terdapat{" "}
            <span className="text-sekunder">718 bahasa daerah.</span> Namun,
            banyak kondisinya terancam{" "}
            <span className="text-sekunder">punah</span> dan{" "}
            <span className="text-sekunder">kritis</span>.
          </motion.h1>
          <br />
          <br />
          <motion.h1
            className="text-white text-lg text-justify font-bold "
            variants={{
              hidden: { opacity: 0, y: 1000 },
              visible: { opacity: 1, y: 0, transition: { duration: 2 } },
            }}
            initial="hidden"
            animate={mainControls}
          >
            Penyebab bahasa daerah <span className="text-sekunder">punah</span>{" "}
            adalah penutur jati yang tak lagi menggunakan dan mewariskan
            bahasanya ke generasi berikutnya.
          </motion.h1>
        </motion.div>
        <motion.p>
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
          Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau Wakwau
        </motion.p>
      </motion.div>
    </>
  );
}
