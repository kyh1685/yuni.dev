import Link from "next/link";
import nav from "../data/nav";

const Nav = () => {
  return (
    <nav>
      {nav.map((data) => (
        <Link className="mr-5" href={data.link} key={data.title}>
          {data.title}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
