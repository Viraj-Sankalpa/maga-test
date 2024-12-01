"use client";
import Completed from "./ProjectCard";

export default function CompletedProjectsList() {
  const projects = [
    {
      imageSrc: "/images/projects/completed/1.jpg",
      title: "New Manning Market Complex, Peliyagoda",
      description:
        "Colombo’s Manning Market is the oldest marketplace in the Country, dating back over hundred years. Part of a long overdue infrastructure and accessibility upgrade, the market is being relocated to its new home at the Peliyagoda commercial hub. More reminiscent of a stadium than a marketplace, the new building will herald a marked improvement from the market’s humble beginnings in Pettah.",
      linkText: "ACCESS TO THE JOB PORTAL",
      linkHref: "#",
    },
    {
      imageSrc: "/images/projects/completed/2.jpg",
      title: "Aster Residencies",
      description:
        "The flagship residential project of Aster Residencies (Pvt) Ltd., this 10-storey residential complex is located off Poorwarama Road, Nugegoda. Toted as Nugegoda’s finest residencies, the condominium is a BOI approved project carried out as a joint venture between Aster Residencies (Pvt) Ltd. and Maga Engineering. ",
      linkText: "VIEW OUR PROJECTS",
      linkHref: "#",
    },
    {
      imageSrc: "/images/projects/completed/3.jpg",
      title: "Galagedara-Mawathagama Water Supply Project",
      description:
        "The Galagedera-Mawathagama Water Supply Project is a large-scale rural water-supply scheme implemented by the NWSDB. The project provides pipe-borne water to an estimated 25,000 people in the eastern part of the Kurunegala District, and Galagedara, Paragahadeniya, and Mawathagama towns in the Kandy District. ",
      linkText: "LEARN MORE",
      linkHref: "#",
    },
    {
      imageSrc: "/images/projects/completed/4.jpg",
      title: "Le Grand Hotel, Galle",
      description:
        "Initiated by Asia Leisure in partnership with Belluna Co. Ltd. Japan, Le Grand Galle is a large 57-room property built on a cliff overlooking the Galle Fort. Designed by PWA architects, the property blends seamlessly with the natural landscape and boasts unspoiled views of the world heritage monument and the Indian ocean. ",
      linkText: "LEARN MORE",
      linkHref: "#",
    },
    {
      imageSrc: "/images/projects/completed/5.jpg",
      title: "Kandy City Centre",
      description:
        "Situated at the heart of the multi-layered capital of the hill country, the Kandy City Centre is a multi-billion rupee development which is due to house over 300 shops, offices, restaurants and entertainment facilities. ",
      linkText: "LEARN MORE",
      linkHref: "#",
    },
  ];

  return (
    <section className="py-8 px-6 bg-transparent">
      <div className="container mx-auto flex flex-col space-y-12">
        {projects.map((project, index) => (
          <Completed
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
