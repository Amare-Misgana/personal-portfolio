import { createContext, useContext } from "react";
import { SiReact, SiDjango, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import CsssTemplate from "../assets/templates/csss.png"
import BlogNetTemplate from "../assets/templates/blognet.png"

const ProjectsContext = createContext([]);

export const ProjectsProvider = ({ children }) => {
    const projects = [
        {
            id: 1,
            title: "BlogNet",
            description: "A full-stack blogging platform built with Django backend and React frontend, featuring user authentication and CRUD operations.",
            image: CsssTemplate,
            techStack: [
                { icon: <SiReact />, iconLabel: "React", link: "https://react.dev" },
                { icon: <SiDjango />, iconLabel: "Django", link: "https://www.djangoproject.com" },
                { icon: <SiJavascript />, iconLabel: "JavaScript", link: "https://developer.mozilla.org" },
            ],
            gitLink: "https://github.com/Amare-Misgana/comboni_fullstack_webiste/tree/main"
        },
        {
            id: 2,
            title: "Comboni Fullstack Website",
            description: "A school project website built with full-stack architecture using Django and React for a smooth UI/UX experience.",
            image: BlogNetTemplate,
            techStack: [
                { icon: <SiReact />, iconLabel: "React", link: "https://react.dev" },
                { icon: <SiDjango />, iconLabel: "Django", link: "https://www.djangoproject.com" },
                { icon: <SiCss3 />, iconLabel: "CSS3", link: "https://developer.mozilla.org" },
            ],
            gitLink: "https://github.com/Amare-Misgana/BlogNet-Django-React"
        },
    ];

    return (
        <ProjectsContext.Provider value={projects}>
            {children}
        </ProjectsContext.Provider>
    );
};

export const useProjects = () => useContext(ProjectsContext);
