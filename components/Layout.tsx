import { ReactNode } from "react";
import Head from "next/head";

import metadata from "@/data/metadata";

import Header from "./Header";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <main className="flex flex-col min-h-screen px-7">
        <Header />
        <section className="w-full max-w-screen-md m-auto grow max-sm:flex flex-col items-center">{children}</section>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
