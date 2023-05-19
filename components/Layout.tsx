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
      <Header />
      <main className="max-w-screen-md m-auto">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
