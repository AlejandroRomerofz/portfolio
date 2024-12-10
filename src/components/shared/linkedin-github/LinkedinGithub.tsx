import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function LinkedinGithub({ classname }: { classname?: string }) {
  return (
    <div className={`flex gap-4 text-4xl ${classname}`}>
      <a
        className="hover:text-[#0a66c2]"
        href="https://www.linkedin.com/in/alejandro-romero-fernandez/"
      >
        <FaLinkedin></FaLinkedin>
      </a>
      <a
        className="hover:text-[#919191] dark:hover:text-[#8b8b8b]"
        href="https://github.com/AlejandroRomerofz"
      >
        <FaGithub></FaGithub>
      </a>
    </div>
  );
}
