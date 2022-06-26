import React from "react";

import Image from "next/image";
import ScrollLinked from "./ScrollLinked";

export default function LandingScreen() {
  return (
    <figure className="md:grid md:grid-cols-2 gap-x-8 rounded-xl p-8 md:p-0 my-10">
      <div
        className=" 
       "
      >
        {/* <ScrollLinked> */}

        <Image
          className="rounded-xl shadow-2xl shadow-black scale-75 rotate-6"
          alt="Point of View."
          src="https://images.unsplash.com/photo-1525683879097-8babce1c602a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9pbnQlMjBvZiUyMHZpZXd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          width={200}
          height={300}
          layout="responsive"
        />
        {/* </ScrollLinked> */}
      </div>
      <div className="order-first  pt-6 md:p-8 text-center md:text-left space-y-4 self-center">
        <blockquote>
          <p className="text-2xl lg:text-5xl font-medium my-font text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-orange-400 ">
            “It is an illusion that photos are made with the camera… they are
            made with the eye, heart, and head.”
          </p>
        </blockquote>
        <figcaption className="font-medium text-2xl my-font">
          <div className="text-zinc-500 dark:text-zinc-400">– Don McCullin</div>
        </figcaption>
      </div>
    </figure>
  );
}
