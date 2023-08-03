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
  // meta,
  // starbucks,
  // tesla,
  // shopify,
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
    title: "UI / UX",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    
    image: "https://media.licdn.com/dms/image/C4E03AQGj9gXocvA27A/profile-displayphoto-shrink_800_800/0/1636467696053?e=2147483647&v=beta&t=hkPuFdsW818Y5YqyRLgsElvEt2o6VmJKYJxMeHDgIIQ",
  },
  {
    handle:
      "_o_m_k_a_r_2711",
    handle_link:"https://www.instagram.com/_o_m_k_a_r_2711/",
    name: "Instagram",
    image: "https://cdn.inflact.com/media/302969218_448846463940554_7880785948914438942_n.jpg?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-19%2F302969218_448846463940554_7880785948914438942_n.jpg%3Fstp%3Ddst-jpg_s320x320%26_nc_ht%3Dinstagram.ftdg1-1.fna.fbcdn.net%26_nc_cat%3D102%26_nc_ohc%3DF6cr6BpjxagAX9OwhkZ%26edm%3DAOQ1c0wBAAAA%26ccb%3D7-5%26oh%3D00_AfDtBiPMmF2JOpcDZT7WeOjrwyE4AUQDdxBnRC02KhEPYw%26oe%3D64CE889A%26_nc_sid%3D8b3546&time=1690970400&key=497cd3752ea6918880c63dc8aa53eb53",
  },
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

export { services, technologies, Social, projects };
