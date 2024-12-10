import { FaAnglesDown, FaAnglesUp } from "react-icons/fa6";

type ScrollIndicatorProps = {
  type?: "up" | "down";
};

export default function ScrollIndicator({
  type = "down",
}: ScrollIndicatorProps) {
  return (
    <div
      className={`absolute h-sm:hidden items-center gap-2 left-0 w-full  flex justify-center ${
        type == "down"
          ? "bottom-0 h-sm:hidden sm:pb-5 pb-[4.5rem]"
          : "top-[calc(var(--header-height)+12px)]"
      }`}
    >
      <p className="font-bold text-sm">Scroll</p>
      {type == "down" ? (
        <FaAnglesDown className="text-lg"></FaAnglesDown>
      ) : (
        <FaAnglesUp className="text-lg"></FaAnglesUp>
      )}
    </div>
  );
}
