import React, { useState, useContext, useEffect } from "react";
import { Calendar, Badge, Modal, Checkbox, Input, Menu, Dropdown } from "antd";
import { FieldTimeOutlined, MoreOutlined } from "@ant-design/icons";
import moment from "moment";

const EventCell = ({ event, status }) => {
  const { setShow } = useContext(Ctx);

  return (
    <li className="cell" onClick={() => setShow(true)}>
      <Badge status={status} text={event.content} />
    </li>
  );
};

const Ctx = React.createContext(null);

const ResgisTRY = () => {
  const [show, setShow] = useState(false);
  const [contents, setContent] = useState([]);
  let now = moment().format("dddd, DD MMM YYYY : hh:mm A");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          process.env.REACT_APP_API_ENDPOINT_REGISTRATION_DATA
        );
        const json = await response.json();
        setContent(json);
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  function getListData(value) {
    let listData;
    const dateValue = value.format("yyyy/MM/DD");

    for (var index = 1; index < Object.keys(contents).length; index++) {
      for (var content in contents) {
        if (contents.hasOwnProperty(content)) {
          switch (dateValue) {
            case contents[content].date:
              listData = contents[content].data;
              break;
            default:
          }
        }
      }
    }
    return listData || [];
  }

  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <EventCell event={item} status={item.type} />
          </li>
        ))}
      </ul>
    );
  }

  const menu = (
    <Menu>
      <Menu.Item key="0">delete</Menu.Item>
      <Menu.Item key="1">edit</Menu.Item>
    </Menu>
  );

  return (
    <>
      <Modal
        centered
        visible={show}
        onCancel={() => setShow(false)}
        onOk={() => setShow(false)}
        okText="Save"
        closable={false}
        style={{
          fontFamily: "DBOzoneX",
        }}
      >
        <div style={{ padding: "7px" }}>
          <span>
            <span>
              <Checkbox style={{ fontSize: "20px" }} defaultChecked>
                {" "}
                ได้รับเอกสารแล้ว
              </Checkbox>
              <FieldTimeOutlined />
              {now}
              <Dropdown overlay={menu} trigger={["click"]}>
                <MoreOutlined
                  style={{ fontSize: "20px" }}
                  onClick={(e) => e.preventDefault()}
                />
              </Dropdown>
            </span>
          </span>
        </div>
        <div
          style={{
            padding: "7px",
            borderRadius: "10px",
          }}
        >
          <Input />
        </div>
      </Modal>
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Ctx.Provider value={{ setShow }}>
          <Calendar
            // fullscreen={false}
            dateCellRender={dateCellRender}
            style={{
              overflowY: "scroll",
              height: "500px",
              width: "auto",
            }}
          />
        </Ctx.Provider>
      </div>
    </>
  );
};

export default ResgisTRY;
