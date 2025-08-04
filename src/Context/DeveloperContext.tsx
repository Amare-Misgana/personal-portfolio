// DeveloperContext.tsx
import { createContext } from "react";
import type { ReactNode } from "react";

import {
  SiJavascript,
  SiCplusplus,
  SiPython,
  SiReact,
  SiDjango,
  SiGit,
  SiPostman,
  SiHtml5,
  SiCss3,
  SiVite,
  SiRedis,
  SiSqlite,
  SiPostgresql,
} from "react-icons/si";

type TechItem = {
  name: string;
  icon: ReactNode;
};

export type DeveloperContextType = {
  name: string;
  age: number;
  email: string;
  educationLevel: string;
  city: string;
  country: string;
  school: string;
  languages: TechItem[];
  frameworks: TechItem[];
  tools: TechItem[];
  frontend_framework: ReactNode;
  backend_framework: ReactNode;
  frontend_icons: ReactNode[];
  backend_icons: ReactNode[];
  educationList: string[];
  resumeSummary: string;
};

export const developerData: DeveloperContextType = {
  name: "Amare Misgana",
  age: 18,
  email: "codeamare@gmail.com",
  educationLevel: "High School",
  city: "Shashemene",
  country: "Ethiopia",
  school: "Comboni Senior Secondary School",
  languages: [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "C++ (For Fun)", icon: <SiCplusplus /> },
    { name: "Python", icon: <SiPython /> },
  ],
  frameworks: [
    { name: "React", icon: <SiReact /> },
    { name: "Django", icon: <SiDjango /> },
  ],
  frontend_framework: <SiReact className="react" />,
  backend_framework: <SiDjango className="django" />,
  frontend_icons: [<SiJavascript />, <SiHtml5 />, <SiCss3 />, <SiVite />],
  backend_icons: [<SiRedis />, <SiSqlite />, <SiPython />, <SiPostgresql />],
  tools: [
    { name: "Git", icon: <SiGit /> },
    { name: "Postman", icon: <SiPostman /> },
  ],
  educationList: [
    "Comboni Senior Secondary School – Hawassa, Ethiopia",
    "Grade 12 – Graduating in 2026",
    "Strong background in Physics and Mathematics with a passion for backend development and problem-solving.",
  ],
  resumeSummary: `High school student and full-stack developer focused on building modern backend-powered applications using Django and React.`,
};

export const DeveloperContext =
  createContext<DeveloperContextType>(developerData);
