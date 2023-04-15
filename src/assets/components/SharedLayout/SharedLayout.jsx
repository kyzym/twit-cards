import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export const SharedLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
