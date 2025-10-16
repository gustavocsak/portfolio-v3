import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface ForumEntry {
  id: string;
  date: string;
  title: string;
  preview: string;
}

interface Course {
  date: string;
  title: string;
  description: string;
}

export const forumEntries: ForumEntry[] = [
  {
    id: "building-scalable-apis",
    date: "2024-03-15",
    title: "Building Scalable REST APIs",
    preview: "Detailed exploration of REST API design patterns, authentication strategies, and performance optimization techniques",
  },
  {
    id: "docker-production",
    date: "2024-02-28",
    title: "Docker in Production",
    preview: "Deep dive into containerization best practices, orchestration, and deployment strategies for production environments",
  },
  {
    id: "typescript-patterns",
    date: "2024-01-20",
    title: "Advanced TypeScript Patterns",
    preview: "Exploring type-level programming, conditional types, and advanced patterns for building type-safe applications",
  },
];

const courses: Course[] = [
  {
    date: "2024-03",
    title: "System Design Fundamentals",
    description: "Scalable architecture patterns and distributed systems",
  },
  {
    date: "2024-02",
    title: "Kubernetes Essentials",
    description: "Container orchestration and microservices deployment",
  },
  {
    date: "2024-01",
    title: "React Performance",
    description: "Optimization techniques and advanced patterns",
  },
];

const Journal = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        {/* Header */}
        <header className="mb-16 md:mb-24">
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-2 text-sm text-terminal-cyan transition-colors hover:text-terminal-cyan-bright"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>back</span>
          </Link>
          <div className="mb-2 text-terminal-cyan">~/journal</div>
          <h1 className="mb-3 text-3xl font-bold tracking-tight text-terminal-bright md:text-4xl">
            Activity Log
          </h1>
          <p className="text-muted-foreground">
            Courses, learnings, and progress
          </p>
        </header>

        {/* Forum Entries Section */}
        <section className="mb-16">
          <h2 className="mb-8 flex items-center gap-2 text-xl font-semibold text-terminal-bright">
            <span className="text-terminal-cyan">$</span> entries --all
          </h2>
          <div className="space-y-4">
            {forumEntries.map((entry) => (
              <Link
                key={entry.id}
                to={`/journal/${entry.id}`}
                className="block rounded border border-border bg-card p-6 transition-colors hover:border-terminal-cyan"
              >
                <div className="mb-2 text-xs text-terminal-cyan">
                  {entry.date}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {entry.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {entry.preview}
                </p>
                <div className="mt-4 text-xs text-terminal-cyan">
                  read more →
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Courses Section */}
        <section>
          <h2 className="mb-8 flex items-center gap-2 text-xl font-semibold text-terminal-bright">
            <span className="text-terminal-cyan">$</span> courses --recent
          </h2>
          <div className="space-y-3">
            {courses.map((course, index) => (
              <div
                key={index}
                className="flex items-baseline gap-4 border-l-2 border-border pl-4 py-2"
              >
                <span className="text-xs text-terminal-cyan shrink-0">
                  {course.date}
                </span>
                <div>
                  <div className="text-sm font-medium text-foreground">
                    {course.title}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {course.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Journal;
