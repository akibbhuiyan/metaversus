/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable quotes */

"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col `}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="Map" className="w-full h-full object-cover" />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] ">
          <img src="/people-01.png" alt="People" className="w-full h-full" />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-02.png" alt="People" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-03.png" alt="People" className="w-full h-full" />
        </div>
        <div className="absolute top-[30%] left-[20%] w-[217px] h-[167px] p-[6px] rounded-[24px] bg-[#5d6680] ">
          <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
            <img
              src="/planet-02.png"
              alt="planet"
              className="absolute w-full h-full object-cover rounded-[24px]"
            />
            <div className="absolute bottom-0 left-[14px] flex items-center  flex-col">
              <div className="flex">
                <img
                  src="/people-01.png"
                  alt="People"
                  className="w-[24px] h-[24px]"
                />
                <img
                  src="/people-02.png"
                  alt="People"
                  className="w-[24px] h-[24px] -ml-[11px]"
                />
                <img
                  src="/people-03.png"
                  alt="People"
                  className="w-[24px] h-[24px] -ml-[11px]"
                />
                <span className="font-normal text-[12px] text-white">
                  + 264 has joined
                </span>
              </div>
              <h2 className=" font-bold text-white text-[18px] my-[12px]">
                The Upside Down
              </h2>
            </div>
          </div>
        </div>
        <div className="absolute top-[9%] right-[25%] w-[217px] h-[167px] p-[6px] rounded-[24px] bg-[#5d6680] shadow-2xl ">
          <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
            <img
              src="/planet-03.png"
              alt="planet"
              className="absolute w-full h-full object-cover rounded-[24px]"
            />
            <div className="absolute bottom-0 left-[14px] flex items-center  flex-col">
              <div className="flex">
                <img
                  src="/people-01.png"
                  alt="People"
                  className="w-[24px] h-[24px]"
                />
                <img
                  src="/people-02.png"
                  alt="People"
                  className="w-[24px] h-[24px] -ml-[11px]"
                />
                <img
                  src="/people-03.png"
                  alt="People"
                  className="w-[24px] h-[24px] -ml-[11px]"
                />
                <span className="font-normal text-[12px] text-white">
                  + 264 has joined
                </span>
              </div>
              <h2 className=" font-bold text-white text-[18px] my-[12px]">
                Hawkins Labs
              </h2>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
