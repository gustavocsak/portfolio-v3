export interface Project {
  title: string;
  description: string;
  repo: string;
  liveUrl?: string;
  video: string; // Path to MP4 video preview
  techStack: string[]; // Tech stack tags
}

export const projects: Project[] = [
  {
    title: "wrenchi",
    description: "A lightweight Linux system diagnostics tool built in Go.",
    repo: "https://github.com/gustavocsak/wrenchi",
    video: "/projects/wrenchi.mp4", // You'll need to add this MP4
    techStack: ["Go", "bubbletea"],
  },
  {
    title: "groderAI",
    description: "AI tool to analyze and summarize code to augment grading",
    repo: "https://github.com/gustavocsak/groderai",
    video: "/projects/groder.mp4",
    techStack: ["Next.js", "TypeScript", "Python"],
  },
  {
    title: "Project Three",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    repo: "https://github.com/gustavocsak/project-three",
    video: "/projects/project-three.mp4",
    techStack: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "Project Four",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    repo: "https://github.com/gustavocsak/project-four",
    liveUrl: "https://project-four-demo.vercel.app",
    video: "/projects/project-four.mp4",
    techStack: ["Python", "Flask", "PostgreSQL"],
  },
];
