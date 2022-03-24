import { Menu } from "antd";

import React from "react";
import parse from "html-react-parser";

import MenuIcon from "../../assets/icons/CustomIcon/MunuIcon";

import OpenBook from "../../assets/icons/open-book2.png";

import HomeRoutes from "../../util/HomeRoutes";

import "./sidenav.scss";

import { withRouter, Link } from "react-router-dom";

const { SubMenu } = Menu;

// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub3"];

// eslint-disable-next-line
const SidNav = (props) => {
  const [openKeys, setOpenKeys] = React.useState([]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  function compare(values) {
    let data1 = JSON.parse(localStorage.getItem("group_menu"));
    for (var i in data1) {
      if (data1[i].menu.includes(values)) {
        return values;
      }
    }
  }
  var isDocument_menu = false;
  var isReport_menu = false;
  var isMaintain = false;
  function compareMenuItem(values) {
    let group_menu = JSON.parse(localStorage.getItem("group_menu"));
    for (var group in group_menu) {
      for (var document_menu in values.document_menu) {
        if (
          group_menu[group].menu === values.document_menu[document_menu].menu_id
        ) {
          isDocument_menu = true;
        }
      }
      for (var report_menu in values.report_menu) {
        if (
          group_menu[group].menu === values.report_menu[report_menu].menu_id
        ) {
          isReport_menu = true;
        }
      }
      for (var maintain_permission in values.maintain_permission) {
        if (
          group_menu[group].menu ===
          values.maintain_permission[maintain_permission].menu_id
        ) {
          isMaintain = true;
        }
      }
    }
  }

  compareMenuItem(HomeRoutes);
  return (
    <>
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        inlineIndent={5}
        style={{
          borderRadius: "10px",
        }}
      >
        {isDocument_menu ? (
          <SubMenu
            key="sub1"
            icon={<MenuIcon width="44" height="42" />}
            title="คลังเอกสารสินไหม"
            style={{
              width: 256,
              height: "100%",
              // marginBottom: '20px',
              background: "#FFFFF",
              borderRadius: "10px",
              // border: '2px solid red',
              fontFamily: "DBOzoneX",
              fontSize: "24px",
              marginLeft: "auto",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "",
            }}
          >
            {HomeRoutes.document_menu
              .filter((data) => compare(data.menu_id))
              .map((data) => {
                return (
                  <>
                    <Menu.Item
                      key={data.menu_id}
                      style={{
                        fontSize: "18px",
                        height: "51px",
                        paddingLeft: "40px",
                        lineHeight: "80%",
                      }}
                    >
                      {parse(data.wording)}
                      <Link to={data.path} />
                    </Menu.Item>
                    <Menu.Divider />
                  </>
                );
              })}
          </SubMenu>
        ) : (
          ""
        )}
        <Menu.Divider style={{ height: "10px" }} />
        {isReport_menu ? (
          <SubMenu
            key="sub2"
            icon={
              <img
                className="active"
                src={OpenBook}
                alt="yellow star"
                width="44"
                height="42"
              />
            }
            title="รายงาน"
            style={{
              width: 256,
              height: "100%",
              background: "#FFFFFF",
              borderRadius: "10px",
              // border: '1px solid red',
              fontFamily: "DBOzoneX",
              fontSize: "24px",
              marginLeft: "auto",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {HomeRoutes.report_menu
              .filter((data) => compare(data.menu_id))
              .map((data) => {
                return (
                  <>
                    <Menu.Item
                      key={data.menu_id}
                      style={{
                        fontSize: "18px",
                        height: "51px",
                        paddingLeft: "40px",
                        lineHeight: "80%",
                      }}
                    >
                      {parse(data.wording)}
                      <Link to={data.path} />
                    </Menu.Item>
                    <Menu.Divider />
                  </>
                );
              })}
          </SubMenu>
        ) : (
          ""
        )}
        {isMaintain ? (
          <SubMenu
            key="sub3"
            icon={<MenuIcon width="44" height="42" />}
            title="สิทธิ์การใช้งาน"
            style={{
              width: 256,
              height: "100%",
              // marginBottom: '20px',
              background: "#FFFFF",
              borderRadius: "10px",
              // border: '2px solid red',
              fontFamily: "DBOzoneX",
              fontSize: "24px",
              marginLeft: "auto",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "",
            }}
          >
            {HomeRoutes.maintain_permission
              .filter((data) => compare(data.menu_id))
              .map((data) => {
                return (
                  <>
                    <Menu.Item
                      key={data.menu_id}
                      style={{
                        fontSize: "18px",
                        height: "51px",
                        paddingLeft: "40px",
                        lineHeight: "80%",
                      }}
                    >
                      {parse(data.wording)}
                      <Link to={data.path} />
                    </Menu.Item>
                    <Menu.Divider />
                  </>
                );
              })}
          </SubMenu>
        ) : (
          ""
        )}
      </Menu>
    </>
  );
};

export default withRouter(SidNav);
