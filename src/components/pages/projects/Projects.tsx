import useLang from "../../../hooks/useLang";
import useProjects from "../../../hooks/useProjects";
import Project from "../../shared/project/Project";
import Section from "../../shared/section/Section";

export default function Projects() {
  const { l } = useLang();
  const { projects } = useProjects();

  return (
    <Section size="big">
      <div className="">
        <h2 className="font-bold text-lg">{l("PROJECTS_TITLE")}</h2>
        <p> {l("PROJECTS_SUBTITLE")}</p>
      </div>
      <div className="grid grid-cols-1 gap-y-3 md:grid-cols-2 md:gap-x-3">
        {projects ? (
          projects.map((project, index) => (
            <Project key={index} project={project}></Project>
          ))
        ) : (
          <p>cargando...</p>
        )}
      </div>
    </Section>
  );
}
