import meImage from "../../../resources/images/me.webp";
import Button from "../../shared/button/Button";
import { MdOutlineSimCardDownload } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa6";
import { FaAnglesDown } from "react-icons/fa6";
import BottomScreen from "./bottom-screen/BottomScreen";
import Section from "../../shared/section/Section";
import useLang from "../../../hooks/useLang";

export default function Home() {
  const { l } = useLang();

  return (
    <div className="snap-mandatory h-[100vh] snap-y overflow-auto scrollbar-hide">
      <Section screenHeight className="snap-center">
        <div className="flex items-center gap-4">
          <div className="rounded-full w-[4.5rem] h-[4.5rem] overflow-hidden">
            <img className="object-cover h-full w-full" src={meImage} alt="" />
          </div>
          <div className="">
            <p className="font-bold">Alejandro Romero</p>
            <p>{l("HOME_ROLE")}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-bold text-lg">
            {l("HOME_SUBTITLE")}
            <span className="text-textColorTertiary">
              {" "}
              {l("HOME_SUBTITLE_SPAN")}
            </span>
            .
          </p>
          <p className="text-sm">{l("HOME_DESCRIPTION_P1")}</p>
          <p className="text-sm">{l("HOME_DESCRIPTION_P2")}</p>
        </div>

        <div className="w-4/5 mx-auto flex flex-col gap-4">
          <Button Icon={FaLaptopCode} text={l("HOME_BUTTON_PROJECTS")}></Button>
          <Button
            text={l("HOME_BUTTON_CV")}
            Icon={MdOutlineSimCardDownload}
          ></Button>
          <Button Icon={IoMailOutline} text={l("HOME_BUTTON_CONTACT")}></Button>
        </div>

        <div className="absolute left-0 bottom-0 w-full pb-5 flex justify-center">
          <FaAnglesDown className="text-2xl cursor-pointer hover:scale-125 hover:-translate-y-2 duration-100 hover:text-textColorTertiary"></FaAnglesDown>
        </div>
      </Section>

      <div className="h-screen snap-center w-screen"></div>
      <BottomScreen></BottomScreen>
    </div>
  );
}
