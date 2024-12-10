import { useEffect, useState } from "react";
import Section from "../../../shared/section/Section";
import SkillIcon from "../../../shared/skill-icon/SkillIcon";
import useLang from "../../../../hooks/useLang";
import ScrollIndicator from "../../../shared/scroll-indicator/ScrollIndicator";

export default function BottomScreen() {
  const { l } = useLang();
  const [skills, setSkills] = useState<{ name: string; icon: string }[]>();
  const [experiences, setExperiences] =
    useState<{ name: string; url: string; imageUrl: string }[]>();

  useEffect(() => {
    getSkills().then((data) => {
      setSkills(data);
    });
    getExperiences().then((data) => {
      setExperiences(data);
    });
  }, []);

  const getSkills = () => {
    return fetch("resources/data/skills.json").then((data) => data.json());
  };

  const getExperiences = () => {
    return fetch("resources/data/experiences.json").then((data) => data.json());
  };

  return (
    <Section
      bgColor="secondary"
      fixed
      className="snap-center z-0 h-screen overflow-auto"
    >
      <ScrollIndicator type="up"></ScrollIndicator>
      <div className="mt-3">
        <h2 className="text-lg font-bold"> {l("HOME_ABOUT_TITLE")}</h2>
        <p className="text-sm font-light">{l("HOME_ABOUT_TEXT")}</p>
      </div>
      <div className="flex flex-col gap-5">
        <div className="">
          <h2 className="text-lg font-bold"> {l("HOME_EXPERIENCES_TITLE")}</h2>
          <p className="text-sm font-light">{l("HOME_EXPERIENCES_SUBTITLE")}</p>
        </div>

        <div className="flex gap-5 flex-wrap justify-center items-center">
          {experiences
            ? experiences.map(({ imageUrl, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  className="sm:w-32 w-28"
                >
                  <img src={`/resources/images/${imageUrl}`} alt="" />
                </a>
              ))
            : null}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="">
          <h2 className="text-lg font-bold">{l("HOME_SKILLS_TITLE")}</h2>
          <p className="text-sm font-light">{l("HOME_SKILLS_SUBTITLE")}</p>
        </div>
        <div className="flex gap-5 items-center flex-wrap justify-center">
          {skills
            ? skills.map(({ icon, name }, index) => (
                <div key={index} className="pb-4">
                  <SkillIcon name={name} skill={icon}></SkillIcon>
                </div>
              ))
            : null}
        </div>
      </div>
    </Section>
  );
}
