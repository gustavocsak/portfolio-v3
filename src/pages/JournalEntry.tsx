import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { JournalEntryLayout } from "./JournalEntryLayout";

const journalEntryImports = {
  // sample mdx file for now, add more here as I write
  "docker-production": () => import("../entries/docker-production.mdx"),
};

type EntryID = keyof typeof journalEntryImports;

const ArticleLoader = ({ id }: { id: EntryID }) => {
  const [module, setModule] = useState<any>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const articleModule = await journalEntryImports[id]();
        setModule(articleModule);
      } catch (e) {
        console.error("Failed to load article:", e);
        setError(true);
      }
    };
    loadArticle();
  }, [id]);

  if (error) return <Navigate to="/journal" replace />;
  if (!module)
    return <div className="text-terminal-cyan">Loading entry...</div>;

  const Content = module.default;
  const frontmatter = module.frontmatter;

  return (
    <JournalEntryLayout frontmatter={frontmatter}>
      <Content />
    </JournalEntryLayout>
  );
};

const JournalEntry = () => {
  const { id } = useParams<{ id: string }>();

  if (!id || !(id in journalEntryImports)) {
    return <Navigate to="/journal" replace />;
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <article className="prose dark:prose-invert max-w-none">
        <ArticleLoader id={id as EntryID} />
      </article>
    </div>
  );
};

export default JournalEntry;
