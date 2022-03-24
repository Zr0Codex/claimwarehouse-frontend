import React, { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import { logout, isLogin } from "../middleware/auth";
import { Link } from "react-router-dom";
import LOGO_HEADING from "../assets/icons/LOGO-THAILIFE-2.svg";
import profile from "../assets/icons/profile.svg";
import { BellOutlined } from "@ant-design/icons";
import { Menu, Dropdown, Space } from "antd";
import DropdownIcon from "../assets/icons/DropdownIcons.svg";
import LOGO_THAILIFE_BIG from "../assets/icons/LOGO-THAILIFEE-BIGPICTURE.svg";

import { LogoutOutlined, IdcardOutlined } from "@ant-design/icons";
// import NoticeIcon from "../component/noticeIcon";

const Header = (props) => {
  const [state, setState] = useState(false);
  const [name, setName] = useState("");

  // const [user, setUser] = useState({})

  useEffect(() => {
    setState(isLogin());
    setName(
      `${localStorage.getItem("firstName")} ${localStorage.getItem(
        "lastName"
      )} (${localStorage.getItem("group_code")})`
    );
  }, [props]);

  const handleAllRead = () => console.warn("handleAllRead");

  const handleLogout = () => {
    logout();
    setState(false);
  };

  // for render notify in bell icon menu just loop data through it and done!!
  const menu = (
    <Menu>
      <Menu.Item>1st menu item</Menu.Item>
      <Menu.Item>2nd menu item</Menu.Item>
      <Menu.Item>3rd menu item</Menu.Item>
    </Menu>
  );

  const usermenu = (
    <Menu>
      <Menu.Item key="0" icon={<IdcardOutlined />}>
        <Link to="/page-1">
          <span
            style={{
              fontFamily: "DBOzoneX",
              marginLeft: "20px",
              marginTop: "10px",
              fontSize: "20px",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            โพรไฟล์
          </span>
        </Link>
      </Menu.Item>
      <Menu.Item key="1" icon={<LogoutOutlined />}>
        <Link onClick={() => handleLogout()} to="/">
          <span
            style={{
              fontFamily: "DBOzoneX",
              marginLeft: "20px",
              marginTop: "10px",
              fontSize: "20px",
              alignItems: "center",
            }}
          >
            ออกจากระบบ
          </span>
        </Link>
      </Menu.Item>
    </Menu>
  );

  if (state === false) {
    return (
      <header style={{ height: "138px" }}>
        <Navbar>
          <Link className="navbar-brand" to="/home">
            <img
              src={LOGO_THAILIFE_BIG}
              alt="React Logo"
              style={{ marginLeft: "20px" }}
            />
            <span
              style={{
                fontFamily: "DBOzoneX",
                marginLeft: "20px",
                marginTop: "10px",
                fontSize: "54px",
                alignItems: "center",
              }}
            >
              ระบบคลังเอกสารสินไหม
            </span>
          </Link>
          <Navbar.Toggle />
        </Navbar>
      </header>
    );
  }

  return (
    <header style={{ height: "65px" }}>
      <Navbar>
        <Link className="navbar-brand" to="/home">
          <img src={LOGO_HEADING} alt="React Logo" />
          <span
            style={{
              fontFamily: "DBOzoneX",
              marginLeft: "20px",
              marginTop: "10px",
              fontSize: "40px",
              alignItems: "center",
            }}
          >
            ระบบคลังเอกสารสินไหม
          </span>
        </Link>
        <Navbar.Toggle />
        {}
        <Navbar.Collapse
          className="justify-content-end"
          style={{ marginLeft: "20px" }}
        >
          <Navbar.Text>
            <Space style={{ marginRight: "20px" }}>
              <Dropdown
                overlay={menu}
                placement="bottomLeft"
                trigger={["click"]}
              >
                {/* <NoticeIcon width={"20px"} color={"#122C34"} count={3} /> */}
                <BellOutlined style={{ width: "30px" }} />
              </Dropdown>

              <span
                style={{
                  justifyContent: "center",
                  fontFamily: "DBOzoneX",
                  fontSize: "22px",
                  alignItems: "center",
                }}
              >
                {name}
              </span>
              <img src={profile} alt="React Logo" />

              <Dropdown
                overlay={usermenu}
                placement="bottomLeft"
                trigger={["click"]}
              >
                <img src={DropdownIcon} alt="React Logo" />
              </Dropdown>
            </Space>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
