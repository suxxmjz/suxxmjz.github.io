"use client";
import { useEffect, useRef } from "react";
import * as d3 from "d3";

interface SkillNode extends d3.SimulationNodeDatum {
  category: string;
  name: string;
  id: string;
}

interface SkillLink extends d3.SimulationLinkDatum<SkillNode> {
  source: string;
  target: string;
}

export default function About() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  const skillsData: SkillNode[] = [
    { category: "Languages", name: "Python", id: "Python" },
    { category: "Languages", name: "JavaScript", id: "JavaScript" },
    { category: "Languages", name: "TypeScript", id: "TypeScript" },
    { category: "Languages", name: "Lua", id: "Lua" },
    { category: "Languages", name: "SQL", id: "SQL" },
    { category: "Languages", name: "C", id: "C" },

    { category: "Frameworks", name: "React.js", id: "React.js" },
    { category: "Frameworks", name: "Next.js", id: "Next.js" },
    { category: "Frameworks", name: "Flask", id: "Flask" },
    { category: "Frameworks", name: "Express.js", id: "Express.js" },
    { category: "Frameworks", name: "Prisma", id: "Prisma" },

    { category: "Tools", name: "Docker", id: "Docker" },
    { category: "Tools", name: "Git", id: "Git" },
    { category: "Tools", name: "Azure", id: "Azure" },
    { category: "Tools", name: "Linux", id: "Linux" },
    { category: "Tools", name: "REST", id: "REST" },
    { category: "Tools", name: "Web-Scraping", id: "Web-Scraping" },
    { category: "Tools", name: "ETL", id: "ETL" },
    { category: "Tools", name: "Data Engineering", id: "Data Engineering" },
    { category: "Tools", name: "Authentication", id: "Authentication" },
    { category: "Tools", name: "Algorithm Development", id: "Algorithm Development" },
  ];

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const width = isMobile ? 350 : 800;
    const height = isMobile ? 400 : 600;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    const color = d3.scaleOrdinal(d3.schemeTableau10);

    const nodes: SkillNode[] = skillsData.map((d) => ({ ...d }));
    const links: SkillLink[] = nodes.map((node) => ({
      source: "Software Engineering",
      target: node.id,
    }));

    nodes.push({ 
      name: "Software Engineering", 
      category: "Root", 
      id: "Software Engineering" 
    });

    const simulation = d3
      .forceSimulation<SkillNode>(nodes)
      .force(
        "link",
        d3
          .forceLink<SkillNode, SkillLink>(links)
          .id((d: SkillNode) => d.id)
          .distance(isMobile ? 60 : 120)
      )
      .force("charge", d3.forceManyBody().strength(isMobile ? -250 : -500))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide(isMobile ? 25 : 50));

    const link = svg
      .selectAll(".link")
      .data(links)
      .enter()
      .append("line")
      .attr("stroke", "#3b82f6")
      .attr("stroke-width", isMobile ? 1.5 : 2)
      .attr("opacity", 0.6);

    const node = svg
      .selectAll(".node")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("r", isMobile ? 6 : 10)
      .attr("fill", (d) => (d.category === "Root" ? "#facc15" : color(d.category)))
      .call(
        d3
          .drag<SVGCircleElement, SkillNode>()
          .on("start", (event, d) => {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          })
          .on("drag", (event, d) => {
            d.fx = event.x;
            d.fy = event.y;
          })
          .on("end", (event, d) => {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          })
      );

    const text = svg
      .selectAll(".label")
      .data(nodes)
      .enter()
      .append("text")
      .attr("fill", "#fff")
      .attr("font-size", isMobile ? "10px" : "14px")
      .attr("text-anchor", "middle")
      .attr("dy", -12)
      .text((d) => d.name);

    simulation.on("tick", () => {
      link
        .attr("x1", (d) => (d.source as unknown as SkillNode).x!)
        .attr("y1", (d) => (d.source as unknown as SkillNode).y!)
        .attr("x2", (d) => (d.target as unknown as SkillNode).x!)
        .attr("y2", (d) => (d.target as unknown as SkillNode).y!);

      node.attr("cx", (d) => d.x!).attr("cy", (d) => d.y!);
      text.attr("x", (d) => d.x!).attr("y", (d) => d.y!);
    });

  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center text-white px-6 py-10 space-y-10 md:space-y-0 md:space-x-10" style={{ paddingTop: '80px' }}>
      <div className="w-full md:w-1/2 text-center md:text-left md:pl-5">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          I&apos;m a final-year software engineering student at the University of Calgary,
          with experience in full-stack development and algorithm design.
          When I&apos;m not coding, you&apos;ll find me tinkering with music - whether it&apos;s playing
          the piano or producing tracks 🎹
        </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <svg ref={svgRef} className="max-w-full h-auto"></svg>
      </div>
    </div>
  );
}