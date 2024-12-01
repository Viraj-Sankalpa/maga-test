"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function MagaInBrief() {
  const [currentImage, setCurrentImage] = useState(
    "/images/about/magaInBrief/1pa.jpg"
  );

  // Define refs for detecting scroll above each content section
  const [ref1Trigger, inView1Trigger] = useInView({ threshold: 0.1 });
  const [ref2Trigger, inView2Trigger] = useInView({ threshold: 0.1 });
  const [ref3Trigger, inView3Trigger] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView1Trigger) setCurrentImage("/images/about/magaInBrief/1pa.jpg");
    else if (inView2Trigger)
      setCurrentImage("/images/about/magaInBrief/1FINAL-RHQ-3.jpg");
    else if (inView3Trigger)
      setCurrentImage("/images/about/magaInBrief/Water-Park-clip.png");
  }, [inView1Trigger, inView2Trigger, inView3Trigger]);

  return (
    <section className="min-h-screen text-white text-justify bg-[#00464d]">
      <section className="py-10 px-6">
        <motion.div
          className="container mx-auto text-center max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-[#F0F0F0] ml-4 my-2 inline-block relative">
            About <span className="text-blue-600">Us</span>
            <span className="absolute left-0 bottom-[-8px] w-full h-[2px] bg-blue-600"></span>
          </h2>
        </motion.div>
      </section>
      <div className="container mx-auto flex flex-col md:flex-row-reverse">
        {/* Scrolling Content */}
        <div className="xl:w-1/2 md:w-1/2 flex flex-col space-y-10 px-4">
          {/* Trigger Point for Maga in Brief */}
          <div ref={ref1Trigger} className="h-4"></div>

          {/* Maga in Brief */}
          <motion.div
            className="space-y-2"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <h2 className="text-4xl text-[#F0F0F0] font-bold pb-4">Maga in Brief</h2>
            <p className="text-lg text-[#D9D9D9] leading-relaxed">
              Since its establishment in 1984, Maga has been an active
              participant in the construction industry in Sri Lanka, making a
              significant contribution to its development by applying the
              knowledge and experience gained through working with international
              construction companies.
              <br/>
            </p>
            <p className="text-lg text-[#D9D9D9] leading-relaxed">
              Today, Maga has made an indelible imprint as the market leader and
              a model construction company of the country. It has provided
              leadership to Sri Lanka’s construction industry by achieving
              exceptional growth, quality of work, timely delivery whilst
              setting benchmarks in safety & environmental performance. This is
              evidenced by the company being named the leader of the
              Construction Sector by the National Chamber of Commerce of Sri
              Lanka for 6 consecutive years, being the only construction firm to
              receive Business Superbrands status and the first construction
              company to win the National Green Award. The Institution of
              Engineers Sri Lanka honoured the company with its first ever
              Engineering Excellence Award (for Infrastructure Development) in
              2008. <br/>
            </p>
            <p className="text-lg text-[#D9D9D9] leading-relaxed">
              Maga has won a record 90 National Construction Awards from the
              Construction Industry Development Authority (CIDA). The company
              won the prestigious International Federation of Asian and Western
              Pacific Contractors Association (IFAWPCA) Gold Medal for the
              construction of Apollo Hospital Colombo in 2002. The company is
              presently constructing the tallest building in Sri Lanka,
              47-Storey Hyatt Regency Hotel in Colombo valued at LKR 15.8
              billion and has recently completed the 100km highway from
              Anuradhapura to Tincomalee. The company has also completed the
              longest recent road rehabilitation project, the 158km long
              Matara–Wellawaya Road, which was delivered ahead-of-schedule
              garnering the praise of the European Union. <br/>
            </p>
            <p className="text-lg text-[#D9D9D9] leading-relaxed">
              Maga retains its Platinum rating and number 4 ranking in the Sri
              Lanka’s Corporate Accountability Index since 2016, in recognition
              of its sustainable construction practices and continuous
              commitment to social, environmental and financial accountability.
              The company has been involved in work on buildings of a built-up
              area of over 20,000,000sqft, road networks spanning over 3,500km
              in length and water projects serving over 3.5 million persons,
              along with many bridges and flyovers.
            </p>
          </motion.div>

          {/* Trigger Point for Vision */}
          <div ref={ref2Trigger} className="h-4"></div>

          <section id="vision-mission" >
          {/* Vision */}
          <motion.div
            className="space-y-2"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <h2 className="text-4xl text-[#F0F0F0] font-bold">Vision</h2>
            <p className="text-lg text-[#D9D9D9] leading-relaxed">
              To be the most competitive construction firm in Sri Lanka.
            </p>
          </motion.div>

          {/* Trigger Point for Mission */}
          <div ref={ref3Trigger} className="h-4"></div>

          {/* Mission */}
          <motion.div
            className="space-y-4"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <h2 className="text-4xl text-[#F0F0F0] font-bold">Mission</h2>
            <p className="text-lg text-justify text-[#D9D9D9] leading-relaxed pb-16">
              Maga is driven by excellence and is committed to ensure the
              satisfaction of customer needs with utmost care by constantly
              providing quality products and services at affordable prices.
            </p>
          </motion.div>
          </section>
        </div>

        {/* Sticky Image */}
        <div className="md:w-1/2 sticky top-0 h-screen flex items-center justify-center hidden md:flex">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex items-center justify-center"
          >
            <Image
              src={currentImage}
              alt="Dynamic Content"
              width={500}
              height={600}
              className="object-contain rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
