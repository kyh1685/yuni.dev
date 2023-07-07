import Image from "next/image";

import Nav from "./Nav";

const Header = () => {
  const themeModeHandle = () => {
    localStorage.theme = localStorage.theme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="sticky top-0 left-0 w-full bg-[#fafafa] text-[#16181a] dark:bg-[#16181a] dark:text-[#ecedee] transition duration-500">
      <div className="max-w-screen-md m-auto flex justify-between p-7 max-sm:py-4">
        <Nav />
        <button
          type="button"
          className="cursor-pointer p-2 hover:bg-[#ededed] dark:hover:bg-[#262626] rounded-md"
          onClick={themeModeHandle}
        >
          <Image width={30} height={30} alt="라이트 모드로 변경" src="/static/dark.svg" className="hidden dark:block" />
          <Image width={30} height={30} alt="다크 모드로 변경" src="/static/light.svg" className="dark:hidden" />
        </button>
      </div>
    </header>
  );
};

export default Header;
