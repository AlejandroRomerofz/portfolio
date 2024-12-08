import useProjects from "../../../hooks/useProjects";
import Project from "../../shared/project/Project";
import Section from "../../shared/section/Section";

export default function Projects() {
  const { projects } = useProjects();

  return (
    <Section size="big">
      <div className="">
        <h2 className="font-bold text-lg">
          Estos son algunos de mis proyectos
        </h2>
        <p>Exploralos y comprueba como trabajo</p>
      </div>
      <div className="grid grid-cols-1 gap-y-3 md:grid-cols-2 md:gap-x-3">
        {projects ? (
          projects.map((project) => <Project project={project}></Project>)
        ) : (
          <p>cargando...</p>
        )}
      </div>
    </Section>
  );
}
