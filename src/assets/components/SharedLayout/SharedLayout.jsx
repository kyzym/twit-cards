import React from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

export const SharedLayout = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
