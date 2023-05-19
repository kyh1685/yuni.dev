import { ReactNode } from "react";
import Head from "next/head";

import metadata from "@/data/metadata";

import Header from "./Header";

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
      <main>{children}</main>
    </>
  );
};

export default Layout;
