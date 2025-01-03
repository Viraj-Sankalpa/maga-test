import {
    IconSignature,
    IconTableColumn
} from "@tabler/icons-react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

export function OngoingProjects() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "Galle Techno-Park",
    description:
      "The Galle Techno-Park is located in the Galle District, close to the Southern Expressway Pinnaduwa interchange. Construction of the complex was envisioned by the Ministry of Information Technology in line with the National Policy Framework and the President’s vision.",
    header: (
      <Image
        src={"/images/projects/ongoing/1.jpg"}
        alt="Dynamic Content"
        width={500}
        height={500}
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   "
      />
    ),
    className: "md:col-span-2",
  },
  {
    title: "Malapalla Housing Complex",
    description: "The project is a component of the government’s Railway Efficiency Improvement Project (REIP) and Colombo Suburban Railway Project (CSRP) implemented by the Ministry of Transport and funded by the Asian Development Bank (ADB). ",
    header: <Image
    src={"/images/projects/ongoing/2.jpg"}
    alt="Dynamic Content"
    width={500}
    height={500}
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   "
  />,
    className: "md:col-span-1",
 
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
