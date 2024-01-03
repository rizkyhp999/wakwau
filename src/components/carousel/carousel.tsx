"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { Animasi } from "@/components/animasi/animasi";
export default function carousel() {
  return (
    <>
      <motion.div className=" flex flex-wrap lg:flex-nowrap items-center justify-center">
        {/* <motion.div
          initial={{ x: -2000 }}
          animate={{ x: 0 }}
          // transition={{ type: "tween", duration: 1 }}
          className="container relative lg:static lg:w-full flex justify-center"
        > */}
        <motion.img
          // initial={{ x: -2000 }}
          // animate={{ x: 0 }}
          // transition={{ type: "tween", duration: 1 }}
          src="/carousel/1.png"
          alt=""
          className="relative lg:w-1/2 lg:h-auto lg:static flex justify-center blur-sm lg:blur-0"
        />

        <motion.div
          // initial={{ x: 2000 }}
          // animate={{ x: 0 }}
          // transition={{ type: "tween", duration: 1 }}
          className=" absolute inset-x-0 m-auto flex flex-wrap items-center justify-center lg:static  lg:my-auto"
        >
          <div className=" bg-white p-5 ">
            <Animasi>
              <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold ">
                Bahasa Daerah
              </h1>
            </Animasi>
            <Animasi>
              <div className="text-sm sm:text-lg md:text-xl lg:text-lg text-justify ">
                Bahasa daerah di Indonesia berjumlah ratusan. Badan Pengembangan
                dan Pembinaan Bahasa (Badan Bahasa) hingga 2019 telah
                memverifikasi sebanyak 718 bahasa daerah—bukan dialek atau
                subdialek. Jumlah bahasa tersebut diperoleh berdasarkan hasil
                pengolahan data pemetaan bahasa yang diambil di 2.560 daerah
                pengamatan (DP) di seluruh Indonesia yang dilakukan sejak tahun
                1992. Jumlah tersebut tentunya akan bertambah seiring dengan
                bertambahnya jumlah daerah pengamatan dalam pemetaan berikutnya.{" "}
              </div>
            </Animasi>
          </div>
        </motion.div>
      </motion.div>
      {/* </motion.div> */}
    </>
  );
}
