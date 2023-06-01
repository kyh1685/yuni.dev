import { ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <main className="flex flex-col min-h-screen px-7 mt-20">
        <Header />
        <section className="w-full max-w-screen-md m-auto grow max-sm:flex flex-col items-center pt-5">
          {children}
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
