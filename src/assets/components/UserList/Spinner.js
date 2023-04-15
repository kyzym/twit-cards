import React from "react";
import { ColorRing } from "react-loader-spinner";

export const Spinner = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={["#5bc4e1", "#60f4b9", "#de6af8", "#bb2c8b", "#faef71"]}
    />
  );
};
