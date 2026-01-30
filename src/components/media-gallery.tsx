"use client";
import { motion } from "framer-motion";

const mediaItems = [
  { id: 1, title: "Graphite Portraiture", type: "Graphite", size: "tall", src: "/gallery/galleryart (3).jpg" },
  { id: 2, title: "Figurative Impressionism | Achilles and Patroclus", type: "Oil Painting", small: "wide", src: "/gallery/galleryart (2).jpg" },
  { id: 3, title: "Landscape | El Nido", type: "Acrylic Painting", size: "small", src: "/gallery/galleryart (1).jpg" },
  { id: 4, title: "Avocado", type: "Oil Painting", size: "tall", src: "/gallery/galleryart (4).jpg" },
  { id: 5, title: "Flat Vector", type: "Digital", size: "tall", src: "/gallery/galleryart (9).jpg" },
  { id: 6, title: "Urban Sketching", type: "Ballpoint Pen", size: "small", src: "/gallery/galleryart (6).jpg" },
  { id: 7, title: "Urban Sketching", type: "Ballpoint Pen", size: "wide", src: "/gallery/galleryart (7).jpg" },
  { id: 8, title: "Urban Sketching", type: "Ballpoint Pen", size: "small", src: "/gallery/galleryart (8).jpg" },
  { id: 9, title: "Urban Sketching", type: "Ballpoint Pen", size: "wide", src: "/gallery/galleryart (5).jpg" },
  { id: 10, title: "Maranao Influence Okir-a-datu", type: "Traditional", size: "small", src: "/gallery/galleryart (10).jpg" },
  { id: 11, title: "Abstract Painting", type: "Acrylic Painting", size: "small", src: "/gallery/galleryart (11).jpg" },
  { id: 12, title: "Conceptual Art", type: "Traditional", size: "tall", src: "/gallery/galleryart (12).jpg" },
  { id: 13, title: "Urban Sketching", type: "Ballpoint Pen", size: "tall", src: "/gallery/galleryart (1).jpeg" },
  { id: 14, title: "Flat Vector", type: "Digital", size: "tall", src: "/gallery/galleryart (14).jpg" },
  { id: 15, title: "Flat Vector", type: "Digital", size: "small", src: "/gallery/galleryart (15).jpg" },
  { id: 16, title: "Freedom", type: "Oil Painting", size: "small", src: "/gallery/galleryart (16).jpg" },
  { id: 17, title: "Deathly Hollows", type: "Coffee Painting", size: "small", src: "/gallery/galleryart (13).jpg" },
  { id: 18, title: "Landscape | Chuchu & Luna", type: "Oil Painting", size: "wide", src: "/gallery/galleryart (17).jpg" },
  { id: 19, title: "Skeleton & Cigarette", type: "Oil Painting", size: "wide", src: "/gallery/galleryart (18).jpg" },
];

export const MediaGallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[100px]">
      {mediaItems.map((item) => (
        <motion.div
          key={item.id}
          whileHover={{ scale: 0.98 }}
          // Added transition to make the hover scale feel buttery smooth
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`relative group overflow-hidden rounded-xl border border-zinc-900 bg-zinc-950 ${
            item.size === "tall" ? "row-span-3" : item.size === "wide" ? "col-span-2 row-span-2" : "row-span-2"
          }`}
        >
          {/* Subtle Label Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex flex-col justify-end p-4">
            <span className="text-[10px] text-[#CC66DA] font-mono uppercase tracking-widest">
              {item.type}
            </span>
            <h4 className="text-white font-bold text-sm tracking-tight">
              {item.title}
            </h4>
          </div>

          {/* Optimized Image Tag */}
          <img 
            src={item.src} 
            alt={item.title}
            loading="lazy" 
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" 
          />
        </motion.div>
      ))}
    </div>
  );
};