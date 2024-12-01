'use client';
import Image from "next/image";

export default function ProjectCards({
  imageSrc,
  title,
  description,
  linkText,
  linkHref,
  reverse,
}: {
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
        reverse ? "md:flex-row-reverse justify-between" : "md:flex-row justify-between"
      } items-center gap-8 py-8`}
    >
      {/* Image Section */}
      <div className={`md:w-1/2 flex ${reverse ? "justify-end" : "justify-start"}`}>
        <Image
          src={imageSrc}
          alt={title}
          width={500}
          height={300}
          className="rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Content Section */}
      <div
        className={`md:w-1/2 flex flex-col ${
          reverse ? "items-start text-left" : "items-start text-left"
        }`}
      >
        {/* Title close to the image */}
        <h2 className="text-3xl font-bold text-[#00464d] mb-4">{title}</h2>
        {/* Description */}
        <p className="text-base text-gray-600 text-justify font-medium leading-relaxed mb-6">
          {description}
        </p>
        {/* Link */}
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
