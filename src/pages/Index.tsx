import { ExternalLink, Github, Mail, Linkedin } from "lucide-react";

interface Project {
  title: string;
  description: string;
  repo: string;
}

const projects: Project[] = [
  {
    title: "wrenchi",
    description:
      "A lightweight Linux system diagnostics tool built in Go. Made to monitor CPU, memory, and system performance while improving my Go skills.",
    repo: "https://github.com/gustavocsak/wrenchi",
  },
  {
    title: "Project Two",
    description: "CLI tool for automated deployment and CI/CD pipeline",
    repo: "https://github.com/username/project-two",
  },
  {
    title: "Project Three",
    description: "Real-time data visualization dashboard using WebSockets",
    repo: "https://github.com/username/project-three",
  },
  {
    title: "Project Four",
    description: "API gateway with authentication and rate limiting",
    repo: "https://github.com/username/project-four",
  },
];

const Index = () => {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      {/* Header */}
      <header className="mb-16 md:mb-24">
        <div className="mb-2 text-terminal-cyan">~/portfolio</div>
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-terminal-bright md:text-4xl">
          gustavocs
        </h1>
        <p className="text-muted-foreground">Web & IT Projects</p>
      </header>

      {/* Projects Section */}
      <section className="mb-20">
        <h2 className="mb-8 flex items-center gap-2 text-xl font-semibold text-terminal-bright">
          <span className="text-terminal-cyan">$</span> projects --list
        </h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group relative rounded border border-border bg-card transition-colors hover:border-accent"
            >
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6"
                aria-label={`View ${project.title} on GitHub`}
              >
                <div className="mb-2 flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-terminal-cyan transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-terminal-cyan transition-colors group-hover:text-terminal-cyan-bright">
                    <Github className="h-4 w-4" />
                    <ExternalLink className="h-3 w-3" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </a>
            </article>
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
