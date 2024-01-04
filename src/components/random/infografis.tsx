import React from "react";
import Image from "next/image";
export default function Infografis() {
  return (
    <>
      <div className="bg-primer">
        <div className="container mx-auto pt-10 ">
          <h1 className="items-center text-white text-4xl lg:text-5xl font-semibold  text-center">
            Infografis
          </h1>
          <div className="flex flex-wrap mt-10 items-center justify-center">
            <img src="infografis1.png" alt="" className="px-10 md:w-1/3" />
            <img
              src="infografis2.png"
              alt=""
              className="px-10 hidden md:block md:w-1/3"
            />
            <img
              src="infografis1.png"
              alt=""
              className="px-10 hidden md:block w-1/3"
            />
          </div>
        </div>
      </div>
    </>
  );
}
