import React from "react";

type langValue = {
  lang: string;
  setLang: (set: string) => void;
  langData?: {
    [key: string]: string;
  };
};

export const LangContext = React.createContext<langValue>({
  lang: "",
  setLang: () => {},
});
