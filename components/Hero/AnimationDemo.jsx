import React, { useState } from "react";

import { motion, MotionConfig } from "framer-motion";
import { Refresh } from "./Refresh";
function AnimationDemo() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <section className="">
      <div className=" ">
        <MotionConfig reducedMotion="user">
          <div className="">
            <motion.div
              className="bg-gradient-to-r from-pink-500 to-orange-400 h-10 w-10 mx-auto "
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              🍊
            </motion.div>
          </div>
        </MotionConfig>
      </div>
    </section>
  );
}

export default AnimationDemo;
