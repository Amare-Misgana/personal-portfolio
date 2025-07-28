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
} from "react-icons/si";

type TechItem = {
  name: string;
  icon: ReactNode;
};

type DeveloperContextType = {
  name: "Amare Misgana";
  age: 18;
  email: "codeamare@gmail.com";
  educationLevel: "High School";
  city: "Shashemene";
  country: "Ethiopia";
  school: "Comboni Senior Secondary School";
  languages: TechItem[];
  frameworks: TechItem[];
  tools: TechItem[];
  educationList: string[];
  resumeSummary: string;
};

export const DeveloperContext = createContext<DeveloperContextType>({
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
    { name: "Django Rest Framework", icon: <SiDjango /> },
  ],
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
});
