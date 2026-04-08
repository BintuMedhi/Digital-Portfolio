import { ArrowUpRight, GraduationCap, Code } from "lucide-react";

export default function Projects() {
  const experiences = [
    {
      title: "Brand Storytelling & Content Creation",
      description: "Created 30+ engaging reels, advertisements, and event videos, improving audience engagement by ~35%.",
      role: "Content Strategist",
      year: "2023 - Present",
    },
    {
      title: "End-to-End Video Production",
      description: "Managed complete video production cycle: scripting, shooting, editing, and publishing.",
      role: "Video Editor / Cinematographer",
      year: "2022 - Present",
    },
    {
      title: "Social Media Strategy",
      description: "Handled social media content planning and posting strategies, collaborating in fast-paced creative environments.",
      role: "Social Media Manager",
      year: "2022 - 2024",
    },
  ];

  const skills = [
    "Content Strategy", "Video Editing", "Cinematography", 
    "Adobe Premiere Pro", "Photoshop", "Canva", 
    "Social Media Marketing", "Google Analytics", "Meta Business Suite"
  ];

  return (
    <section className="relative z-20 w-full min-h-screen bg-[#121212] py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Experience Section */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Experience & Expertise
          </h2>
          <p className="text-xl text-neutral-400 font-light max-w-2xl">
            A track record of driving engagement through visual communication, complete production lifecycles, and tactical social media strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-32">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)] cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              <div className="flex justify-between items-start mb-16 relative z-10 transition-transform duration-500 group-hover:-translate-y-1">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 pr-4">{exp.title}</h3>
                  <div className="flex items-center space-x-3 text-sm text-neutral-400 font-medium">
                    <span>{exp.role}</span>
                    <span className="w-1 h-1 rounded-full bg-neutral-600" />
                    <span>{exp.year}</span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full shrink-0 border border-white/20 flex items-center justify-center bg-white/5 group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <div className="mt-auto relative z-10 transition-transform duration-500 group-hover:translate-x-1">
                <p className="text-neutral-300 font-light leading-relaxed text-lg">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dual Section: Skills & Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12">
          
          {/* Skills */}
          <div>
            <div className="flex items-center space-x-4 mb-8">
              <Code className="w-8 h-8 text-neutral-400" />
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Toolkit & Skills
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-neutral-300 backdrop-blur-sm text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center space-x-4 mb-8">
              <GraduationCap className="w-8 h-8 text-neutral-400" />
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Education
              </h3>
            </div>
            <div className="space-y-8">
              <div className="relative pl-6 border-l border-white/10">
                <div className="absolute w-3 h-3 bg-neutral-400 rounded-full -left-[1.35rem] top-2 border-[3px] border-[#121212]"></div>
                <h4 className="text-xl font-bold text-white mb-1">Master of Computer Applications</h4>
                <p className="text-emerald-400 font-medium mb-3">Pursuing</p>
                <p className="text-neutral-400 font-light">Royal Global University (2024–2026)</p>
              </div>
              <div className="relative pl-6 border-l border-white/10">
                <div className="absolute w-3 h-3 bg-neutral-600 rounded-full -left-[1.35rem] top-2 border-[3px] border-[#121212]"></div>
                <h4 className="text-xl font-bold text-white mb-1">Bachelor of Computer Applications</h4>
                <p className="text-neutral-300 font-medium mb-3">Cloud Technology & Information Security</p>
                <p className="text-neutral-400 font-light">Assam Downtown University (2021–2024)<br/>CGPA: 7.05</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
