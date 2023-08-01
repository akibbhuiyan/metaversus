"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, navVariants } from "../utils/motion";

const ExploreCard = ({ index, active, handleClick, id, imgUrl, title }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer overflow-hidden`}
      onClick={() => handleClick(id)}
    >
      <img
        src={imgUrl}
        alt={title}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== id ? (
        <h2 className="font-semibold text-[18px] sm:font-[26px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h2>
      ) : (
        <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px] ">
          <div
            className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
          >
            <img
              src="/headset.svg"
              alt="HeadSet"
              className="w-1/2 h-1/2 object-contain "
            />
          </div>
          <p className="font-normal text-[16px] leading-[20px] text-white uppercase">
            Enter the Metaverse
          </p>
          <h2 className="lg:mt-[24px] mt-2 font-semibold sm:text-[32px] text-[24px] text-white">
            {title}
          </h2>
        </div>
      )}
    </motion.div>
  );
};

export default ExploreCard;
