import Link from "next/link";
import nav from "../data/nav";

const Nav = () => {
  return (
    <nav className="max-w-screen-md h-20 m-auto py-5 flex items-center">
      {nav.map((data) => (
        <Link className="mr-5 text-lg" href={data.link} key={data.title}>
          {data.title}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
