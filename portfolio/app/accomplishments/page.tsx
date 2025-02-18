"use client";
import Link from 'next/link';

export default function Accomplishments() {
  const accomplishments = [
    {
      title: "Hunter Hub Solutions Lab",
      rank: "1st Place",
      description: "Pitch competition - designed an event-focused app that connects the immigration population in Calgary.",
      image: '/images/hh2023.png',
      link: 'https://ucalgary.ca/news/students-hunter-hub-solutions-lab-tackle-social-isolation-calgary#:~:text=As%20the%20winter%20term%20neared,with%20support%20from%20Experience%20Ventures.',
    },
    {
      title: "Engineering Pitch Competition",
      rank: "2nd Place",
      description: "Pitch competition - judged on innovative engineering product and analysis of market and competition. Designed an innovative long-term eyedropper.",
      image: '/images/droply.png',
      link: '',
    },
    {
      title: "Hunter Hub Solutions Lab",
      rank: "3rd Place",
      description: "Pitch competition - developed a B2C model with team members to address the lack of food resiliency in Albertan society",
      image: '/images/hh2021.jpg',
      link: 'https://ucalgary.ca/news/insects-food-students-showcase-innovative-ideas-building-resilient-food-system',
    },
    {
      title: "Hunter Hub Solutions Lab",
      rank: "3rd Place",
      description: "Pitch competition - designed an app that mobilizes community members to provide timely skill-matched assistance during natural disasters.",
      image: '/images/ralli.jpg',
      link: 'https://ucalgary.ca/news/emergicool-wins-first-place-experience-ventures-solutions-lab-finale',
    },
  ];

  return (
    <div className="w-full min-h-screen px-6 py-10" style={{paddingTop:'100px'}}>
      <h1 className="text-4xl font-bold mb-8 text-center">Accomplishments</h1>

      {/* <p className="text-lg text-center mb-12">
        Outside of coding, I love to keep my communication skills sharp and collaborate with people from different areas of expertise. That's why I often find myself participating in pitch competitions, where creative problem-solving and teamwork are key.
      </p> */}

      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {accomplishments.map((accomplishment, index) => (
            <Link href={accomplishment.link || "#"} key={index} target="_blank" passHref>
              <div className={`relative group cursor-pointer rounded-xl overflow-hidden shadow-xl timeline-card ${accomplishment.link ? '' : 'pointer-events-none'}`}>
                {index !== 0 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-0 mt-12 w-0 h-0 border-l-8 border-r-8 border-b-8 border-b-transparent border-l-transparent border-r-transparent border-t-white"></div>
                )}
                <img
                  src={accomplishment.image}
                  alt={accomplishment.title}
                  className="w-full h-64 object-cover transition-all duration-300 group-hover:scale-110 group-hover:blur-sm"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 p-6 flex flex-col justify-center items-center rounded-xl text-center">
                  <h3 className="text-3xl font-semibold text-white">{accomplishment.rank}</h3>
                  <h4 className="text-xl font-bold text-white mt-2">{accomplishment.title}</h4>
                  <p className="text-white mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {accomplishment.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
