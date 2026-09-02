import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const MainCardContent = ({ experience }) => (
  <>
    <div className='flex items-center gap-4'>
      <div
        className='w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shrink-0 ring-4 ring-white/10'
        style={{ background: experience.iconBg }}
      >
        <img
          src={experience.icon}
          alt={experience.company_name}
          className='w-[60%] h-[60%] object-contain'
        />
      </div>
      <div>
        <h3 className='text-white text-[20px] sm:text-[26px] font-bold leading-tight'>
          {experience.title}
        </h3>
        <p className='text-[#ff6b7a] text-[14px] sm:text-[16px] font-semibold'>
          {experience.company_name}
        </p>
      </div>
    </div>

    <ul className='space-y-1.5'>
      {experience.points.map((point, i) => (
        <li
          key={`experience-point-${i}`}
          className='text-white-100 text-[13px] sm:text-[14px] pl-4 relative leading-snug before:content-[""] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-secondary'
        >
          {point}
        </li>
      ))}
    </ul>
  </>
);

const StickyExperienceCard = ({ index, experience, progress, range, targetScale }) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className='sticky top-[110px] flex w-full items-center justify-center'>
      <motion.div
        style={{
          scale,
          top: `calc(-6vh + ${index * 14}px)`,
        }}
        className='relative w-[94vw] max-w-[900px] h-[360px] sm:h-[400px] origin-top overflow-hidden rounded-[2rem] shadow-card'
      >
        <div className='absolute inset-0 bg-tertiary' />
        <div
          className='absolute inset-0'
          style={{
            background: `linear-gradient(135deg, ${experience.iconBg} 0%, #100d25 70%)`,
          }}
        />
        <img
          src={experience.icon}
          alt=''
          className='pointer-events-none absolute -right-10 -bottom-10 w-[240px] h-[240px] object-contain opacity-10'
        />

        <div className='relative h-full flex flex-col justify-between p-6 sm:p-10'>
          <MainCardContent experience={experience} />
        </div>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div ref={container} className='relative mt-10 flex flex-col items-center pb-[45vh]'>
        {experiences.map((experience, i) => {
          const targetScale = Math.max(
            0.5,
            1 - (experiences.length - i - 1) * 0.1
          );
          return (
            <StickyExperienceCard
              key={`experience-${i}`}
              index={i}
              experience={experience}
              progress={scrollYProgress}
              range={[i * (1 / experiences.length), 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
