const animation = {
  animate: false,
  duration: 750,
  once: false,
};
const header = {
  name: "Sukriti",
};
const background = {
  type: "Particle",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "I'm a final year software engineering student at the University of Calgary, with experience in full-stack development and algorithm design. I've currently found myself exploring machine learning! In my spare time, I enjoy playing the piano and producing music.",
};
const skillsBar = [
  {
    name: "Python",
    // svg: '',
    faClass: "fab fa-python",
  },
  {
    name: "HTML",
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "Node",
    // svg: '',
    faClass: "fab fa-node",
  },

  {
    name: "Lua",
    svg: 'lua.svg',
    faClass: '',
  },
  {
    name: "Database",
    // svg: '',
    faClass: "fas fa-database",
  },
];
const section3Title = "My Work";
const projects = [
  {
    // Add image in './styles/images.css' in #project4
    id: "eBeat",
    name: "eBeat",
    skills: ["C, Python"],
    description: "Algorithm development for PPG-based vital signs on a wearable sensor.",
    url: "https://tektelic.com/products/sensors/ebeat-arm-band-iot-device/",
  },
  {
    id: "konalink",
    name: "KONA Link",
    description: "Remote TEKTELIC Gateway Management",
    skills: ["Lua, HTML, CSS, JS"],
    url: "https://tektelic.com/products/applications/kona-link/",
  },
  {
    id: "vibefy",
    name: "Vibefy",
    description: "Chrome extension that provides tailored music recommendations with the click of a button.",
    skills: ["JS, HTML, CSS, Spotify API"],
    url: "https://chromewebstore.google.com/detail/vibefy/eiglmapmecbmbhanpifdkglmfgdnbinn",
  },
  {
    id: "dihlab",
    name: "Mobile Device Farm",
    description: "Automated ad scraping and classification, in collaboration with Health Canada.",
    skills: ["Python, Android"],
    url: "https://cumming.ucalgary.ca/lab/dih/projects/current-projects/AI-to-Protect-Children-from-Unhealthy-Food-Ads",
  },
  {
    id: "ecoplay",
    name: "EcoPlay",
    description: "EcoPlay offers an interactive adventure for kids, combining education and entertainment to teach them about recycling, water conservation, and biodiversity through exciting missions and games.",
    skills: ["Unity, C#"],
    url: "https://devpost.com/software/eco-play",
  },
];

const section4Title = "Other Accomplishments";
const miscellaneous = [
  {
    id: "hh2023",
    name: "Hunter Hub: Addressing Social Isolation in Calgary",
    description:"Designed an event-focused app that connects the immigration population in Calgary. Placed 1st.",
    url: "https://ucalgary.ca/news/students-hunter-hub-solutions-lab-tackle-social-isolation-calgary#:~:text=As%20the%20winter%20term%20neared,with%20support%20from%20Experience%20Ventures.",
  },
  {
    id: "hh2021",
    name: "Hunter Hub: Food Resiliency Challenge",
    description: "Developed a B2C model with team members to address the lack of food resiliency in Albertan society. Placed 3rd.",
    url: "https://ucalgary.ca/news/insects-food-students-showcase-innovative-ideas-building-resilient-food-system",
  },
];
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "I'm currently looking for new opportunities!",
  copyright: "Sukriti Sharma",
  contactUrl: "",
};
const social = {
  github: "https://github.com/suxxmjz",
  linkedin: "https://www.linkedin.com/in/sukritisharma02/m"
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
