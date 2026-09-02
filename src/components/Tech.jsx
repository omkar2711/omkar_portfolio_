import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { styles } from "../styles";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const SkillIcon = ({ technology, index, centerIndex, progress }) => {
  const distance = index - centerIndex;

  const x = useTransform(progress, [0, 0.5], [distance * 70, 0]);
  const y = useTransform(progress, [0, 0.5], [Math.abs(distance) * 26, 0]);
  const rotate = useTransform(progress, [0, 0.5], [distance * 22, 0]);
  const scale = useTransform(progress, [0, 0.5], [0.55, 1]);
  const opacity = useTransform(progress, [0, 0.35], [0, 1]);

  return (
    <motion.div
      style={{ x, y, rotate, scale, opacity }}
      className='flex flex-col items-center gap-3'
    >
      <div className='w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-tertiary shadow-card flex items-center justify-center p-3'>
        <img
          src={technology.icon}
          alt={technology.name}
          className='w-full h-full object-contain'
        />
      </div>
      <p className='text-secondary text-[11px] sm:text-[12px] text-center whitespace-nowrap'>
        {technology.name}
      </p>
    </motion.div>
  );
};

const Tech = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const centerIndex = Math.floor((technologies.length - 1) / 2);

  return (
    <div ref={container} className='relative h-[200vh]'>
      <div className='sticky top-0 h-screen flex flex-col items-center justify-center pt-24'>
        <motion.div
          variants={textVariant()}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
        >
          <p className={`${styles.sectionSubText} text-center`}>
            Technologies I work with
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Skills.
          </h2>
        </motion.div>

        <div
          className='mt-16 flex flex-row flex-wrap items-start justify-center gap-x-8 gap-y-10 max-w-5xl px-6'
          style={{ perspective: "800px" }}
        >
          {technologies.map((technology, index) => (
            <SkillIcon
              key={technology.name}
              technology={technology}
              index={index}
              centerIndex={centerIndex}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
