import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroImage from "../images/hero-image.png";
import lottieImage from "../images/lottie-4.gif";

function Hero() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative ">
      {/* Illustration behind hero content */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-64 w-64 mx-auto mb-0">
          <Image
            alt="Point of View."
            src={lottieImage}
            width={500}
            height={500}
            layout="responsive"
            objectFit="contain"
          />
        </div>
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20  mb-32">
          {/* Section header */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.9,
                },
              },
            }}
          >
            <div className="text-center pb-12 md:pb-16">
              <h1
                className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                data-aos="zoom-y-out"
              >
                Hey, I am{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-700">
                  MeRaj{" "}
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-700 to-orange-400">
                  Rudba
                </span>
              </h1>
              <div className="max-w-3xl mx-auto">
                <p
                  className="text-xl text-gray-600 mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  Our landing page template works on all devices, so you only
                  have to set it up once, and get beautiful results forever.
                </p>
                <div
                  className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay="300"
                >
                  <div>
                    <a
                      className="btn text-white bg-gradient-to-br from-pink-700 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 rounded-lg  text-center mr-2  w-full mb-4 sm:w-auto sm:mb-0"
                      href="#0"
                    >
                      Contact Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hero image */}
        </div>
      </div>
    </section>
  );
  7;
}

export default Hero;
