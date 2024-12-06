import meImage from "../../../resources/images/me.webp";
import Button from "../../shared/button/Button";
import { MdOutlineSimCardDownload } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa6";
import { FaAnglesDown } from "react-icons/fa6";
import BottomScreen from "./bottom-screen/BottomScreen";

export default function Home() {
  return (
    <div className="snap-mandatory h-[100vh] snap-y overflow-auto scrollbar-hide">
      <div className="bg-bgPrimary dark:bg-darkBgPrimary overflow-auto snap-center relative  h-screen pt-[calc(var(--header-height)+1.3rem)] pb-5 px-5">
        <div className="flex container flex-col gap-7 max-w-[600px]">
          <div className="flex items-center  gap-4">
            <div className="rounded-full w-[4.5rem] h-[4.5rem] overflow-hidden">
              <img
                className="object-cover h-full w-full"
                src={meImage}
                alt=""
              />
            </div>
            <div className="">
              <p className="font-bold">Alejandro Romero</p>
              <p>Software Developer</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-bold text-lg">
              Welcome to my digital{" "}
              <span className="text-textColorTertiary">Portfolio</span>.
            </p>
            <p className="text-sm">
              I'm a Full-Stack Web Developer with a passion for building
              efficient and scalable web solutions.
            </p>
            <p className="text-sm">
              I craft seamless user experiences and powerful applications. I
              love staying at the forefront of technology, continuously honing
              my skills, and sharing insights with the developer community.
            </p>
          </div>

          <div className="w-4/5 mx-auto flex flex-col gap-4">
            <Button Icon={FaLaptopCode} text="See my projects"></Button>
            <Button
              text="Download my cv"
              Icon={MdOutlineSimCardDownload}
            ></Button>
            <Button Icon={IoMailOutline} text="Contact with me"></Button>
          </div>
        </div>
        <div className="absolute left-0 bottom-0 w-full pb-5 flex justify-center">
          <FaAnglesDown className="text-2xl cursor-pointer hover:scale-125 hover:-translate-y-2   duration-100 hover:text-textColorTertiary"></FaAnglesDown>
        </div>
      </div>

      <div className="h-screen snap-center w-screen"></div>
      <BottomScreen></BottomScreen>
    </div>
  );
}
