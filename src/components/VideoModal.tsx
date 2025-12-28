import { motion, AnimatePresence } from "motion/react";
import { useEffect } from "react";

interface VideoModalProps {
  videoSrc: string;
  isOpen: boolean;
  onClose: () => void;
  layoutId: string;
}

export default function VideoModal({ videoSrc, isOpen, onClose, layoutId }: VideoModalProps) {
  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop overlay with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Close button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
            className="absolute top-8 right-8 z-20 text-terminal-bright hover:text-terminal-cyan transition-colors duration-200 font-mono text-sm group"
            aria-label="Close modal"
          >
            <span className="flex items-center gap-2">
              <span className="opacity-70 group-hover:opacity-100">ESC</span>
              <span className="text-lg">×</span>
            </span>
          </motion.button>

          {/* Video container with shared layout transition */}
          <motion.div
            layoutId={layoutId}
            className="relative overflow-hidden rounded-lg ring-1 ring-terminal-cyan/30 bg-black z-10"
            initial={false}
            animate={{ opacity: 1 }}
            style={{
              width: "60vw",
              maxHeight: "80vh",
            }}
            transition={{ layout: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } }}
          >
            <video
              src={videoSrc}
              className="w-full h-full object-contain rounded-lg"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
