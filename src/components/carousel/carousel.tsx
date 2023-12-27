"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
export default function carousel() {
  return (
    <>
      <motion.div className="conteiner flex flex-wrap lg:flex-nowrap justify-center">
        <motion.div
          initial={{ x: -2000 }}
          animate={{ x: 0 }}
          // transition={{ type: "tween", duration: 1 }}
          className="container  lg:w-full flex justify-center"
        >
          <img src="/carousel/1.png" alt="" className="w-full" />
        </motion.div>

        <motion.div
          initial={{ x: 2000 }}
          animate={{ x: 0 }}
          // transition={{ type: "tween", duration: 1 }}
          className=" container flex flex-wrap lg:w-2/3  my-auto mx-10 "
        >
          <div className="text-sm lg:text-2xl font-bold ">
            Bahasa sm block Daerah
          </div>
          <div className="text-sm lg:text-lg text-justify">
            Bahasa daerah di Indonesia berjumlah ratusan. Badan Pengembangan dan
            Pembinaan Bahasa (Badan Bahasa) hingga 2019 telah memverifikasi
            sebanyak 718 bahasa daerah—bukan dialek atau subdialek. Jumlah
            bahasa tersebut diperoleh berdasarkan hasil pengolahan data pemetaan
            bahasa yang diambil di 2.560 daerah pengamatan (DP) di seluruh
            Indonesia yang dilakukan sejak tahun 1992. Jumlah tersebut tentunya
            akan bertambah seiring dengan bertambahnya jumlah daerah pengamatan
            dalam pemetaan berikutnya.{" "}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
