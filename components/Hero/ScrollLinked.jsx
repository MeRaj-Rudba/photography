import React, { useState } from "react";

import { motion, MotionConfig, Variants } from "framer-motion";
import { Refresh } from "./Refresh";

function ScrollLinked(props) {
  const cardVariants = {
    offscreen: {
      y: 500,
    },
    onscreen: {
      y: 50,

      transition: {
        type: "spring",
        bounce: 0.8,
        duration: 1.8,
      },
    },
  };
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [count, setCount] = useState(0);
  const hue = (h) => `hsl(${h}, 100%, 50%)`;
  const background = `linear-gradient(306deg, ${hue(20)}, ${hue(40)})`;
  return (
    <section className="">
      <div className=" ">
        <motion.div
          className="card-container"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="splash" style={{ background }} />
          <motion.div className="" variants={cardVariants}>
            {props.children}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default ScrollLinked;
