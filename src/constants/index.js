import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  starbucks,
  syncsense,
  tesla,
  shopify,
  upgrad,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id:"home",
    title:"Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "Projects",
    title: "Project",
  },
  {
    id: "contacts",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "Content Creator",
    icon: backend,
  },
  {
    title: "Mentor",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const Social = [
  {
    handle:
      "omkar2711",
    handle_link:"https://github.com/omkar2711",
    name: "Github",
  
    image: "https://avatars.githubusercontent.com/u/75433632?v=4",
  },
  {
    handle:
      "Omkar Bharitkar",
    handle_link:"https://www.linkedin.com/in/omkar-bharitkar-88a912200/",
    name: "LinkedIn",
    image: "https://avatars.githubusercontent.com/u/75433632?v=4",  },
  {
    handle:
      "_o_m_k_a_r_2711",
    handle_link:"https://www.instagram.com/_o_m_k_a_r_2711/",
    name: "Instagram",
    image: "https://avatars.githubusercontent.com/u/75433632?v=4",  },
];

const projects = [
  {
    name: "SIID",
    description:
      "Web-based platform introducing the SIID Device's standout features, providing a convenient and efficient solution for road saftey    .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/omkar2711/SIID_React_Website",
    live_link:"https://new1-omkar2711.vercel.app/",
  },
  {
    name: "Wanderer",
    description:
      "Web application simplifying the search for nearby attractions, Hotels, Resturants. Discover hidden gems and popular landmarks seamlessly through its user-friendly interface, redefining how you experience new places.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "MiUi",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/omkar2711/Wanderer",
    live_link:"https://wanderer-livid-chi.vercel.app/",
  },
  {
    name: "Drum kit",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "JQuery",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      
    ],
    image: tripguide,
    source_code_link: "https://github.com/omkar2711/Drum_Kit",
    live_link:"https://omkar2711.github.io/Drum_Kit/",
  },
];

const experiences = [
  {
    title: "Software Developer Engineer Intern",
    company_name: "SyncSense",
    icon: syncsense,
    iconBg: "#131313",
    date: "Oct 2023 - March 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Technical Content Strategist Intern",
    company_name: "upGrad",
    icon: upgrad,
    iconBg: "#e62d3e",
    date: "March 2024 - July 2024",
    points: [
      "Directed content development for a full stack development cohort, with a strong emphasis on practical skills.",
      "Collaborated closely with industry experts to ensure the curriculum met current and evolving professional standards.",
      "Utilized Java for implementing data structures and employed the MERN Stack for full-stack development projects.",
    ],
  },
  {
    title: "Associate - Content",
    company_name: "upGrad",
    icon: upgrad,
    iconBg: "#e62d3e",
    date: "July 2024 - Present",
    points: [
      "Assisted senior instructors in teaching 80+ students across 4 batches in Full Stack Development.",
      "Created curriculum, incorporating industry insights and practical case studies to enhance learning.",
      "Led doubt-solving sessions and provided personal guidance to support learners in understanding key concepts.",
      "Designed capstone web development projects to give students hands-on experience with real-world applications.",
    ],
  },
];

export { services, technologies,experiences, Social, projects };
