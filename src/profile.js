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
    name: "Lua",
    svg: 'M225.84958,128.023789 C225.84958,73.9999493 182.004106,30.1547455 127.980536,30.1547455 C73.9569673,30.1547455 30.1114931,73.9999493 30.1114931,128.023789 C30.1114931,182.047358 73.9569673,225.892832 127.980536,225.892832 C182.004106,225.892832 225.84958,182.047358 225.84958,128.023789 M197.194881,87.4746864 C197.194881,71.6516156 184.35271,58.8094446 168.529639,58.8094446 C152.706568,58.8094446 139.864397,71.6516156 139.864397,87.4746864 C139.864397,103.297757 152.706568,116.139928 168.529639,116.139928 C184.35271,116.139928 197.194881,103.297757 197.194881,87.4746864 M254.515092,30.1544752 C254.515092,14.3314044 241.672921,1.48923337 225.84985,1.48923337 C210.026779,1.48923337 197.184608,14.3314044 197.184608,30.1544752 C197.184608,45.9775459 210.026779,58.819717 225.84985,58.819717 C241.672921,58.819717 254.515092,45.9775459 254.515092,30.1544752 M61.2496895,113.756182 L69.8085238,113.756182 L69.8085238,169.409554 L101.506027,169.409554 L101.506027,176.936008 L61.2496895,176.936008 L61.2496895,113.756182 M116.946044,130.87385 L116.946044,161.45301 C116.946044,163.804317 117.309094,165.725804 118.035464,167.216118 C119.375476,169.968591 121.874653,171.345098 125.533263,171.345098 C130.782209,171.345098 134.356748,168.936482 136.255797,164.119518 C137.288718,161.538974 137.805314,157.998226 137.805314,153.496194 L137.805314,130.87385 L145.546948,130.87385 L145.546948,176.936008 L138.235404,176.936008 L138.321639,170.14079 C137.335755,171.889808 136.111442,173.366336 134.648431,174.570644 C131.750522,176.979261 128.233833,178.183569 124.098365,178.183569 C117.655113,178.183569 113.266348,175.989863 110.931531,171.60299 C109.665588,169.252494 109.032482,166.112642 109.032482,162.183975 L109.032482,130.87385 L116.946044,130.87385 M182.879426,149.059582 C184.656828,148.831426 185.847079,148.086674 186.449098,146.827489 C186.792414,146.136532 186.964612,145.14389 186.964612,143.848211 C186.964612,141.200625 186.027117,139.279409 184.152938,138.084562 C182.278488,136.890256 179.595759,136.292832 176.105563,136.292832 C172.070657,136.292832 169.208701,137.387928 167.520507,139.57758 C166.576253,140.788646 165.961529,142.589567 165.675252,144.980612 L158.449943,144.980612 C158.592946,139.287248 160.433064,135.326682 163.969757,133.097833 C167.50645,130.869525 171.608938,129.755506 176.27695,129.755506 C181.689174,129.755506 186.085508,130.787886 189.46514,132.852106 C192.815848,134.916596 194.491067,138.128084 194.491067,142.486843 L194.491067,169.024608 C194.491067,169.82748 194.655696,170.472752 194.985766,170.959341 C195.315024,171.44593 196.010577,171.688955 197.071611,171.688955 C197.415738,171.688955 197.802847,171.667599 198.232938,171.624617 C198.663029,171.581635 199.121233,171.517567 199.609174,171.431603 L199.609174,177.151189 C198.404866,177.495316 197.487105,177.710496 196.856701,177.79619 C196.225757,177.882154 195.365305,177.925407 194.276156,177.925407 C191.609647,177.925407 189.674103,176.979261 188.469795,175.08724 C187.838851,174.084325 187.394703,172.664836 187.136541,170.830395 C185.559451,172.894615 183.294108,174.686074 180.341322,176.205584 C177.387725,177.724283 174.132984,178.484444 170.57818,178.484444 C166.305385,178.484444 162.815189,177.188224 160.105698,174.596866 C157.395937,172.005508 156.041326,168.762391 156.041326,164.867514 C156.041326,160.600938 157.374581,157.293212 160.04109,154.945149 C162.707599,152.597086 166.205364,151.150294 170.535197,150.605854 L182.879426,149.059582 M166.578416,169.973457 C168.212815,171.261026 170.148089,171.904135 172.384777,171.904135 C175.108325,171.904135 177.745909,171.274272 180.29834,170.015088 C184.598978,167.924917 186.749432,164.504465 186.749432,159.75211 L186.749432,153.52593 C185.804638,154.130112 184.588976,154.633191 183.101094,155.035979 C181.613212,155.439037 180.153715,155.726125 178.723143,155.897242 L174.044317,156.49899 C171.240211,156.871231 169.131388,157.457842 167.718116,158.259092 C165.323556,159.60343 164.127088,161.749288 164.127088,164.695316 C164.127088,166.926598 164.944017,168.685888 166.578416,169.973457 M132.532038,255.92566 L132.429584,252.990986 C136.058458,252.864473 139.716798,252.578467 143.302691,252.140266 L143.658712,250.508318 C148',
    faClass: 'fab fa-lua',
  },
  {
    name: "C",
    faClass: "fab fa-c",
  },
  {
    name: "HTML",
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
    name: "SQL",
    // svg: '',
    faClass: "fas fa-database",
  },
];
const section3Title = "My Work";
const projects = [
  {
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
const section5Title = "Let's Connect!";
const contact = {
  pitch:
    "I'm currently looking for new grad opportunities!",
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
