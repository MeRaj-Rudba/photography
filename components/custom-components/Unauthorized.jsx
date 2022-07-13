import Image from "next/image";
import React from "react";
import lottieImage from "../images/unauthorized.gif";
export default function Unauthorized() {
  return (
    <div className="h-64 w-64 mx-auto my-10 ">
      <Image
        alt="Point of View."
        src={lottieImage}
        width={500}
        height={500}
        layout="responsive"
        objectFit="contain"
      />
      <p className="text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-orange-400  my-5 font-bold">
        401 Authorization error
      </p>
    </div>
  );
}
