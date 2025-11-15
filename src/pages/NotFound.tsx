import { Link } from "react-router-dom";
import { AlertCircle, Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-6">
      <div className="text-center" role="alert" aria-live="polite">
        <div className="mb-6 flex justify-center">
          <AlertCircle className="h-16 w-16 text-terminal-cyan" aria-hidden="true" />
        </div>
        <h1 className="mb-3 text-6xl font-bold tracking-tight text-terminal-bright">
          404
        </h1>
        <p className="mb-2 text-xl text-terminal-cyan">
          <span className="text-terminal-dim">$</span> page --not-found
        </p>
        <p className="mb-8 text-muted-foreground">
          The route you're looking for doesn't exist
        </p>
        <Link
          to="/"
          className="group inline-flex items-center gap-2 rounded border border-terminal-cyan/30 bg-terminal-cyan/5 px-6 py-3 font-medium text-terminal-cyan transition-all hover:border-terminal-cyan hover:bg-terminal-cyan/10"
        >
          <Home className="h-4 w-4" aria-hidden="true" />
          <span>Return to Home</span>
          <span className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
