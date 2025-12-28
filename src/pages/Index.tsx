import { Mail, Linkedin, Github } from "lucide-react";
import { motion } from "motion/react";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

const Index = () => {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-12 md:mb-16"
      >
        <div className="mb-2 text-terminal-cyan">~/portfolio</div>
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-terminal-bright md:text-4xl">
          gustavocs
        </h1>
        <p className="text-muted-foreground">Web & IT Projects</p>
      </motion.header>

      {/* Projects Section */}
      <section className="mb-20">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 flex items-center gap-2 text-xl font-semibold text-terminal-bright"
        >
          <span className="text-terminal-cyan">$</span> projects --list
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* Links Section */}
      <footer className="border-t border-border pt-12">
        <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold text-terminal-bright">
          <span className="text-terminal-cyan">$</span> contact --info
        </h2>
        <div className="flex flex-wrap gap-6">
          <a
            href="mailto:your.email@example.com"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-terminal-cyan"
          >
            <Mail className="h-4 w-4" />
            <span>gustavocsak@gmail.com</span>
          </a>
          <a
            href="https://github.com/gustavocsak"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-terminal-cyan"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/gustavo-de-sa/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-terminal-cyan"
          >
            <Linkedin className="h-4 w-4" />
            <span>LinkedIn</span>
          </a>
        </div>
        <div className="mt-12 flex items-center justify-between border-t border-border pt-6">
          <div className="text-xs text-terminal-dim">
            <span className="text-terminal-cyan">~</span> Built with React +
            Tailwind
          </div>
          <a
            href="/journal"
            className="group flex items-center gap-2 rounded border border-terminal-cyan/30 bg-terminal-cyan/5 px-3 py-2 text-sm font-medium text-terminal-cyan transition-all hover:border-terminal-cyan hover:bg-terminal-cyan/10"
          >
            activity log
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
