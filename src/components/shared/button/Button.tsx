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
  return (
    <div
      onClick={onClick}
      className="w-100 rounded-lg py-3 px-8 flex justify-center items-center gap-3 border-2 border-textColorSecondary"
    >
      {Icon != undefined ? <Icon></Icon> : null}
      <p className="text-sm">{text}</p>
    </div>
  );
}
