import { Icon } from "@iconify/react";
import { useState } from "react";

type SkillIconProps = {
  skill: string;
  name?: string;
};

export default function SkillIcon({ skill, name = "hola" }: SkillIconProps) {
  const [showName, setShowName] = useState(false);

  return (
    <div className="relative">
      <Icon
        onMouseLeave={() => {
          setShowName(false);
        }}
        onMouseOver={() => {
          setShowName(true);
        }}
        icon={`logos:${skill}`}
        className="text-4xl sm:text-5xl relative"
      ></Icon>
      <div
        className={`absolute top-full left-0 transition-all duration-150 pointer-events-none min-w-full text-center ${
          showName ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="capitalize">{name}</p>
      </div>
    </div>
  );
}
