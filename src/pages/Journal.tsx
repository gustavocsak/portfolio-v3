import { ArrowLeft, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

interface LearningItem {
  date: string;
  title: string;
  description: string;
  type: "course" | "technical-book" | "book" | "workshop" | "certification";
  status: "active" | "completed";
}

const allLearning: LearningItem[] = [
  {
    date: "2025-11",
    title: "Learning Go by Jon Bodner",
    description: "An Idiomatic Approach to Real-World Go Programming",
    type: "technical-book",
    status: "active",
  },
];

const currentlyReading = {
  title: "The Cuckoo's Egg",
  author: "Clifford Stoll",
  bookUrl:
    "https://www.goodreads.com/book/show/18154.The_Cuckoo_s_Egg?ref=nav_sb_ss_5_10",
  goodreadsUrl: "https://www.goodreads.com/user/show/181504332-gustavo",
};

interface MdxFrontmatter {
  title: string;
  date: string;
  tags: string[];
  preview: string;
}

interface ForumEntry {
  id: string;
  date: string;
  title: string;
  preview: string;
}

const mdxModules = import.meta.glob<{ frontmatter: MdxFrontmatter }>(
  "../entries/*.mdx",
  { eager: true },
);

export const forumEntries: ForumEntry[] = Object.entries(mdxModules)
  .map(([path, module]) => {
    // get the id (e.g., file name) from the path
    const id = path.split("/").pop()?.replace(".mdx", "") ?? "";

    return {
      id: id,
      title: module.frontmatter.title,
      date: module.frontmatter.date,
      preview: module.frontmatter.preview,
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));

const Journal = () => {
  return (
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

      {/* Journal Entries Section, probably change the "entries" command with a better idea later */}
      <section className="mb-16">
        <h2 className="mb-8 flex items-center gap-2 text-xl font-semibold text-terminal-bright">
          <span className="text-terminal-cyan">$</span> entries --all
        </h2>
        <div className="space-y-4">
          {forumEntries.map((entry) => (
            <Link
              key={entry.id}
              to={`/journal/${entry.id}`}
              className="relative block rounded border border-border bg-card p-6 transition-colors hover:border-terminal-cyan"
            >
              <div className="mb-2 text-xs text-terminal-cyan">
                {entry.date}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {entry.title}
              </h3>
              <p className="text-sm text-muted-foreground">{entry.preview}</p>
              <div className="mt-4 text-xs text-terminal-cyan">read more →</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Learning Section */}
      <section className="mb-16">
        <h2 className="mb-8 flex items-center gap-2 text-xl font-semibold text-terminal-bright">
          <span className="text-terminal-cyan">$</span> learning --all
        </h2>
        <div className="space-y-3">
          {allLearning.map((item, index) => (
            <div
              key={index}
              className={`flex items-baseline gap-4 border-l-2 pl-4 py-2 ${
                item.status === "active"
                  ? "border-terminal-cyan"
                  : "border-border"
              }`}
            >
              <span className="text-xs text-terminal-cyan shrink-0">
                {item.date}
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <div className="text-sm font-medium text-foreground">
                    {item.title}
                  </div>
                  <span className="text-xs text-terminal-dim">
                    • {item.type.replace("-", " ")}
                  </span>
                </div>
                <div className="text-xs text-muted-foreground">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Goodreads Section */}
      <section>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Currently reading: </span>

          <a
            href={currentlyReading.bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-terminal-cyan transition-colors hover:text-terminal-cyan-bright"
            aria-label={`View ${currentlyReading.title} by ${currentlyReading.author} on Goodreads`}
          >
            {currentlyReading.title} by {currentlyReading.author}
          </a>

          <span className="mx-2 text-terminal-dim">|</span>

          <a
            href={currentlyReading.goodreadsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-terminal-cyan transition-colors hover:text-terminal-cyan-bright"
            aria-label="View all books on Goodreads"
          >
            <BookOpen className="h-3 w-3" />
            <span>Goodreads</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Journal;
