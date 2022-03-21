import React, { useState } from "react";

import {
  SectionMain,
  SectionBox,
  SectionInputBox,
  SectionButton,
} from "../../component/SearchingMain/searchmain.style";

// import SearchMain from "../../component/SearchingMain/Searchmain";


import {
  PlusSquareOutlined,
  CloseCircleOutlined,
  SaveFilled,
  SearchOutlined,
} from "@ant-design/icons";

import { DatePicker, Space, Button } from 'antd';

// const ColumnTemplate = [
//   {
//     title: "เลขที่กล่องคลังธุรการ",
//     dataIndex: "boxStorageNumber",
//     render: (text) => (
//       <p
//         style={{
//           fontFamily: "DBOzoneX",
//           fontSize: "16px",
//           textAlign: "center",
//         }}
//       >
//         {text}
//       </p>
//     ),
//   },
//   {
//     title: "เลขที่กล่องสินไหม",
//     dataIndex: "boxNumber",
//     render: (text) => (
//       <p
//         style={{
//           fontFamily: "DBOzoneX",
//           fontSize: "16px",
//         }}
//       >
//         {text}
//       </p>
//     ),
//   },
//   {
//     title: "เลขที่เรื่องสินไหม",
//     dataIndex: "documentNumber",
//     render: (text) => (
//       <p
//         style={{
//           fontFamily: "DBOzoneX",
//           fontSize: "16px",
//         }}
//       >
//         {text}
//       </p>
//     ),
//   },
//   {
//     title: "ประเภทเอกสาร",
//     dataIndex: "documentType",
//     render: (text) => (
//       <p
//         style={{
//           fontFamily: "DBOzoneX",
//           fontSize: "16px",
//         }}
//       >
//         {text}
//       </p>
//     ),
//   },
//   {
//     title: "ผู้จัดเก็บ",
//     dataIndex: "owner",
//     render: (text) => (
//       <p
//         style={{
//           fontFamily: "DBOzoneX",
//           fontSize: "16px",
//         }}
//       >
//         {text}
//       </p>
//     ),
//   },
//   {
//     title: "วันที่จัดเก็บ",
//     dataIndex: "documentDate",
//     render: (text) => (
//       <p
//         style={{
//           fontFamily: "DBOzoneX",
//           fontSize: "16px",
//         }}
//       >
//         {text}
//       </p>
//     ),
//   },
//   {
//     title: "สถานะ",
//     dataIndex: "documentStatus",
//     render: (text) => (
//       <p
//         style={{
//           fontFamily: "DBOzoneX",
//           fontSize: "16px",
//         }}
//       >
//         {text}
//       </p>
//     ),
//   },
//   {
//     title: "",
//     dataIndex: "action",
//     render: (text) => (
//       <Button
//         size="small"
//         style={{
//           borderRadius: "5px",
//           height: "22px",
//           justifyContent: "center",
//           boxSizing: "border-box",
//           width: "93px",
//           backgroundColor: "#FFE6EB",
//           border: "1px solid #ADC6FF",
//           color: "#2F54EB",
//           fontFamily: "DBOzoneX",
//           fontSize: "15px",
//         }}
//       >
//         {text}
//       </Button>
//     ),
//   },
// ];

const ClaimStatisticsReport = () => {
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

  const handleDate = (event) => {
    console.log("event : " + event.value);
  }

  const monthFormat = 'MM/YYYY';

  return (
    <>
      เดือนที่จัดเก็บ : &nbsp;
      <Space direction="horizon" size={12}>
        <DatePicker onChange={e => handleDate(e)} format={monthFormat} picker="month" placeholder='MM/YYYY'/>
        -
        <DatePicker class="end-date" format={monthFormat} picker="month" placeholder='MM/YYYY'/>
      </Space>
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

export default ClaimStatisticsReport;
