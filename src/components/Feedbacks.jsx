import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Social } from "../constants";
import { foreign } from "../assets";

const FeedbackCard = ({
  index,
  handle,
  handle_link,
  name,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <div className='mt-1'>
      <div className="flex gap-10">
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
        <p className='text-secondary py-1 text-[16px]' >{handle}</p>
      </div>

      <div className='mt-7 flex justify-between items-center '>
        <div className='flex-1 flex flex-col'>
          <p className='text-secondary  font-medium text-[16px]'>{name}</p>

        </div>
        <div
          onClick={() => window.open(handle_link, "_blank")}
          className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
        >
          <img
            src={foreign}
            alt='source code'
            className='w-1/2 h-1/2 object-contain'
          />

        </div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div id="contacts" className={`mt-12 bg-black-100 rounded-[20px]`} >
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Contact me.</h2>
          <p className={styles.sectionSubText}>Find Me Here</p>

        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex  gap-14`}>
        {Social.map((handle, index) => (
          <FeedbackCard key={handle.image} index={index} {...handle} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
