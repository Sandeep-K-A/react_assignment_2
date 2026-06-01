import type { Feature } from "../types/feature";
import type { Page } from "../types/page";

export const features: Feature[] = [
  {
    icon: "🔀",
    title: "Client-Side Routing",
    description:
      "Fast page transitions with React Router, no full-page reloads.",
  },
  {
    icon: "🔗",
    title: "Dynamic Routes",
    description:
      "Parameterized URLs like /users/:id to render individual detail pages.",
  },
  {
    icon: "🧩",
    title: "Component Structure",
    description: "Organized into pages and reusable components for clean code.",
  },
];

export const techStack: Array<string> = [
  "React 18",
  "TypeScript",
  "React Router v6",
  "Tailwind CSS",
];

export const pages: Page[] = [
  { route: "/", label: "Home — Landing page with app overview" },
  { route: "/about", label: "About — App details and tech stack" },
  { route: "/users", label: "Users — List of all users fetched from api" },
  {
    route: "/users/:id",
    label: "User Detail — Individual user profile",
  },
];
