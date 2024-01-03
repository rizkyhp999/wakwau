import React from "react";
import { motion } from "framer-motion";
import Carousel from "@/components/carousel/carousel";
import TextBeranda from "@/components/random/textBeranda";
import { Peta } from "@/components/peta/peta";

export default function Home() {
  return (
    <>
      <Carousel></Carousel>
      <TextBeranda></TextBeranda>
      <Peta></Peta>
    </>
  );
}
