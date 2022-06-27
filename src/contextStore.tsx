import * as React from "react";
import { getProjects } from "./services/projectsAPI";
import { Project } from "./types";

interface ContextType {
  selected: Project | null;
  setSelected: React.Dispatch<React.SetStateAction<Project | null>>;
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
}

export const Context = React.createContext<ContextType>({
  selected: null,
  setSelected: () => {
    return;
  },
  projects: [],
  setProjects: () => {
    return;
  },
});

interface ContexProps {
  children: React.ReactNode;
  initialProjects: Project[] | [];
}

export const ContextProvider: React.FC<ContexProps> = ({
  children,
  initialProjects,
}) => {
  const [selected, setSelected] = React.useState<Project | null>(
    JSON.parse(localStorage.getItem("selectedProject") || "null")
  );
  const [projects, setProjects] = React.useState<Project[]>(initialProjects);

  React.useEffect(() => {
    if (!projects.length) {
      setProjects(JSON.parse(getProjects()));
    }
  }, [setProjects, projects.length]);

  React.useEffect(() => {
    localStorage.setItem("selectedProject", JSON.stringify(selected));
  }, [selected]);

  return (
    <Context.Provider
      value={{
        selected,
        setSelected,
        projects,
        setProjects,
      }}
    >
      {children}
    </Context.Provider>
  );
};
