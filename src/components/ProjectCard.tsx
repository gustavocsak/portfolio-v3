import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import type { Project } from "../data/projects";
import VideoModal from "./VideoModal";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group"
    >
      {/* Video Preview */}
      <div className="relative overflow-hidden bg-black rounded-lg ring-1 ring-zinc-800/50 h-48">
        {!isModalOpen && (
          <motion.div
            layoutId={`video-${project.title}`}
            className="absolute inset-0 cursor-pointer hover:ring-1 hover:ring-terminal-cyan/50 rounded-lg overflow-hidden"
            onClick={() => setIsModalOpen(true)}
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ layout: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } }}
          >
            <video
              src={project.video}
              className="w-full h-full object-cover rounded-lg"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />
          </motion.div>
        )}
      </div>

      {/* Video Modal */}
      <VideoModal
        videoSrc={project.video}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        layoutId={`video-${project.title}`}
      />

      {/* Card Content */}
      <div className="p-4 space-y-2">
        {/* Title */}
        <h3 className="text-base font-semibold text-foreground font-mono">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-s text-muted-foreground font-mono leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 pt-0.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-1.5 py-0.5 text-xs font-mono bg-terminal-cyan/10 text-terminal-cyan border border-terminal-cyan/20 rounded hover:bg-terminal-cyan/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* GitHub Link */}
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-terminal-cyan transition-colors pt-2 relative group/link"
        >
          <Github size={16} />
          <span className="relative">
            View on GitHub
            <span className="absolute left-0 bottom-0 w-0 h-px bg-terminal-cyan transition-all duration-300 group-hover/link:w-full"></span>
          </span>
        </a>
      </div>
    </motion.article>
  );
}
