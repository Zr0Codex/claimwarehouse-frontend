import React from "react";
import Header from "./header";
import Footer from "./footer";
import Sidenav from "./sidenav/sidenav";

const CustomLayout = (props) => {
  return (
    <main
      className={`app-layout ${
        props.className !== undefined ? props.className : ""
      }`}
    >
      {props.isHeader && <Header />}
      {props.isSideNav && (
        <div
          style={{
            marginLeft: "15px",
            width: "256",
            height: "63px",
            marginTop: "40px",
            float: "left",
          }}
        >
          <Sidenav style={{ borderRadius: "10px" }} />
        </div>
      )}
      <div style={{ borderRadius: "10px", height: "100%" }}>
        {props.children}
      </div>
      <Footer />
    </main>
  );
};

export default CustomLayout;
