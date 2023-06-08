import { ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fafafa] text-[#16181a] dark:bg-[#16181a] dark:text-[#ecedee] transition duration-500">
        <section className="max-w-screen-md m-auto p-7">{children}</section>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
