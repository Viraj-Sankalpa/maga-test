"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Contact() {
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-transparent py-16">
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row items-center md:justify-between gap-6"
          initial="hidden"
          animate="visible"
          variants={containerVariant}
        >
          {/* Left Section */}
          <motion.div
            className=" bg-gray-300 shadow-lg rounded-lg p-8 md:w-1/2 hidden md:flex relative "
            whileInView="visible"
            initial="hidden"
            variants={itemVariant}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Logo Section */}
            <motion.div
              className="flex-shrink-0 flex items-center justify-center "
              whileInView="visible"
              initial="hidden"
              variants={itemVariant}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Image
                src="/images/logo/Maga-Logo.png"
                alt="Logo"
                width={150}
                height={150}
                className="m-8 object-contain"
              />
            </motion.div>

            {/* Text Section */}
            <motion.div
              className="ml-16"
              whileInView="visible"
              initial="hidden"
              variants={itemVariant}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-[#00464d] mb-4">
                Let's get in touch
              </h2>
              <address className="text-gray-600 mb-6 not-italic">
                Maga Engineering (Pvt) Ltd <br /> 200, Nawala Road,<br /> Narahenpita,<br /> Colombo 05, <br /> Sri Lanka. <br />
                Tel: +94 11 2808835 - 2808844
                <br />
                Fax: +94 11 2808846 -47
                <br />
                <a href="mailto:maga@maga.lk" className="text-[#00464d]">
                  maga@maga.lk
                </a>
              </address>
              <p className="text-gray-600 mb-4">Connect with us :</p>
              <motion.div
                className="flex space-x-4"
                whileInView="visible"
                initial="hidden"
                variants={containerVariant}
                viewport={{ once: false, amount: 0.3 }}
              >
                {/* Social Media Icons */}
                <motion.button
                  className="bg-[#00464d] w-10 h-10 rounded-lg flex items-center justify-center text-white hover:bg-[#046f79] transition"
                  aria-label="Facebook"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaFacebookF />
                </motion.button>
                <motion.button
                  className="bg-[#00464d] w-10 h-10 rounded-lg flex items-center justify-center text-white hover:bg-[#046f79] transition"
                  aria-label="Instagram"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaInstagram />
                </motion.button>
                <motion.button
                  className="bg-[#00464d] w-10 h-10 rounded-lg flex items-center justify-center text-white hover:bg-[#046f79] transition"
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaLinkedinIn />
                </motion.button>
                <motion.button
                  className="bg-[#00464d] w-10 h-10 rounded-lg flex items-center justify-center text-white hover:bg-[#046f79] transition"
                  aria-label="YouTube"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaYoutube />
                </motion.button>
              </motion.div>
            </motion.div>
            <div className="absolute -z-10 top-10 left-10 w-48 h-48 rounded-full bg-gradient-to-r from-[#00464d] to-[#046f79] opacity-20"></div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="bg-[#00464d] shadow-lg rounded-lg p-8 md:w-1/2 relative"
            whileInView="visible"
            initial="hidden"
            variants={itemVariant}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">Contact us</h2>
            <motion.form
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              variants={containerVariant}
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 rounded-lg bg-transparent border border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-teal-200"
                variants={itemVariant}
              />
              <motion.input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-lg bg-transparent border border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-teal-200"
                variants={itemVariant}
              />
              <motion.input
                type="text"
                placeholder="Phone"
                className="w-full px-4 py-2 rounded-lg bg-transparent border border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-teal-200"
                variants={itemVariant}
              />
              <motion.textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-transparent border border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-teal-200"
                variants={itemVariant}
              ></motion.textarea>
              <motion.button
                type="submit"
                className="w-full bg-white text-[#00464d] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
                variants={itemVariant}
                whileHover={{ scale: 1.05 }}
              >
                Send
              </motion.button>
            </motion.form>
            <div className="absolute -z-10 top-20 right-10 w-48 h-48 rounded-full bg-gradient-to-r from-[#00464d] to-[#046f79] opacity-20"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
