import React, { useState } from "react";
// import CustomInput from "../../component/SearchBox/SearchBox";
import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";

import { Table } from "antd";
import SearchMain from "../../component/SearchingMain/Searchmain";

const ColumnTemplate = [
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
    title: "วันที่เบิก",
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
    title: "เลขที่เรื่องสินไหม",
    dataIndex: "documentNumber",
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
    title: "ผู้ขอเบิก",
    dataIndex: "documentType",
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
    title: "ส่วนงาน",
    dataIndex: "owner",
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
    title: "เหตุผลที่เบิก",
    dataIndex: "documentDate",
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
    title: "วันที่ค้างเบิก",
    dataIndex: "documentStatus",
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
    title: "",
    dataIndex: "action",
    render: (text) => (
      <Button
        size="small"
        style={{
          borderRadius: "5px",
          height: "22px",
          justifyContent: "center",
          boxSizing: "border-box",
          width: "93px",
          backgroundColor: "#FFE6EB",
          border: "1px solid #ADC6FF",
          color: "#2F54EB",
          fontFamily: "DBOzoneX",
          fontSize: "15px",
        }}
      >
        {text}
      </Button>
    ),
  },
];

const SearchDocument = () => {
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
    // selectedRowKeys: (record) => {
    //   console.log("record: ", record);
    //   // console.log("selectedRowKeys: ", selectedRowKeys);
    // },
    // isChecked: (record) => ({
    //   checked: record.documentStatus === "จัดเก็บ",
    // }),
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
            style={{
              paddingLeft: "65px",
              fontFamily: "DBOzoneX",
              fontSize: "18px",
            }}
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
            style={{
              paddingLeft: "10px",
              fontFamily: "DBOzoneX",
              fontSize: "18px",
            }}
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
                border: "1px solid #EF4242",
                color: "#FF0000",
              }}
            >
              ไม่พบเอกสาร
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

export default SearchDocument;
