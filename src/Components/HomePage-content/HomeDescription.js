"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function DetailsSection() {
  const imageAnimation = useAnimation();
  const textAnimation = useAnimation();

  const [imageRef, imageInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const [textRef, textInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (imageInView) {
      imageAnimation.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.8 },
      });
    } else {
      imageAnimation.start({ opacity: 0, x: -50 });
    }
  }, [imageInView, imageAnimation]);

  useEffect(() => {
    if (textInView) {
      textAnimation.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.8 },
      });
    } else {
      textAnimation.start({ opacity: 0, x: 50 });
    }
  }, [textInView, textAnimation]);

  return (
    <section className="mb-0 bg-transparent py-16 px-4 lg:px-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        

        {/* Text */}
        <motion.div
          className="lg:w-1/2 w-full text-center lg:text-left"
          ref={textRef}
          animate={textAnimation}
          initial={{ opacity: 0, x: -50 }}
        >
          <h2 className="text-4xl font-bold text-[#00464d] ml-4 mb-4">
          Introduction <span className="text-blue-600"></span>
          </h2>
          <p className="text-lg text-white leading-relaxed ml-4  mb-6 ">
            A synonym for quality, speed and care, Maga Engineering is one of
            the most trusted construction companies in South Asia, delivering
            high-quality buildings and infrastructure for over three decades.
            From concept to conclusion, Maga continues to work with an array of
            stakeholders from investors and developers to public agencies and
            regional communities. As the largest construction company in Sri
            Lanka, its work has enriched all sectors of the economy, from
            healthcare and hospitality to transport and water supply.
          </p>
          <p className="text-lg text-white leading-relaxed ml-4">
            In bringing to life over 500 multi-disciplinary projects, Maga has
            set global benchmarks in project delivery and sustainability, from
            completing one of the fastest Tsunami rehabilitation projects, to
            building the world’s tallest vertical garden and the first LEED
            Platinum apparel factory. The company is anchored by an extensive
            resource base and driven by a dynamic workforce of over 10,500.
            Centered on an unwavering vision for sustainable development, Maga
            is helping reshape the evolving landscapes around us.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="lg:w-1/2 w-full mb-8 lg:mb-0"
          ref={imageRef}
          animate={imageAnimation}
          initial={{ opacity: 0, x: 50 }}
        >
          <Image
            src="/images/HomeDescription/1pa.jpg" 
            alt="Construction"
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
