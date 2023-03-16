import { useMemo, useState } from "react";
import A from "../components/A";
import Folder from "../components/Folder";
import SearchIcon from "../components/SearchIcon";
import ViteLogo from "../components/ViteLogo";
import data from "../utils/data";
import { toSnakeCase } from "../utils/misc";

const Home = () => {
  const [query, querySet] = useState("");
  const lowerCaseQuery = useMemo(() => query.toLowerCase(), [query]);

  const filteredData = useMemo(
    () =>
      data.filter((d) => {
        if (!lowerCaseQuery) {
          return true;
        }
        return d.title.toLowerCase().indexOf(lowerCaseQuery) !== -1;
      }),
    [lowerCaseQuery]
  );

  return (
    <div className="relative w-screen">
      <div className="circle bg-purple top-[-261px] md:top-[-161px] left-[-338px] md:left-[-188px]" />
      <div className="circle bg-blue top-[-30px] md:top-[77px] left-[-392px] md:left-[-242px]" />
      <div className="circle bg-purple top-[167px] md:top-[267px] right-[-437px] md:right-[-337px]" />
      <div className="circle bg-blue top-[383px] md:top-[483px] right-[-399px] md:right-[-299px]" />
      <div className="absolute overflow-hidden bottom-0 w-full h-96 z-[-1]">
        <div className="circle bg-purple bottom-[-302px] left-[-339px] md:left-[-169px]" />
        <div className="circle bg-blue bottom-[-155px] left-[-388px] md:left-[-288px]" />
        <div className="circle bg-purple bottom-[-302px] right-[-351px] md:right-[-151px]" />
        <div className="circle bg-blue bottom-[-155px] right-[-400px] md:right-[-270px]" />
      </div>
      <div className="min-h-screen mx-auto max-w-6xl flex flex-col items-center px-2 md:px-4">
        <ViteLogo className="w-24 mt-8 md:w-32 md:mt-[3.125rem] text-purple" />
        <h1 className="text-black text-4xl md:text-[4rem] font-bold mt-20 md:mt-36">
          Vite.<span className="text-purple">Directory</span>
        </h1>
        <p className="md:text-lg text-center text-gray-500 mt-8 max-w-2xl">
          Vite.Directory is a curated URL guide to find anything about Vite - the fast, feeless, and
          eco-friendly smart contract platform! Here you'll find links to education, exchanges,
          wallets, dapps, developer tools, and more!
        </p>
        <div className="mt-10 w-full max-w-[37.8125rem] border border-gray-500 flex rounded-full overflow-hidden">
          <SearchIcon className="ml-3 md:ml-[1.613125rem] absolute self-center" />
          <input
            className="h-12 md:h-[3.75rem] pl-14 md:pl-24 w-full md:text-lg placeholder-gray-500 text-purple"
            type="text"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            value={query}
            onChange={(e) => querySet(e.target.value)}
            placeholder="What link are you looking for?"
          />
        </div>
        <div className="flex justify-center items-center flex-col md:flex-row mt-10 w-full max-w-[56.5rem]">
          <p className="mb-4 md:mb-0 md: mr-5 font-bold text-2xl whitespace-nowrap">
            Popular links:
          </p>
          <div className="flex space-x-2 md:space-x-5 w-full">
            {["Vite Wallets", "DEXes", "Block Explorers"].map((label) => {
              const id = toSnakeCase(label);
              return (
                <a
                  key={id}
                  className="purple-btn"
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(id)!.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {label}
                </a>
              );
            })}
          </div>
        </div>
        <div className="w-full mt-20 md:mt-40">
          {filteredData.length ? (
            filteredData.map((d) => <Folder key={d.title} {...d} />)
          ) : (
            <p className="font-medium text-2xl text-center">
              Oops! Searches only filter by section header.
            </p>
          )}
        </div>
        <ViteLogo className="w-48 md:w-80 text-purple mt-16 md:mt-[6.25rem]" />
        <p className="mt-12 md:mt-24 mb-7 text-center md:text-lg made-by">
          Made with ❤️ by{" "}
          <A
            className="text-purple"
            href="https://twitter.com/intent/user?screen_name=ViteDirectory"
          >
            fans of Vite
          </A>{" "}
          • Did we miss something? DM us!
        </p>
      </div>
    </div>
  );
};

export default Home;
