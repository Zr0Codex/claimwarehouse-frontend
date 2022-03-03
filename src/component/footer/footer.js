import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const CustomFooter = () => {
  return (
    <>
      <p
        style={{
          fontFamily: "DBOzoneX",
          fontSize: "22px",
          color: "#827F7F",
        }}
      >
        Copyright © 2564, Thai Life Insurance Public Co. Ltd
      </p>
    </>
  );
};

export default CustomFooter;
