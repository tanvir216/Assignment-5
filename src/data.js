import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaDocker,
  FaJava,
} from "react-icons/fa";

import {
  SiSvelte,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

export const technologies = [
  {
    id: 1,
    name: "React",
    icon: FaReact,
    badge: "Popular",
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: 4.9,
    description:
      "A declarative, component-based JavaScript library for building modern user interfaces.",
  },
  {
    id: 2,
    name: "Vue.js",
    icon: FaVuejs,
    badge: "Versatile",
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: 4.8,
    description:
      "An approachable, performant, and versatile framework for building web user interfaces.",
  },
  {
    id: 3,
    name: "Svelte",
    icon: SiSvelte,
    badge: "Fast",
    category: "Frontend",
    level: "Intermediate",
    rating: 4.8,
    description:
      "Compile-time enhanced web apps with zero virtual DOM overhead.",
  },
  {
    id: 4,
    name: "Next.js",
    icon: SiNextdotjs,
    badge: "Framework",
    category: "Frontend",
    level: "Intermediate",
    rating: 4.9,
    description:
      "The React framework for full-stack applications with hybrid rendering.",
  },
  {
    id: 5,
    name: "Node.js",
    icon: FaNodeJs,
    badge: "Standard",
    category: "Backend",
    level: "Intermediate",
    rating: 4.8,
    description:
      "Asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
  },
  {
    id: 6,
    name: "PostgreSQL",
    icon: SiPostgresql,
    badge: "Top SQL",
    category: "Database",
    level: "Intermediate",
    rating: 4.9,
    description:
      "Powerful open-source object-relational database system.",
  },
  {
    id: 7,
    name: "Redis",
    icon: SiRedis,
    badge: "Cache",
    category: "Database",
    level: "Intermediate",
    rating: 4.8,
    description:
      "In-memory data structure store used as a cache and database.",
  },
  {
    id: 8,
    name: "JavaScript",
    icon: SiJavascript,
    badge: "Ubiquitous",
    category: "Language",
    level: "Beginner-Friendly",
    rating: 4.9,
    description:
      "The versatile scripting language powering dynamic web experiences.",
  },
  {
    id: 9,
    name: "TypeScript",
    icon: SiTypescript,
    badge: "Essential",
    category: "Language",
    level: "Intermediate",
    rating: 4.9,
    description:
      "Strongly typed programming language built on JavaScript.",
  },
  {
    id: 10,
    name: "Java",
    icon: FaJava,
    badge: "Robust",
    category: "Language",
    level: "Intermediate",
    rating: 4.6,
    description:
      "Secure object-oriented language designed for portability and scale.",
  },
  {
    id: 11,
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    badge: "Modern",
    category: "Styling",
    level: "Beginner-Friendly",
    rating: 4.9,
    description:
      "Utility-first CSS framework packed with classes for custom UI.",
  },
  {
    id: 12,
    name: "Docker",
    icon: FaDocker,
    badge: "Containers",
    category: "DevOps",
    level: "Intermediate",
    rating: 4.9,
    description:
      "Platform designed to build, ship and run applications reliably.",
  },
];