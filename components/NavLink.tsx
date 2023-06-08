import Link from "next/link";
import nav from "../data/nav";

interface Props {
  handleDropdownMenu?: () => void;
}

const NavLink = ({ handleDropdownMenu }: Props) => {
  return (
    <>
      {nav.map((data) => (
        <Link
          className="font-medium text-lg px-4 py-2 hover:bg-[#ededed] dark:hover:bg-[#262626] rounded-md"
          href={data.link}
          key={data.title}
          onClick={handleDropdownMenu || undefined}
        >
          {data.title}
        </Link>
      ))}
    </>
  );
};

export default NavLink;
