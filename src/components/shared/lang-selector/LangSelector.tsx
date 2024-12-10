import { useEffect, useState } from "react";
import useLang from "../../../hooks/useLang";
import { IoIosArrowDown } from "react-icons/io";

export default function LangSelector() {
  const { changeLang, lang, getLangs, l, langData } = useLang();
  const [langs, setLangs] = useState<{ id: string; name: string }[]>([]);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | undefined>();

  const getAllLangs = () => {
    getLangs().then((allLangs) => {
      setLangs(allLangs);
      setSelected(l(allLangs.find(({ id }) => id == lang)?.name ?? ""));
    });
  };

  useEffect(() => {
    getAllLangs();
  }, []);

  // Avoid visual bug
  useEffect(() => {
    setSelected(l(langs.find(({ id }) => id == lang)?.name ?? ""));
  }, [langData]);

  return (
    <div
      onClick={() => {
        if (open) {
          setOpen(false);
        } else {
          setOpen(true);
        }
      }}
      onMouseLeave={() => {
        setOpen(false);
      }}
      className="relative p-2 border-[1px] rounded-md cursor-pointer select-none"
    >
      <p className="flex items-center gap-2">
        {selected ?? ""}
        <IoIosArrowDown />
      </p>
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute  w-full flex-col left-0 top-[calc(100%-2px)] bg-bgTertiary dark:bg-darkBgTertiary border-[1px]`}
      >
        {langs.map(({ name, id }, index) => {
          return (
            <p
              onClick={() => {
                changeLang(id);
                setOpen(false);
              }}
              key={index}
              className={`${
                id == lang
                  ? "bg-blue-200 dark:bg-blue-900"
                  : "hover:bg-slate-100 hover:dark:bg-gray-800"
              } p-2 `}
            >
              {l(name)}
            </p>
          );
        })}
      </div>
    </div>
  );
}
