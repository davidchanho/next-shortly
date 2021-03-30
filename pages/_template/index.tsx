import React, { PropsWithChildren } from "react";
import Footer from "../../components/_layout/footer";
import Head from "../../components/_layout/head";
import Navbar from "../../components/_layout/navbar";

function Template({ children }: PropsWithChildren<{}>) {
  return (
    <div>
      <Head />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Template;
