import { useEffect, useRef } from "react";

const InteractiveGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const targetMousePos = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const gridSize = 50;
    const highlightRadius = 200;
    const perspectiveStrength = 0.22;
    const elevationMax = 8;

    const handleMouseMove = (e: MouseEvent) => {
      targetMousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = () => {
      timeRef.current += 0.01;

      mousePos.current.x +=
        (targetMousePos.current.x - mousePos.current.x) * 0.15;
      mousePos.current.y +=
        (targetMousePos.current.y - mousePos.current.y) * 0.15;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let x = 0; x <= canvas.width; x += gridSize) {
        for (let y = 0; y <= canvas.height; y += gridSize) {
          const dx = mousePos.current.x - x;
          const dy = mousePos.current.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          let opacity = 0.012;
          let elevation = 0;
          let glow = 0;

          if (distance < highlightRadius) {
            const normalizedDist = distance / highlightRadius;
            const intensity = easeOutCubic(1 - normalizedDist);

            elevation = intensity * elevationMax;

            const perspectiveX =
              (dx / distance) * elevation * perspectiveStrength;
            const perspectiveY =
              (dy / distance) * elevation * perspectiveStrength;

            opacity = 0.012 + intensity * 0.035;

            glow = intensity * 0.08;

            const px = x - perspectiveX;
            const py = y - perspectiveY;

            if (glow > 0.02 && isFinite(px) && isFinite(py)) {
              const gradient = ctx.createRadialGradient(
                px,
                py,
                0,
                px,
                py,
                gridSize * 0.5,
              );
              gradient.addColorStop(0, `rgba(255, 255, 255, ${glow * 0.15})`);
              gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
              ctx.fillStyle = gradient;
              ctx.fillRect(
                px - gridSize * 0.25,
                py - gridSize * 0.25,
                gridSize * 0.5,
                gridSize * 0.5,
              );
            }

            const lineWidth = 1 + intensity * 0.25;
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;

            if (x < canvas.width) {
              const nextPy = py + gridSize;
              ctx.beginPath();
              ctx.moveTo(px, py);
              ctx.lineTo(px, Math.min(nextPy, canvas.height));
              ctx.stroke();
            }

            if (y < canvas.height) {
              const nextPx = px + gridSize;
              ctx.beginPath();
              ctx.moveTo(px, py);
              ctx.lineTo(Math.min(nextPx, canvas.width), py);
              ctx.stroke();
            }
          } else {
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 1;

            if (x < canvas.width) {
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(x, Math.min(y + gridSize, canvas.height));
              ctx.stroke();
            }

            if (y < canvas.height) {
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(Math.min(x + gridSize, canvas.width), y);
              ctx.stroke();
            }
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default InteractiveGrid;
