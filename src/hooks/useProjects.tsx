import { useEffect, useState } from "react";
import { ProjectModel } from "../models/ProjectsModel";

export default function useProjects() {
  const [projects, setProjects] = useState<ProjectModel[]>([]);

  const getProjects = async () => {
    const projectsData = await fetch("/resources/data/projects.json").then(
      (projects) => projects.json()
    );
    const parsedProjects: ProjectModel[] = projectsData as ProjectModel[];
    setProjects(parsedProjects);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return { projects };
}
