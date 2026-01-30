"use client";
import { Mail, Github, Instagram, Facebook, Linkedin, ExternalLink } from "lucide-react";

export const SocialLinks = () => {
  const socials = [
    { icon: <Mail size={20} />, href: "mailto:sayonmonica.gabs@gmail.com", label: "Gmail" },
    { icon: <Github size={20} />, href: "https://github.com/monicasayon", label: "Github" },
    { icon: <Instagram size={20} />, href: "https://instagram.com/yonsa.mon", label: "Instagram" },
    { icon: <Facebook size={20} />, href: "https://facebook.com/acinoM.noyaS", label: "Facebook" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/monica-sayon-667131292", label: "LinkedIn" },
  ];

  return (
    <div className="mt-auto pt-10">
      <div className="flex items-center gap-6">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="text-zinc-500 hover:text-[#9929EA] transition-all duration-300 hover:-translate-y-1"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};