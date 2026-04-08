import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="relative bg-[#121212]">
      <ScrollyCanvas />
      <Projects />
      
      {/* Contact & Footer */}
      <footer className="w-full py-20 mt-20 border-t border-white/10 bg-[#121212] px-6 md:px-12 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's Connect</h2>
        <p className="text-xl text-neutral-400 font-light max-w-xl mx-auto mb-10">
          Interested in collaborating on media, film, or entertainment projects? Reach out and let's craft something amazing.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-sm text-neutral-300 font-medium mb-16">
          <a href="mailto:bintumedhi1@gmail.com" className="hover:text-emerald-400 transition-colors">bintumedhi1@gmail.com</a>
          <span className="hidden md:block w-1 h-1 rounded-full bg-neutral-600"></span>
          <a href="tel:+916003067488" className="hover:text-emerald-400 transition-colors">+91 6003067488</a>
          <span className="hidden md:block w-1 h-1 rounded-full bg-neutral-600"></span>
          <span className="text-neutral-500">Guwahati, India</span>
        </div>

        <div className="flex items-center justify-center space-x-8 mb-16">
          <a href="https://www.linkedin.com/in/bintu-medhi-67b72225b/" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors">
            LinkedIn
          </a>
        </div>

        <p className="text-neutral-600 font-light text-sm">
          © {new Date().getFullYear()} Bintu Medhi. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
