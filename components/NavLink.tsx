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
          className="sm:mr-5 font-medium text-lg"
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
