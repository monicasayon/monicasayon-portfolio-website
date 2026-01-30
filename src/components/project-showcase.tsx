"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

// 1. Define your project data
const projects = [
  {
    id: "01",
    title: "Landing Page",
    category: "Web Design",
    desc: "A minimalist UI design focusing on typography and whitespace.",
    path: "/projects/landing-page/index.html",
  },
  {
    id: "02",
    title: "Tribute Page",
    category: "Web Design",
    desc: "A  minimalist tribute page of Virginia Woolf using HTML5 and CSS3.",
    path: "/projects/tribute-page/index.html",
  },
  {
    id: "03",
    title: "City Skyline",
    category: "Responsive Web Design",
    desc: "A responsive HTML and Vanilla CSS project showcasing city skyline. Day and Night Activated by Window Width changes.",
    path: "/projects/city skyline/index.html",
  },
  {
    id: "04",
    title: "Project Flexbox",
    category: "Web Design",
    desc: "Flexbox based layout project demonstrating modern CSS techniques.",
    path: "/projects/flexbox/index.html",
  },
  {
    id: "05",
    title: "Galerya ng Kultura",
    category: "Web Development",
    desc: "A gallery website showcasing traditional Filipino culture using HTML5 and CSS3.",
    path: "/projects/galerya/index.html",
  },
  {
    id: "06",
    title: "Project IP-Python",
    category: "Web API Integration",
    desc: "A web application integrating Python backend and IP-API with a modern frontend.",
    path: "/projects/ip-python/index.html",
  },
  {
    id: "07",
    title: "Art Gallery",
    category: "Web Development",
    desc: "A group Art Gallery project made HTML and Vanilla CSS.",
    path: "/projects/art gallery/index.html",
  },
  {
    id: "08",
    title: "Project Adore",
    category: "Web Development",
    desc: "A resto landing page made with vanilla CSS and HTML5.",
    path: "/projects/Adore/index.html",
  },
  {
    id: "09",
    title: "E-commerce Website",
    category: "Web Design",
    desc: "An e-commerce website design focusing product display.",
    path: "/projects/CellCompWebsite/index.html",
  },
];

export const ProjectShowcase = () => {
  const [activeProject, setActiveProject] = useState<number | null>(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full bg-transparent py-10">
      <div className="max-w-2xl flex flex-col gap-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            onMouseEnter={() => setActiveProject(i)}
            className={`relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
              activeProject === i 
                ? "bg-zinc-900/40 border-zinc-800 shadow-2xl" 
                : "bg-transparent border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <div className="flex items-start gap-6">
              {/* 16:9 UNIFORM THUMBNAIL */}
              <div className={`relative w-32 aspect-video rounded-lg overflow-hidden border shrink-0 transition-all duration-500 ${
                activeProject === i ? "border-[#9929EA] scale-105" : "border-zinc-800"
              }`}>
                <iframe 
                  src={project.path}
                  className="w-[400%] h-[400%] origin-top-left scale-[0.25] border-none pointer-events-none"
                  loading="lazy"
                />
              </div>

              {/* PROJECT CONTENT */}
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className={`font-black uppercase tracking-tight text-[18px] transition-colors ${
                      activeProject === i ? "text-white" : "text-zinc-500"
                    }`}>
                      {project.title}
                    </h3>
                    <p className="text-[12px] uppercase tracking-wider font-medium text-[#9929EA]">
                      {project.category}
                    </p>
                  </div>
                  
                  {activeProject === i && (
                    <motion.a
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      href={project.path}
                      target="_blank"
                      className="p-2 bg-[#9929EA] rounded-full text-white hover:bg-white hover:text-black transition-colors"
                    >
                      <ExternalLink size={14} />
                    </motion.a>
                  )}
                </div>

                {/* EXPANDABLE DESCRIPTION */}
                <AnimatePresence>
                  {activeProject === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-zinc-400 text-[14px] font-figtree leading-relaxed">
                        {project.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};