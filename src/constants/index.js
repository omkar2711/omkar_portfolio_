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
  nxtwave,
  carrent,
  jobit,
  tripguide,
  wanderer_social,
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
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Content Creator",
    icon: mobile,
  },
  {
    title: "Freelancer",
    icon: backend,
  },
  {
    title: "Educator",
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
    name: "Wanderer Social",
    description:
      "Advance Version of Wanderer Application where you can post you experience, interact with new people with the same time you can use wanderer application .",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
       {
        name: "ClerkJS",
        color: "blue-text-gradient",
      },
        ],
    image: wanderer_social,
    source_code_link: "https://github.com/omkar2711/Wanderer_social",
    live_link:"https://wanderer-social-sg34.vercel.app/",
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
  // {
  //   name: "Drum kit",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "JQuery",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "JavaScript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
      
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/omkar2711/Drum_Kit",
  //   live_link:"https://omkar2711.github.io/Drum_Kit/",
  // },
];

const experiences = [
  {
    title: "SDE Intern",
    company_name: "SyncSense",
    icon: syncsense,
    iconBg: "#131313",
    points: [
      "Wrote my first production-level code and shipped frontend features users loved.",
      "Migrated backend systems — a crash course in scalability and reliability.",
    ],
  },
  {
    title: "Technical Intern → Principal Instructor",
    company_name: "upGrad",
    icon: upgrad,
    iconBg: "#e62d3e",
    points: [
      "Led content development and mentored 80+ students across batches.",
      "Grew from a technical role into leading the Full Stack vertical across India.",
    ],
    subRoles: [
      {
        title: "Tech Intern",
        iconBg: "#e62d3e",
        points: ["Learned multitasking and cross-team collaboration."],
      },
      {
        title: "Associate",
        iconBg: "#e62d3e",
        points: ["Owned products and shipped campaign websites end-to-end."],
      },
      {
        title: "Senior Associate",
        iconBg: "#e62d3e",
        points: ["Led a pan-India team across multiple EdTech domains."],
      },
      {
        title: "Lead Instructor",
        iconBg: "#e62d3e",
        points: ["Awarded Knowledge Powerhouse of upGrad among 500+ employees."],
      },
      {
        title: "Principal Instructor",
        iconBg: "#e62d3e",
        points: ["Led the entire Full Stack vertical; created content reaching learners on YouTube."],
      },
    ],
  },
  {
    title: "SDE - II",
    company_name: "NxtWave",
    icon: nxtwave,
    iconBg: "#13131c",
    points: [
      "Moved to Hyderabad to work directly alongside the co-founders.",
      "Learning faster, thinking bigger, and solving harder problems every day.",
    ],
  },
];

export { services, technologies,experiences, Social, projects };
