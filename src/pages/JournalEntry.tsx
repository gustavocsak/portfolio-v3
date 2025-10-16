import { ArrowLeft } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { forumEntries } from "./Journal";

interface EntryContent {
  [key: string]: {
    content: string[];
    tags: string[];
  };
}

const entryContent: EntryContent = {
  "building-scalable-apis": {
    content: [
      "REST API design requires careful consideration of resource modeling, endpoint structure, and HTTP method semantics. Following RESTful principles ensures predictable and maintainable APIs.",
      "Authentication strategies vary from simple API keys to OAuth 2.0 flows. JWT tokens provide a stateless approach that scales well across distributed systems, while session-based auth offers simpler invalidation.",
      "Performance optimization involves caching strategies, database query optimization, and efficient payload design. Implementing pagination, field filtering, and compression can significantly improve response times.",
      "Rate limiting and proper error handling are essential for production APIs. Clear error messages and consistent status codes help clients integrate smoothly.",
    ],
    tags: ["REST", "API Design", "Authentication", "Performance"],
  },
  "docker-production": {
    content: [
      "Container orchestration in production requires understanding resource limits, health checks, and rolling deployments. Kubernetes provides powerful abstractions for managing containerized applications at scale.",
      "Multi-stage builds reduce image sizes and improve security by excluding build tools from production images. Layer caching optimization speeds up build times during development.",
      "Logging and monitoring strategies differ in containerized environments. Centralized logging aggregation and distributed tracing become critical for debugging issues across multiple containers.",
      "Security considerations include image scanning, secret management, and network policies. Using minimal base images and running containers as non-root users reduces attack surface.",
    ],
    tags: ["Docker", "Kubernetes", "DevOps", "Production"],
  },
  "typescript-patterns": {
    content: [
      "Type-level programming in TypeScript enables compile-time guarantees that catch bugs before runtime. Conditional types and mapped types provide powerful tools for building flexible type systems.",
      "Generic constraints allow creating reusable components while maintaining type safety. Template literal types enable string manipulation at the type level.",
      "Advanced patterns like branded types prevent primitive obsession and ensure type-safe IDs. Discriminated unions model state machines elegantly.",
      "The builder pattern with fluent interfaces becomes more powerful with TypeScript's return type inference. Method chaining with proper typing prevents invalid state configurations.",
    ],
    tags: ["TypeScript", "Type Systems", "Design Patterns", "Software Engineering"],
  },
};

const JournalEntry = () => {
  const { id } = useParams<{ id: string }>();
  const entry = forumEntries.find((e) => e.id === id);
  const content = id ? entryContent[id] : null;

  if (!entry || !content) {
    return <Navigate to="/journal" replace />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        {/* Header */}
        <header className="mb-16">
          <Link
            to="/journal"
            className="mb-6 inline-flex items-center gap-2 text-sm text-terminal-cyan transition-colors hover:text-terminal-cyan-bright"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>back to journal</span>
          </Link>
          <div className="mb-2 text-xs text-terminal-cyan">{entry.date}</div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-terminal-bright md:text-4xl">
            {entry.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {content.tags.map((tag) => (
              <span
                key={tag}
                className="rounded bg-card px-3 py-1 text-xs text-muted-foreground border border-border"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Content */}
        <article className="space-y-6">
          {content.content.map((paragraph, index) => (
            <p key={index} className="text-sm leading-relaxed text-foreground">
              {paragraph}
            </p>
          ))}
        </article>
      </div>
    </div>
  );
};

export default JournalEntry;
