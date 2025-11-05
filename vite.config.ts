import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import rehypeShiki from "@shikijs/rehype";
import remarkSlug from "remark-slug";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    mdx({
      remarkPlugins: [
        remarkSlug,
        remarkFrontmatter,
        remarkMdxFrontmatter,
        // readingTime, // later add TOC and reading time
      ],
      rehypePlugins: [
        [
          rehypeShiki,
          {
            themes: {
              light: "houston",
              dark: "houston",
              defaultColor: "houston",
            },
            cssVariablePrefix: "--shiki-",
            onVisitLine(node) {
              if (node.children.length === 0) {
                node.children = [{ type: "text", value: " " }];
              }
            },
            onVisitHighlightedLine(node) {
              node.properties.className.push("highlighted");
            },
          },
        ],
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
