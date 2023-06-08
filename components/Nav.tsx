import { useState } from "react";

import NavLink from "./NavLink";

const Nav = () => {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

  const handleDropdownMenu = () => {
    setIsDropdownMenuOpen((prev) => !prev);
  };

  return (
    <nav className="flex items-center">
      <ul className="max-sm:hidden">
        <NavLink />
      </ul>

      <div className="sm:hidden">
        <button
          type="button"
          className="cursor-pointer hover:bg-[#ededed] dark:hover:bg-[#262626] rounded-md p-2"
          onClick={handleDropdownMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="28"
            height="28"
            className="dark:fill-[#fafafa]"
          >
            <path d="M480,224H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,224,480,224z" />
            <path d="M32,138.667h448c17.673,0,32-14.327,32-32s-14.327-32-32-32H32c-17.673,0-32,14.327-32,32S14.327,138.667,32,138.667z" />
            <path d="M480,373.333H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,373.333,480,373.333z" />
          </svg>
        </button>
        {isDropdownMenuOpen && (
          <ul className="flex flex-col w-full h-screen absolute top-20 left-0 p-7 gap-8 bg-[#fafafa] dark:bg-[#16181a] transition duration-500">
            <NavLink handleDropdownMenu={handleDropdownMenu} />
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;
