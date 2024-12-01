'use client'
import Ongoing from "./ProjectCard";

export default function OngoingProjectsList() {
  const projects = [
    {
      imageSrc: "/images/projects/ongoing/1.jpg",
      title: "Galle Techno-Park",
      description:
        "The Galle Techno-Park is located in the Galle District, close to the Southern Expressway Pinnaduwa interchange. Construction of the complex was envisioned by the Ministry of Information Technology in line with the National Policy Framework and the President’s vision. ",
      linkText: "ACCESS TO THE PORTAL",
      linkHref: "#",
    },
    {
      imageSrc: "/images/projects/ongoing/2.jpg",
      title: "Malapalla Housing Complex",
      description:
        "The project is a component of the government’s Railway Efficiency Improvement Project (REIP) and Colombo Suburban Railway Project (CSRP) implemented by the Ministry of Transport and funded by the Asian Development Bank (ADB). ",
      linkText: "VIEW OUR PROJECTS",
      linkHref: "#",
    },
    {
      imageSrc: "/images/projects/ongoing/3.jpg",
      title: "Railway Operation HQ & Train Control Centre at Maradana",
      description:
        "Construction of the new Railway Operation Headquarters (OH) and Train Control Centre (TCC) at Maradana are part of the government’s Railway Efficiency Improvement Project (REIP) and Colombo Suburban Railway Project (CSRP) implemented by the Ministry of Transport and funded by the Asian Development Bank (ADB). ",
      linkText: "LEARN MORE",
      linkHref: "#",
    },
    {
      imageSrc: "/images/projects/ongoing/4.jpg",
      title: "Colombo-Kandy Road (A-1)",
      description:
        "The project involves rehabilitation, improvement, and maintenance of a 14km section of the Colombo-Kandy (A-1) Highway. ",
      linkText: "LEARN MORE",
      linkHref: "#",
    },
    {
      imageSrc: "/images/projects/ongoing/5.jpg",
      title: "Justice Akbar Mawatha & Uttarananda Mawatha Flyovers",
      description:
        "The project involves Design and Construction of two flyovers in Slave Island (Colombo 02) along Justice Akbar Mawatha and Uttarananda Mawatha and a connecting flyover between the two. ",
      linkText: "LEARN MORE",
      linkHref: "#",
    },
  ];

  return (
    <section className="py-8 px-6 bg-transparent">
      <div className="container mx-auto flex flex-col space-y-12">
        {projects.map((project, index) => (
          <Ongoing
            key={index}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
            linkText={project.linkText}
            linkHref={project.linkHref}
            reverse={index % 2 !== 0} 
          />
        ))}
      </div>
    </section>
  );
}
