import React, { useState } from "react";
// import CustomInput from "../../component/SearchBox/SearchBox";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Menu, Button , Dropdown, message } from "antd";
import { DownOutlined } from "@ant-design/icons";

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
    title: "ประเภทสินไหม",
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
    title: "ขั้นตอนงาน",
    dataIndex: "workProcedure",
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
    title: "หมายเหตุ",
    dataIndex: "note",
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
function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('Click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1" icon={<UserOutlined></UserOutlined>}>
      01 มณ/บอกล้าง/ปฏิเสธ
    </Menu.Item>
    <Menu.Item key="1" icon={<UserOutlined></UserOutlined>}>
      02 ค่าทดแทน อบ./รพ./สภ.
    </Menu.Item>
    <Menu.Item key="1" icon={<UserOutlined></UserOutlined>}>
      03 ให้สิทธิ์/เบี้ยเลี้ยงชีพ/ทร
    </Menu.Item>
  </Menu>
);

const StoreDocument = () => {
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
      <div
        style={{
          width: "100%",
          borderRadius: "10px",
          paddingTop: "52px",
        }}
      >
          แฟ้มข้อมูลปี&nbsp;&nbsp;64 &nbsp;&nbsp;&nbsp; ประเภทเอกสาร : &nbsp;
          <Dropdown overlay={menu}>
            <Button>
              01 มณ/บอกล้าง/ปฏิเสธ 
              <DownOutlined>

              </DownOutlined>
            </Button>
          </Dropdown>
          &nbsp;&nbsp;
          เลขที่กล่องสินไหม : &nbsp; 0602/64 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ลำดับที่ : &nbsp; 001
      </div>
      

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
              จัดเก็บเอกสาร
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
                backgroundColor: "#BEECFF",
                border: "1px solid #1890FF",
                color: "#1890FF",
              }}
            >
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

export default StoreDocument;
