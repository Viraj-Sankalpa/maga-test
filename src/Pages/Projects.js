"use client";

import { ProjectTabs } from "@/Components/Project-comp/ProjectTabs";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="mt-20">
      <section className="py-10 px-6">
        <motion.div
          className="container mx-auto text-center max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-[#00464d] ml-4 mb-2 inline-block relative">
            All <span className="text-blue-600">Projects</span>
            <span className="absolute left-0 bottom-[-8px] w-full h-[2px] bg-blue-600"></span>
          </h2>
        </motion.div>
      </section>
     

      <ProjectTabs />
    
      
      
    </div>
  );
}

export default Projects;
