import InteractiveGrid from "@/components/InteractiveGrid";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <InteractiveGrid />
      {/* Make main relative to render the grid properly */}
      <main className="relative z-10">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
