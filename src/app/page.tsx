import { CursorSpotlight } from "@/components/ui/cursor-spotlight";
import { SocialLinks } from "@/components/social-links";
import { ProjectShowcase } from "@/components/project-showcase";
import { MediaGallery } from "@/components/media-gallery";



export default function Home() {
  return (
    // The main container handles the 100% height and centering
    <main className="relative min-h-screen w-full bg-[#000000] flex overflow-hidden">
      <CursorSpotlight />

      <div className="relative z-10 flex w-full">
        {/* Container for both elements with a specific gap */}
        {/*Static left part, my name, short intro, nav buttons and social links*/}
        {/* LEFT SIDE - Static/Fixed */}
        <div className=" fixed top-0 left-0 h-full w-1/2 flex flex-col items-start justify-start p-24 z-10">
          <h1 className="text-white font-bold font-figtree text-[40px] leading-tight tracking-tighter">MONICA SAYON</h1>
          <h2 className="text-[#EBD3F8] mt-4 font-bold text-[22px]">Artist | Web Developer</h2>
          <p className="text-[#EBD3F8] mt-3 text-[18px]">Exploring the space where digital illustration<br/> meets interactive web design.</p>
          <nav className="mt-12 flex flex-col space-y-4">
          {['About Me', 'Web Architecture', 'Visual & Creative Media'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="group flex items-center text-zinc-500 hover:text-white transition-all duration-300"
            >
              {/* Animated line that grows on hover */}
              <span className="h-px w-8 bg-zinc-800 mr-4 group-hover:w-16 group-hover:bg-brand-purple transition-all duration-300"></span>
              <span className="text-sm uppercase tracking-widest">{item}</span>
            </a>
          ))}
        </nav>
        <SocialLinks />
        <div className="pt-12">
          <p className="text-[11px] text-zinc-600 font-mono uppercase tracking-[0.2em] leading-relaxed">
            Created using <span className="text-zinc-400">TailwindCSS Aceternity UI</span> and <span className="text-zinc-400">Node.js</span>
          </p>
          <p className="text-[10px] text-zinc-800 mt-1 uppercase font-mono">
            © 2026 — All rights reserved
          </p>
        </div>
        </div>
        
        {/* RIGHT SIDE - Static/Fixed */}
        <div className="ml-[50%] w-1/2 min-h-screen">
        <div className="flex flex-col items-start justify-start p-10 md:p-6">
          <section id="about me" className="flex flex-col justify-start p-10 pb-20 mb-20 md:p-6 ">
            {/* The Neon Bracket Heading */}
            <div className="flex items-center gap-4 mb-8 group">
              <span className="text-[#CC66DA] text-4xl font-light animate-pulse">[</span>
              <h2 className="font-figtree text-3xl font-bold tracking-tight text-white uppercase">
                About Me
              </h2>
              <span className="text-[#CC66DA] text-4xl font-light animate-pulse">]</span>
            </div>
              
            {/* Description Text */}
            <div className="max-w-xl space-y-6">
              <p className="font-figtree text-lg text-zinc-400 leading-relaxed">
                I am a multi-disciplinary <span className="text-white font-bold">visual artist and front-end developer </span> 
                dedicated to the craft of digital curation. My work is 
                anchored in the principles of traditional art and graphic 
                design, where I first mastered the logic of composition, 
                lighting, and visual weight. Today, I bridge that foundation 
                with modern technology, using <span className="text-[#CC66DA] font-bold">Next.js and Tailwind CSS</span> to 
                transform the browser from a static document into a high-
                fidelity gallery. I don't just build websites; I architect spaces 
                where art and code coexist.
              </p>
              <p className="font-figtree text-base text-zinc-400 leading-relaxed">
                My approach is driven by the belief that a user interface is a 
                living painting. I treat every layout as a canvas—carefully 
                balancing negative space, color theory, and the <span className="text-white font-bold">'rhythm'</span> of 
                interaction to create an immersive experience. My 
                background as an <span className="text-white font-bold">editor and graphic artist</span> allows me to see 
                beyond the code, focusing on the narrative flow of a page 
                and the emotional impact of a visual. Inspired by the 
                meticulous detail of anime and contemporary digital arts, I 
                strive to build web environments that are as intentional and 
                expressive as the art they house.
              </p>
            </div>

            <div className="mt-16 space-y-12">
              {[
                {
                  title: "Visual Arts",
                  skills: ["Traditional Sketching", "Graphic Design", "Color Theory", "Digital Illustration"]
                },
                {
                  title: "Creative Media",
                  skills: ["Video Editing", "Narrative Pacing", "Asset Management"]
                },
                {
                  title: "Web Development",
                  skills: ["React", "Vanilla CSS", "Tailwind CSS", "Bootstrap", "Typescript", "HTML5", "Node.js", "Aceternity UI", "Modern Layout Design", "UI/UX Design Principles"]
                }
              ].map((category, idx) => (
                <div key={idx} className="flex flex-col gap-4">
                  {/* Category Heading */}
                  <h3 className="font-figtree text-xs uppercase tracking-[0.3em] text-zinc-500 font-bold ml-1">
                    {category.title}
                  </h3>
              
                  {/* Skills Grid/Flex */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/30 text-zinc-400 font-figtree text-sm transition-all duration-300 hover:border-[#9929EA] hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="web architecture" className="flex flex-col justify-start p-10 pb-20 md:p-6 ">
            <div className="flex items-start gap-4 mb-6 group">
              <span className="text-[#CC66DA] text-4xl font-light animate-pulse">[</span>
              <h2 className="font-figtree text-3xl font-bold tracking-tight text-white uppercase">
                WEB ARCHITECTURE
              </h2>
              <span className="text-[#CC66DA] text-4xl font-light animate-pulse">]</span>
            </div>
            <ProjectShowcase />
          </section>

          <section id="visual & creative media" className="flex flex-col justify-start p-10 pb-20 md:p-6 ">
            <div className="flex items-start gap-4 mb-10 group">
              <span className="text-[#CC66DA] text-4xl font-light animate-pulse">[</span>
              <h2 className="font-figtree text-3xl font-bold tracking-tight text-white uppercase">
                VISUAL & CREATIVE MEDIA
              </h2>
              <span className="text-[#CC66DA] text-4xl font-light animate-pulse">]</span>
            </div>
            <MediaGallery />
          </section>
        </div>
      </div>
      </div>

    </main>
  );
}