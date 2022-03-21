import React, { useState } from "react";
// import CustomInput from "../../component/SearchBox/SearchBox";
import {
  SearchOutlined,
  PlusSquareOutlined,
  CloseCircleOutlined,
  SaveFilled,
  PrinterOutlined,
} from "@ant-design/icons";
import { Button, DatePicker, Space, Input } from "antd";

import { Table } from "antd";
import SearchMain from "../../component/SearchingMain/Searchmain";

const RequisitionconclusionReport = () => {
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      name: record.name,
    }),
  };

  const [data, setData] = useState([]);

  const sendingProps = (key) => {
    setData(key);
  };

  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  return (
    <>

      <div style={{ backgroundColor: "#E5E5E5" }}>
        <div
          style={{
            backgroundColor: "#FAFAFA",
            borderRadius: "8px",
            fontFamily: "DBOzoneX",
            fontSize: "18px",
          }}
        >
          <div
            style={{
              paddingTop: "20px ",
              paddingLeft: "20px",
            }}
          >
            วันที่รับเรื่อง : &nbsp;
            <Space direction="horizon">
            <DatePicker onChange={onChange} />:<DatePicker onChange={onChange} />
            </Space>
          </div>
          <div
            style={{
              paddingTop: "20px ",
              paddingLeft: "20px",
            }}
          >
            รหัสหน่วยงาน : &nbsp;
            <Space direction="horizon" >
            <Input
              placeholder={'0000'}
              type="search"
              style={{
                fontFamily: "DBOzoneX",
                fontSize: "18px",
                width: "150px",
                // borderRadius: "5px",
                height: "32px",
              }
              }
            />
            :
            <Input
              placeholder={'0000'}
              type="search"
              style={{
                fontFamily: "DBOzoneX",
                fontSize: "18px",
                width: "150px",
                // borderRadius: "5px",
                height: "32px",
              }
              }
            />
            </Space>
          </div>

          <div
            style={{
              paddingTop: "10px ",
              paddingLeft: "20px",
              paddingBottom: "30px",
            }}
          >
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
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          borderRadius: "5px",
          paddingTop: "52px",
        }}
      >

      </div>
    </>
  );
};

export default RequisitionconclusionReport;
