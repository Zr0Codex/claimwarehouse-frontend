import React, { useState } from "react";

import {
  SectionMain,
  SectionBox,
  SectionInputBox,
  SectionButton,
} from "./searchmain.style";

import "./searchmain.scss";

// import CustomInput from "../SearchBox/SearchBox";

import {
  PlusSquareOutlined,
  CloseCircleOutlined,
  SaveFilled,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Input } from "antd";
import SearchDocument from "../../services/SearchDocument";

const SearchMain = (props) => {
  const [data, setData] = useState([]);

  let propsDataPressEnter = [];
  const onChange = (event) => {
    propsDataPressEnter = SearchDocument(event.target.value);
    propsDataPressEnter.then((res) => {
      setData(res);
      // props.callbackData(data);
    });
  };
  const onPressEnter = (event) => {
    propsDataPressEnter = SearchDocument(event.target.value);
    propsDataPressEnter.then((res) => {
      setData(res);
      // props.callbackData(data);
    });
  };
  props.callbackData(data);
  return (
    <>
      <SectionMain>
        <SectionBox>
          <SectionInputBox>
            <Input
              placeholder={props.placeholder}
              bordered={true}
              allowClear={true}
              prefix={props.prefix ? props.prefix : <SearchOutlined />}
              type="search"
              onChange={(e) => {
                onChange(e);
              }}
              onPressEnter={(e) => onPressEnter(e)}
              style={
                props.style
                  ? props.style
                  : {
                      fontFamily: "DBOzoneX",
                      width: "600px",
                      borderRadius: "10px",
                    }
              }
            />
          </SectionInputBox>
          <SectionButton>
            <div class="parent">
              <div class="child">
                <PlusSquareOutlined
                  style={{
                    display: "inline-block",
                    verticalAlign: "middle",
                  }}
                  width="16"
                  height="16"
                />
              </div>
              <div
                class="child"
                style={{
                  paddingLeft: "20px",
                  fontSize: "18px",
                  fontFamily: "DBOzoneX",
                }}
              >
                Add Filter
              </div>
              <div
                class="child"
                style={{ paddingLeft: "65px", fontFamily: "DBOzoneX" }}
              >
                <Button
                  size="small"
                  style={{
                    borderRadius: "5px",
                    height: "22px",
                    justifyContent: "center",
                    boxSizing: "border-box",
                  }}
                >
                  <CloseCircleOutlined
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      verticalAlign: "middle",
                      display: "inline-block",
                      color: "#1890FF",
                    }}
                  />
                  Clear Filter
                </Button>
              </div>
              <div
                class="child"
                style={{ paddingLeft: "10px", fontFamily: "DBOzoneX" }}
              >
                <Button
                  size="small"
                  style={{
                    borderRadius: "5px",
                    height: "22px",
                    justifyContent: "center",
                    boxSizing: "border-box",
                  }}
                >
                  <SaveFilled
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      verticalAlign: "middle",
                      display: "inline-block",
                      color: "#1890FF",
                    }}
                  />
                  Save
                </Button>
              </div>
            </div>
          </SectionButton>
        </SectionBox>
      </SectionMain>
    </>
  );
};

export default SearchMain;
