import { useState } from "react";
import { IconType } from "react-icons";
import { FaRegWindowClose } from "react-icons/fa";

type ButtonProps = {
  text?: string;
  Icon?: IconType;
  onClick?: () => void;
};

export default function Button({
  text = "Button",
  Icon = FaRegWindowClose,
  onClick = () => {},
}: ButtonProps) {
  const [overed, setOvered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseOver={() => {
        setOvered(true);
      }}
      onMouseLeave={() => {
        setOvered(false);
      }}
      className="w-100 rounded-lg overflow-hidden cursor-pointer py-3 px-8 flex relative justify-center items-center gap-3 border-2"
    >
      {Icon != undefined ? <Icon className="z-10"></Icon> : null}
      <p className="text-sm z-10">{text}</p>
      <div
        className={`absolute top-0 ${
          overed ? "left-0" : "left-full"
        } transition-all duration-300 bg-blue-200 dark:bg-blue-900 w-full h-full z-0 `}
      ></div>
    </div>
  );
}
