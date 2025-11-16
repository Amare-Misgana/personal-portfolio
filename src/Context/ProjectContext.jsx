import { createContext, useContext } from "react";
import { SiReact, SiDjango, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";

const ProjectsContext = createContext([]);

export const ProjectsProvider = ({ children }) => {
    const projects = [
        {
            id: 1,
            title: "BlogNet",
            description: "A full-stack blogging platform built with Django backend and React frontend, featuring user authentication and CRUD operations.",
            image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
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
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
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
