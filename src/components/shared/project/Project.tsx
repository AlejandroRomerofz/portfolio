import { BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { ProjectModel } from "../../../models/ProjectsModel";
import useLang from "../../../hooks/useLang";

type ProjectProps = {
  project: ProjectModel;
};

export default function Project({
  project: { description, imageUrl, name, githubUrl, url },
}: ProjectProps) {
  const { l } = useLang();

  return (
    <div className="flex flex-col gap-5 w-full p-4 bg-bgTertiary justify-between dark:bg-darkBgTertiary rounded-lg project">
      <div className="flex gap-3 items-center ">
        <div className="w-8 h-8 overflow-hidden">
          <img
            className="w-full h-full object-fill"
            src={"/resources/images/" + imageUrl}
            alt=""
          />
        </div>
        <h2 className="text-lg font-bold">{name}</h2>
      </div>
      <p className="text-sm">{l(description) ?? description}</p>
      <div className="flex flex-col gap-1">
        {url ? (
          <div className="flex items-center gap-2 text-sm">
            <BiLinkExternal></BiLinkExternal>
            <a className="hover:underline" href={"https://" + url}>
              {url}
            </a>
          </div>
        ) : null}
        {githubUrl ? (
          <div className="flex items-center gap-2 text-sm">
            <FaGithub></FaGithub>
            <a className="hover:underline" href={"https://" + githubUrl}>
              {l("PROJECTS_VIEWGITHUB")}
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
}
