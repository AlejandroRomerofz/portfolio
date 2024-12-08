import { useContext } from "react";
import { LangContext } from "../contexts/LangContext";

export default function useLang() {
  const { lang, setLang, langData } = useContext(LangContext);

  const changeLang = (lang: string) => {
    localStorage.setItem("lang", lang);
    setLang(lang);
  };

  const getLangs = async () => {
    const langs = await fetch("/resources/lang/langs.json").then((langs) =>
      langs.json()
    );
    return langs as { name: string; id: string }[];
  };

  const l = (index: string) => {
    if (!langData) return "";
    return langData[index];
  };

  return { changeLang, lang, l, getLangs, langData };
}
