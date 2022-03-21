import React, { useState } from "react";

import CustomInput from "../../component/SearchBox/SearchBox";
import DocumentBox from "../../component/DocumentBox/DocumentBox";

import {
  PlusSquareOutlined,
  CloseCircleOutlined,
  SaveFilled,
} from "@ant-design/icons";

import { Table, Button, DatePicker, Space, Modal } from "antd";


const FindBox = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal =() => {
    setIsModalVisible(true);
  };
  const ColumnTemplate = [
    {
      title: "ลำดับที่",
      dataIndex: "boxStorageNumber",
    },
    {
      title: "เลขที่กล่องสินไหม",
      dataIndex: "boxNumber",
    },
    {
      title: "ประเภทเอกสาร",
      dataIndex: "documentType",
    },
    {
      title: "ผู้จัดเก็บ",
      dataIndex: "owner",
    },
    {
      title: "วันที่จัดเก็บ",
      dataIndex: "documentDate",
    },
    {
      title: "สถานะ",
      dataIndex: "documentStatus",
    },
    {
      title: "action",
      dataIndex: "action",
      render : (text, record) => (
        <Space>
        <Button type="primary" onClick={()=> console.log(record)}>
          {"จัดเก็บเอกสาร"}
        </Button>
  
        <Button tpye="dashed" onClick={showModal}>
          {"ประวัติกล่องเอกสาร"}
        </Button>
       </Space>
      ),
    },
  ];

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
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
  
  const childToParent = (childdata) => {
    setData(childdata);
  };


  return (
    <>
      <div style={{ backgroundColor: "#E5E5E5" }}>
        <div
          style={{
            backgroundColor: "#FAFAFA",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              paddingTop: "20px ",
              paddingLeft: "20px",
            }}
          >
            <DocumentBox childToParent={childToParent} />
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
          paddingTop: "15px"
        }}
      >
        <div class="parent-right">
          {/* <div
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
              เบิกเอกสาร
            </Button>
          </div> */}
        </div>
        <div style={{ marginTop: "15px" }}>
          <Table
            style={{
              textAlign: "center",
              borderRadius: "5px",
            }}
            rowSelection={{
              ...rowSelection,
            }}
            columns={ColumnTemplate}
            dataSource={data}
          />
        </div>
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      </div>
    </>
  );
};

export default FindBox;
