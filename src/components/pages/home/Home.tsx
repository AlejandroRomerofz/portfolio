import meImage from "../../../resources/images/me.webp";
import Button from "../../shared/button/Button";
import { MdOutlineSimCardDownload } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa6";
import BottomScreen from "./bottom-screen/BottomScreen";
import Section from "../../shared/section/Section";
import useLang from "../../../hooks/useLang";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ScrollIndicator from "../../shared/scroll-indicator/ScrollIndicator";

export default function Home() {
  const { l, lang } = useLang();
  const navigate = useNavigate();

  const handleCvDownloadClick = () => {
    fetch("/resources/resumes/resume_" + lang + ".pdf")
      .then((data) => {
        return data.blob();
      })
      .then((dataBlob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(dataBlob);
        link.download = "AlejandroRomero_" + lang + ".pdf"; // Nombre del archivo al descargar
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  };

  const handleContactClick = () => {
    const link = document.createElement("a");
    link.href = "mailto:alejandroromerofz@gmail.com"; // Nombre del archivo al descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Helmet>
        <html className="scrollbar-hide snap-y snap-mandatory" />
      </Helmet>
      <Section
        screenHeight
        className="snap-center z-10 relative overflow-auto pointer-events-auto"
      >
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
          <Button
            Icon={FaLaptopCode}
            onClick={() => {
              navigate("/projects");
            }}
            text={l("HOME_BUTTON_PROJECTS")}
          ></Button>
          <Button
            text={l("HOME_BUTTON_CV")}
            Icon={MdOutlineSimCardDownload}
            onClick={handleCvDownloadClick}
          ></Button>
          <Button
            Icon={IoMailOutline}
            onClick={handleContactClick}
            text={l("HOME_BUTTON_CONTACT")}
          ></Button>
        </div>

        <ScrollIndicator></ScrollIndicator>
      </Section>

      {/* this component is only to allow the document to be scrolled*/}
      <div className="h-screen snap-center w-screen pointer-events-auto"></div>

      {/* this is what you see after scroll*/}
      <BottomScreen></BottomScreen>
    </>
  );
}
