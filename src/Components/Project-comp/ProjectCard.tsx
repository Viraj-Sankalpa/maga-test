'use client'
import Image from "next/image";

export default function ProjectCards({ imageSrc, title, description, linkText, linkHref, reverse }: {
  imageSrc: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-8 py-8 `}
      
    >

      <div className="md:w-1/2">
        <Image
          src={imageSrc}
          alt={title}
          width={500}
          height={300}
          className="rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold text-[#00464d] mb-4">{title}</h2>
        <p className="text-base text-gray-600 font-medium leading-relaxed mb-6">{description}</p>
        <a
          href={linkHref}
          className="text-xs text-[#00464d] font-bold hover:underline inline-flex items-center"
        >
          {linkText}
          <span className="ml-2 text-yellow-500">→</span>
        </a>
      </div>
    </div>
  );
}
