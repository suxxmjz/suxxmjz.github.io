"use client";
import React, { useRef } from 'react';

export default function Experience() {

 const career = [
    {
      id: 1,
      title: "Software Engineering Intern",
      company: "TEKTELIC",
      location: "Calgary, AB",
      period: "May 2023 - Aug 2024",
      description: [
        "Led development of a Lua-based full-stack app for IoT gateway configuration, reducing load times from 10 seconds to 1 ms and halving flash memory storage.",
        "Developed C firmware with medical algorithms for vital signs on wearable sensors.",
        "Built Python tools for encoding/decoding payloads, boosting cloud integration efficiency."
      ],
      current: false
    },
    {
      id: 2,
      title: "Software Developer",
      company: "Data Intelligence for Health Lab (DIHL)",
      location: "Calgary, AB",
      period: "May 2022 - Aug 2023",
      description: [
        "Developed a Python web server to automate scraping of unhealthy food ads targeting children on social media.",
        "Built SQL database to catalog up to 40,000 ads/month, integrating with a machine learning pipenline for further analysis.",
        "Maintained compliance by collaborating with Health Canada and research teams."
      ],
      current: false
    },
    {
      id: 3,
      title: "Web Developer",
      company: "TechStart",
      location: "Calgary, AB",
      period: "Oct 2021 - Jul 2022",
      description: [
        <>
          Revamped the <a href="https://techstartucalgary.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">TechStart</a> website, doubling visitor engagement with strategic design improvements.
        </>,
        "Used HTML, TypeScript, CSS, React.js, and Node.js to fix bugs, address customer requests, and add site components.",
      ],
      current: false
    }
  ];
  const projects = [
      {
      title: "Asset Integrity Data ToolKit (Capstone Gold Winner)",
      shortDescription: 'Flask, Python, MS SQL',
      longDescription: 'Engineered a predictive analysis tool using machine learning to identify and mitigate erosion-prone points in piping systems for PETRONAS Canada, leveraging historical data from nearly half a million measurement points to optimize inspection intervals.',
      image: '/images/petronas.jpg',
      link: '/images/AIDT_poster.jpg',
      relatedCareerId: 0
    },
      {
      title: "WildDex",
      shortDescription: 'React.js, PostgreSQL, Supabase',
      longDescription: 'WildDex allows users to capture wildlife sightings and build a personal wildlife index, aiding conservation efforts by helping researchers track animal habits and patterns.',
      image: '/images/wilddex.png',
      link: 'https://devpost.com/software/wildex?ref_content=my-projects-tab&ref_feature=my_projectsr',
      relatedCareerId: 0
    },
    {
      title: "Billboard Sample Hunter",
      shortDescription: 'Python, ScrapingBee',
      longDescription: 'Developed a web scraper using Python and ScrapingBee to extract song data from Billboard and WhoSampled to identify sampled tracks',
      image: '/images/billboard.jpg',
      link: 'https://github.com/suxxmjz/bb-sample-hunter',
      relatedCareerId: 0
    },
    {
      title: "KONA Link (Tektelic)",
      shortDescription: 'Lua, JavaScript, HTML, CSS and SQLite',
      longDescription: 'Embedded web server for remote IoT gateway management.',
      image: '/images/konaLink.png',
      link: 'https://tektelic.com/products/applications/kona-link/',
      relatedCareerId: 1
    },
    {
      title: 'eBeat (Tektelic)',
      shortDescription: 'Python, C',
      longDescription: 'Algorithm development for PPG-based vital signs on a wearable sensor. (Tektelic)',
      image: '/images/eBeat.png',
      link: 'https://tektelic.com/products/sensors/ebeat-arm-band-iot-device/',
      relatedCareerId: 1
    },
    {
      title: 'Vibefy',
      shortDescription: 'JavaScript, HTML, CSS, Spotify API',
      longDescription: 'Chrome extension that provides tailored music recommendations with the click of a button. To view, please open in a Chrome browser while signed in.',
      image: '/images/vibefy.png',
      link: 'https://chromewebstore.google.com/detail/vibefy/eiglmapmecbmbhanpifdkglmfgdnbinn',
      relatedCareerId: 0
    },
    {
      title: 'Mobile Device Farm (DIHL)',
      shortDescription: 'Python, Streamlit, Android Debug Bridge',
      longDescription: 'Automated ad scraping and classification, in collaboration with Health Canada.',
      image: '/images/dihlab.png',
      link: 'https://cumming.ucalgary.ca/lab/dih/projects/current-projects/AI-to-Protect-Children-from-Unhealthy-Food-Ads',
      relatedCareerId: 2
    },
    {
      title: 'EcoPlay',
      shortDescription: 'Unity, C#',
      longDescription: 'EcoPlay offers an interactive adventure for kids, combining education and entertainment to teach them about recycling, water conservation, and biodiversity through exciting missions and games.',
      image: '/images/ecoplay.png',
      link: 'https://devpost.com/software/eco-play',
      relatedCareerId: 0
    },
  ];

  const projectRefs = useRef<Array<React.RefObject<HTMLDivElement | null>>>(projects.map(() => React.createRef()));

  const scrollToProject = (projectIndex: number) => {
    const selectedProject = projectRefs.current[projectIndex].current as HTMLDivElement;
    selectedProject.scrollIntoView({ behavior: 'smooth' });
  
    selectedProject.style.transition = 'transform 0.5s ease';
    selectedProject.style.transform = 'scale(1.05)'
    
    setTimeout(() => {
      selectedProject.style.transform = 'scale(1)';
    }, 1000);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full px-6 py-10" style={{paddingTop:'100px'}}>
        <h1 className="text-4xl font-bold mb-8 text-center">Experience</h1>

        <section className="mb-16">
  <div className="max-w-6xl mx-auto">
    {/* Desktop Timeline */}
    <div className="hidden md:block relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-gray-300" style={{ borderRadius: '0.25rem' }}></div>
      {career.map((job, index) => (
        <div key={index} className={`relative flex items-center justify-between mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
          <div className="w-5/12">
            <div className={`rounded-xl shadow-lg p-4`} style={{ backgroundColor: 'black', border: '2px solid', borderImage: 'linear-gradient(45deg, white, blue) 1', borderRadius: '1rem' }}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-white">{job.title}</h3>
              </div>
              <p className="text-gray-300 font-medium mb-1">{job.company} • {job.location}</p>
              <p className="text-xs text-gray-400 mb-2">{job.period}</p>
              <ul className="space-y-1">
                {job.description.map((item, idx) => (
                  <li key={idx} className="text-xs text-gray-300 flex items-start">
                    <span className="text-blue-500 mr-2 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                {projects.filter(p => p.relatedCareerId === job.id).length > 0 && (
                  <h4 className="text-sm font-semibold text-white mb-2">Related Projects:</h4>
                )}
                <ul className="space-y-1">
                  {projects.filter(p => p.relatedCareerId === job.id).map((project, idx) => (
                    <li key={idx} className="text-xs text-blue-500 cursor-pointer" onClick={() => scrollToProject(idx)}>
                      {project.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-md ${
            job.current ? 'bg-blue-500' : 'bg-gray-400'
          } z-10`}></div>
          <div className={`absolute top-1/2 transform -translate-y-1/2 h-0.5 ${
            index % 2 === 0 
              ? 'right-1/2 w-4 from-transparent to-gray-300' 
              : 'left-1/2 w-4 from-gray-300 to-transparent'
          } bg-gradient-to-r`}></div>
          <div className="w-5/12"></div>
        </div>
      ))}
    </div>

    {/* Mobile Timeline */}
    <div className="md:hidden">
      {career.map((job, index) => (
        <div key={index} className="relative flex flex-col items-start mb-8 pl-4">
          {/* Timelime line */}
          {index !== career.length - 1 && (
            <div className="absolute left-2 top-5 w-0.5 h-full bg-gradient-to-b from-blue-500 to-gray-300"></div>
          )}
          <div className={`absolute left-0 w-4 h-4 rounded-full border-4 border-white shadow-md ${
            job.current ? 'bg-blue-500' : 'bg-gray-400'
          }`}></div>
          <div className="ml-6 bg-black rounded-xl shadow-lg p-4" style={{ border: '2px solid', borderImage: 'linear-gradient(45deg, white, blue) 1', borderRadius: '1rem' }}>
            <h3 className="text-lg font-bold text-white">{job.title}</h3>
            <p className="text-gray-300 font-medium">{job.company} • {job.location}</p>
            <p className="text-xs text-gray-400 mb-2">{job.period}</p>
            <ul className="space-y-1">
              {job.description.map((item, idx) => (
                <li key={idx} className="text-xs text-gray-300 flex items-start">
                  <span className="text-blue-500 mr-2 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              {projects.filter(p => p.relatedCareerId === job.id).length > 0 && (
                <h4 className="text-sm font-semibold text-white mb-2">Related Projects:</h4>
              )}
              <ul className="space-y-1">
                {projects.filter(p => p.relatedCareerId === job.id).map((project, idx) => (
                  <li key={idx} className="text-xs text-blue-500 cursor-pointer" onClick={() => scrollToProject(idx)}>
                    {project.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        <section>
          <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div ref={projectRefs.current[index]} key={index} className="relative group cursor-pointer">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg p-6">
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="text-white mt-2">{project.shortDescription}</p>
                    <p className="text-white mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{project.longDescription}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="w-full text-white text-center py-4 text-sm">
        <p>&copy; 2025 Sukriti Sharma. All Rights Reserved.</p>
      </footer>
    </div>
  );
}