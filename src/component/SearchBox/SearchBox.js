import React, { useState } from "react";
import { Input } from "antd";
import "./SearchBox.scss";
import { SearchOutlined } from "@ant-design/icons";
import SearchDocument from "../../services/SearchDocument";

const CustomInput = (props) => {
  const [data, setData] = useState([]);

  let propsDataPressEnter = [];

  const onPressEnter = (event) => {
    propsDataPressEnter = SearchDocument(event.target.value);
    propsDataPressEnter.then((res) => {
      setData(res);
    });
  };
  props.callbackData(data);
  return (
    <>
      <Input
        placeholder={props.placeholder}
        bordered={true}
        allowClear={true}
        prefix={props.prefix ? props.prefix : <SearchOutlined />}
        type="search"
        onPressEnter={(e) => onPressEnter(e)}
        style={
          props.style
            ? props.style
            : {
                fontFamily: "DBOzoneX",
                fontSize: "18px",
                width: "600px",
                borderRadius: "10px",
              }
        }
      />
    </>
  );
};

export default CustomInput;
