"use client";
import Link from 'next/link';

export default function Experience() {
  const projects = [
      {
      title: "Asset Integrity Data ToolKit (Capstone)",
      shortDescription: 'Flask, Python, MS SQL',
      longDescription: 'In collaboration with PETRONAS Canada, designed and implemented an ETL pipeline using Flask to streamline data ingestion, transformation, and integration processes for hundreds of thousand of data points.',
      image: '/images/petronas.jpg',
      link: 'https://devpost.com/software/wildex?ref_content=my-projects-tab&ref_feature=my_projectsr',
    },
      {
      title: "WildDex",
      shortDescription: 'React.js, PostgreSQL, Supabase',
      longDescription: 'WildDex allows users to "capture" wildlife sightings and build a personal wildlife index, aiding conservation efforts by helping researchers track animal habits and patterns.',
      image: '/images/wilddex.png',
      link: 'https://devpost.com/software/wildex?ref_content=my-projects-tab&ref_feature=my_projectsr',
    },
    {
      title: "Billboard Sample Hunter",
      shortDescription: 'Python, ScrapingBee',
      longDescription: 'Developed a web scraper using Python and ScrapingBee to extract song data from Billboard and WhoSampled to identify sampled tracks',
      image: '/images/billboard.jpg',
      link: 'https://github.com/suxxmjz/bb-sample-hunter',
    },
    {
      title: "KONA Link",
      shortDescription: 'Lua, JavaScript, HTML, CSS and SQLite',
      longDescription: 'Embedded web server for remote IoT gateway management (Tektelic).',
      image: '/images/konaLink.png',
      link: 'https://tektelic.com/products/applications/kona-link/',
    },
    {
      title: 'eBeat',
      shortDescription: 'Python, C',
      longDescription: 'Algorithm development for PPG-based vital signs on a wearable sensor. (Tektelic)',
      image: '/images/eBeat.png',
      link: 'https://tektelic.com/products/sensors/ebeat-arm-band-iot-device/',
    },
    {
      title: 'Vibefy',
      shortDescription: 'JavaScript, HTML, CSS, Spotify API',
      longDescription: 'Chrome extension that provides tailored music recommendations with the click of a button.',
      image: '/images/vibefy.png',
      link: 'https://chromewebstore.google.com/detail/vibefy/eiglmapmecbmbhanpifdkglmfgdnbinn',
    },
    {
      title: 'Mobile Device Farm',
      shortDescription: 'Python, Streamlit, Android Debug Bridge',
      longDescription: 'Automated ad scraping and classification, in collaboration with Health Canada.',
      image: '/images/dihlab.png',
      link: 'https://cumming.ucalgary.ca/lab/dih/projects/current-projects/AI-to-Protect-Children-from-Unhealthy-Food-Ads',
    },
    {
      title: 'EcoPlay',
      shortDescription: 'Unity, C#',
      longDescription: 'EcoPlay offers an interactive adventure for kids, combining education and entertainment to teach them about recycling, water conservation, and biodiversity through exciting missions and games.',
      image: '/images/ecoplay.png',
      link: 'https://devpost.com/software/eco-play',
    },
  ];

  return (
    <div className="w-full min-h-screen px-6 py-10" style={{paddingTop:'100px'}}>
      <h1 className="text-4xl font-bold mb-8 text-center">Experience and Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Link href={project.link} key={index} target="_blank" passHref>
            <div className="relative group cursor-pointer">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="text-white mt-2">{project.shortDescription}</p>
                
                <p className="text-white mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.longDescription}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
