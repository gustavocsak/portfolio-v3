import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface Frontmatter {
  title: string;
  date: string;
  tags: string[];
}

interface JournalEntryLayoutProps {
  children: React.ReactNode;
  frontmatter: Frontmatter;
}

export const JournalEntryLayout = ({
  children,
  frontmatter,
}: JournalEntryLayoutProps) => {
  return (
    <>
      <header className="mb-16">
        <Link
          to="/journal"
          className="mb-6 inline-flex items-center gap-2 text-sm text-terminal-cyan transition-colors hover:text-terminal-cyan-bright"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>back to journal</span>
        </Link>

        <div className="mb-2 text-xs text-terminal-cyan">
          {frontmatter.date}
        </div>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-terminal-bright md:text-4xl">
          {frontmatter.title}
        </h1>
        <div className="flex flex-wrap gap-2">
          {frontmatter.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-card px-3 py-1 text-xs text-muted-foreground border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>
      {children}
    </>
  );
};
