import React, { useState } from "react";
// import CustomInput from "../../component/SearchBox/SearchBox";
import { 
  SearchOutlined,
  PlusSquareOutlined,
  CloseCircleOutlined,
  SaveFilled,
  PrinterOutlined,
 } from "@ant-design/icons";
import { Button } from "antd";

import { Table } from "antd";
import SearchMain from "../../component/SearchingMain/Searchmain";

const ColumnTemplate = [
  
  {
    title: "เลขที่กล่องสินไหม",
    dataIndex: "boxNumber",
    render: (text) => (
      <p
        style={{
          fontFamily: "DBOzoneX",
          fontSize: "16px",
        }}
      >
        {text}
      </p>
    ),
  },
  {
    title: "ลำดับที่",
    dataIndex: "boxStorageNumber",
    render: (text) => (
      <p
        style={{
          fontFamily: "DBOzoneX",
          fontSize: "16px",
          textAlign: "center",
        }}
      >
        {text}
      </p>
    ),
  },
  {
    title: "ผู้ขอเบิก",
    dataIndex: "boxNumber",
    render: (text) => (
      <p
        style={{
          fontFamily: "DBOzoneX",
          fontSize: "16px",
          textAlign: "center",
        }}
      >
        {text}
      </p>
    ),
  },
  {
    title: "เหตุผลที่เบิก",
    dataIndex: "boxNumber",
    render: (text) => (
      <p
        style={{
          fontFamily: "DBOzoneX",
          fontSize: "16px",
          textAlign: "center",
        }}
      >
        {text}
      </p>
    ),
  },
  {
    title: "วันที่บันทึก",
    dataIndex: "boxNumber",
    render: (text) => (
      <p
        style={{
          fontFamily: "DBOzoneX",
          fontSize: "16px",
          textAlign: "center",
        }}
      >
        {text}
      </p>
    ),
  },
  {
    title: "วันที่รับเรื่อง",
    dataIndex: "boxNumber",
    render: (text) => (
      <p
        style={{
          fontFamily: "DBOzoneX",
          fontSize: "16px",
          textAlign: "center",
        }}
      >
        {text}
      </p>
    ),
  },
  {
    title: "วันที่เบิก",
    dataIndex: "boxNumber",
    render: (text) => (
      <p
        style={{
          fontFamily: "DBOzoneX",
          fontSize: "16px",
          textAlign: "center",
        }}
      >
        {text}
      </p>
    ),
  },
  {
    title: "วันที่คืน",
    dataIndex: "boxNumber",
    render: (text) => (
      <p
        style={{
          fontFamily: "DBOzoneX",
          fontSize: "16px",
          textAlign: "center",
        }}
      >
        {text}
      </p>
    ),
  },
  {
    title: "หมายเหตุ",
    dataIndex: "boxNumber",
    render: (text) => (
      <p
        style={{
          fontFamily: "DBOzoneX",
          fontSize: "16px",
          textAlign: "center",
        }}
      >
        {text}
      </p>
    ),
  },
];

const RequisitionDocument = () => {
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

  return (
    <>
      <SearchMain
        prefix={<SearchOutlined />}
        placeholder="เลขที่เรื่องสินไหม/เลขที่กล่องสินไหม"
        style={{
          ontFamily: "DBOzoneX",
          width: "600px",
          borderRadius: "10px",
        }}
        callbackData={sendingProps}
      />

      <div
        style={{
          width: "100%",
          borderRadius: "5px",
          paddingTop: "52px",
        }}
      >
        <div class="parent-right">
        <div
            class="child-right"
            style={{ paddingLeft: "65px", fontFamily: "DBOzoneX", fontSize: "18px" }}
          >
            <Button
              size="small"
              style={{
                borderRadius: "5px",
                height: "22px",
                justifyContent: "center",
                boxSizing: "border-box",
                width: "93px",
                backgroundColor: "#007BC1",
                color: "#FFFFFF",
              }}
            >
              พบเอกสาร
            </Button>
          </div>
          <div
            class="child"
            style={{ paddingLeft: "10px", fontFamily: "DBOzoneX", fontSize: "18px" }}
          >
            <Button
              size="small"
              style={{
                borderRadius: "5px",
                height: "22px",
                justifyContent: "center",
                boxSizing: "border-box",
                width: "93px",
                backgroundColor: "#FFE6EB",
                border: '1px solid #EF4242',
                color: '#FF0000',
              }}
            >
              ไม่พบเอกสาร
            </Button>
          </div>
          <div
            class="child"
            style={{ paddingLeft: "10px", fontFamily: "DBOzoneX", fontSize: "18px" }}
          >
            <Button
              size="small"
              style={{
                borderRadius: "5px",
                height: "22px",
                justifyContent: "center",
                boxSizing: "border-box",
                width: "93px",
                backgroundColor: "#BEECFF",
                border: '1px solid #1890FF',
                color: '#1890FF',
              }}
            >
              <PrinterOutlined
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  verticalAlign: "middle",
                  display: "inline-block",
                  color: "#1890FF",
                }}
              />
              พิมพ์เอกสาร
            </Button>
          </div>
        </div>
        <div style={{ marginTop: "15px" }}>
          {/* {data.map((data) => {
            return ( */}
          <Table
            style={{
              textAlign: "center",
              borderRadius: "5px",
              fontFamily: "DBOzoneBold",
              fontSize: "22px",
              justifyContent: "center",
              alignItems: "center",
            }}
            rowSelection={{
              ...rowSelection,
            }}
            columns={ColumnTemplate}
            dataSource={data}
          />
          {/* ); })} */}
        </div>
      </div>
    </>
  );
};

export default RequisitionDocument;
