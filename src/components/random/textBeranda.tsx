import React from "react";
import { Animasi } from "@/components/random/animasi";

export default function () {
  return (
    <div className="bg-primer relative block overflow-hidden ">
      <h1 className="text-white text-lg text-justify font-bold">
        Menurut UNESCO dalam{" "}
        <span className="text-sekunder">30 tahun terakhir</span>, 200 bahasa
        daerah di dunia <span className="text-sekunder">punah</span> . Di
        Indonesia terdapat{" "}
        <span className="text-sekunder">718 bahasa daerah.</span> Namun, banyak
        kondisinya terancam <span className="text-sekunder">punah</span> dan{" "}
        <span className="text-sekunder">kritis</span>.
      </h1>
      <br />
      <br />

      <h1 className="text-white text-lg text-justify font-bold">
        Penyebab bahasa daerah <span className="text-sekunder">punah </span>
        adalah penutur jati yang tak lagi menggunakan dan mewariskan bahasanya
        ke generasi berikutnya.
      </h1>
    </div>
  );
}
