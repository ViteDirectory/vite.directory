import { useMemo, useState } from "react";
import { FolderData } from "../utils/data";
import { toSnakeCase } from "../utils/misc";
import A from "./A";
import Chevron from "./Chevron";

const Folder = ({ title, links }: FolderData) => {
  const [open, openSet] = useState(true);
  const [autoHeight, autoHeightSet] = useState(0);

  const id = useMemo(() => toSnakeCase(title), [title]);
  return (
    <div
      className={`w-full flex flex-col transition-all duration-300 ${
        open ? "mb-6 md:mb-12" : "mb-2 md:mb-4"
      }`}
    >
      <div className="flex group justify-between xl:flex-row-reverse xl:justify-end xl:ml-[-2.25rem]">
        <button className="flex justify-center items-center" onClick={() => openSet(!open)}>
          <p id={id} className="font-bold text-xl md:text-2xl mr-3 md:mr-5">
            {title}
          </p>
          <Chevron className={`transition ${open ? "" : "rotate-180"} duration-300`} />
        </button>
        <A
          href={`#${id}`}
          className="xl:opacity-0 xl:mr-4 text-2xl text-gray-500 transition-opacity duration-300 group-hover:opacity-100"
        >
          #
        </A>
      </div>
      <div
        className={`w-full md:space-y-3 transition-all duration-300 ${
          open ? "mt-1 md:mt-4" : "opacity-0"
        }`}
        style={{
          height: autoHeight ? (open ? `${autoHeight}px` : "0") : "auto",
        }}
        ref={(e) => {
          if (e?.offsetHeight) {
            autoHeightSet(e.offsetHeight);
          }
        }}
      >
        {links.map((l, i) => (
          <div className="flex items-center" key={i}>
            <div className="rounded-full border-2 border-black mr-2 md:mr-4">
              <div
                className={`rounded-full m-0.5 md:m-1 h-3 w-3 md:h-4 md:w-4 ${
                  i % 2 ? "bg-blue" : "bg-purple"
                }`}
              />
            </div>
            <p className="md:text-lg whitespace-nowrap truncate leading-9	text-purple">
              <span className="text-black">{l.label} - </span>
              <A className="underline" href={l.url}>
                {l.url}
              </A>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Folder;
