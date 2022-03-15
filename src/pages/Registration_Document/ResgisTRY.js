import React, { useState, useContext, useEffect } from "react";
import {
  Calendar,
  Badge,
  Modal,
  Checkbox,
  Input,
  Menu,
  Dropdown,
  Button,
} from "antd";
import { FieldTimeOutlined, MoreOutlined } from "@ant-design/icons";
import moment from "moment";
import axios from "axios";

const Ctx = React.createContext(null);

const ResgisTRY = () => {
  const [show, setShow] = useState(false);
  const [contents, setContent] = useState([]);
  // const [listControl, setListControl] = useState([]);

  const [selectedOption, setSelectedOption] = useState(null);

  // const useForceUpdate = () => useState()[1];

  let now = moment().format("dddd, DD MMM YYYY : hh:mm A");
  const fetchData = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_API_ENDPOINT_CALENDAR_DATA
      );
      const json = await response.json();
      setContent(json);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const EventCell = ({ event, status, id, date }) => {
    const { setShow } = useContext(Ctx);

    let updater = {
      id: id,
      date: date,
      data: event,
    };

    return (
      <li
        className="cell"
        id={event.id}
        onClick={() => {
          setShow(true);
          setSelectedOption(updater);
        }}
      >
        <Badge status={status} text={event.content} />
      </li>
    );
  };

  function handleRemoveItem() {
    try {
      console.log("selectedOption", selectedOption);

      var data = JSON.stringify({
        id: selectedOption.id,
        date: selectedOption.date,
        data: selectedOption.data,
      });

      var config = {
        method: "post",
        url: process.env.REACT_APP_API_ENDPOINT_REMOVE_CALENDAR_DATA,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  function getListData(value) {
    try {
      let listData;
      const dateValue = value.format("yyyy/MM/DD");

      for (var content in contents) {
        if (contents[content] !== "null") {
          switch (dateValue) {
            case contents[content].date:
              listData = contents[content];
              break;
            default:
          }
        }
        // if (contents.hasOwnProperty(content)) {

        // }
      }
      return listData || [];
    } catch (error) {}
  }

  function dateCellRender(value) {
    try {
      const listData = getListData(value);
      const parse = listData.data;
      // console.log("listData", listData.data);
      return (
        <ul className="events">
          {parse
            .filter((item) => item.content != null)
            .map((item) => (
              <li key={item.id}>
                <EventCell
                  event={item}
                  status={item.type}
                  id={listData.id}
                  date={listData.date}
                />
              </li>
            ))}
        </ul>
      );
    } catch (error) {}
  }

  // const forceUpdate = useForceUpdate();

  function fullFunction() {
    handleRemoveItem();
    fetchData();
    // forceUpdate();
    setShow(false);
    setSelectedOption(null);
    // useForceUpdate();
    window.location.reload(false);
  }

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <span onClick={fullFunction}>delete</span>
      </Menu.Item>
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
                  style={{
                    fontSize: "16px",
                    verticalAlign: "2px",
                    marginLeft: "10px",
                  }}
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
              overflowY: "auto",
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
