import React, { useState, useEffect,useRef, forwardRef } from "react";
import axios from 'axios';
import ReactToPrint from 'react-to-print';

import { Table, Button } from "antd";
import { PrinterTwoTone, MailTwoTone } from "@ant-design/icons";


let propsData = []

// const WorkData = React.forwardRef((pageKey, ref) => {
const WorkData = ({pageKey}) => {

  // onLoad('1');
  const [data, setData] = useState([]);
  var findKeyFlag = '1';
  if(pageKey === 'pageOne'){
    var dataEndpoint = process.env.REACT_APP_API_ENDPOINT_DOCUMENT_DATA1
    findKeyFlag = '1';
  }else if(pageKey === 'pageTwo'){
    var dataEndpoint = process.env.REACT_APP_API_ENDPOINT_DOCUMENT_DATA2;
    findKeyFlag = '2';
  }else{
    var dataEndpoint = process.env.REACT_APP_API_ENDPOINT_DOCUMENT_DATA3;
    findKeyFlag = '3';
  }
  useEffect(() => {
      let queryString = {
        findKey: findKeyFlag,
      }
      axios.post(`${dataEndpoint}`, queryString)
        .then(res => {
          // console.log("collected data from server:", res.data.MockData);
          propsData = res.data.MockData
          setData(propsData)
          return res
        })
        .catch(err => {
          console.error(err)
          return err
        });
  },[])
  
  const ColumnTemplate = [
    {
      title: "เลขที่เรื่องสินไหม",
      dataIndex: "documentNumber",
    },
    {
      title: "ชื่อ-นามสกุล ผู้เอาประกัน",
      dataIndex: "owner",
    },
    {
      title: "ชื่อ-นามสกุล ผู้ขอเบิก",
      dataIndex: "owner",
    },
    {
      title: "หน่วยงาน ผู้ขอเบิก",
      dataIndex: "documentType",
    },
    {
      title: "เหตุผลที่เบิก",
      dataIndex: "documentStatus",
    },
  ];

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


  console.log(data);

  const callback = (key) => {
    console.log(key)
  }

  return (
    <>
      <div style={{ backgroundColor: "#E5E5E5" }}>
        <div class="parent-right">
          <Button
            size="small"
            style={{
              borderRadius: "5px",
              height: "44px",
              width : "44px",
              justifyContent: "center",
              boxSizing: "border-box",
            }}
            onClick={() => callback('1')}
          >
            <MailTwoTone
              style={{
                fontSize: "22px",
                justifyContent: "center",
                alignItems: "center",
                verticalAlign: "middle",
                display: "inline-block",
                color: "#1890FF",
              }}
            />
          </Button>
          <Button
            size="small"
            style={{
              borderRadius: "5px",
              height: "44px",
              width: "44px",
              justifyContent: "center",
              boxSizing: "border-box",
            }}
            onClick={() => callback('2')}
          >
            <PrinterTwoTone
              style={{
                fontSize : "22px",
                justifyContent: "center",
                alignItems: "center",
                verticalAlign: "middle",
                display: "inline-block",
                color: "#1890FF",
              }}
            />
          </Button>
        </div>
        <Table
          style={{
            textAlign: "center",
            borderRadius: "5px",
            marginTop : "25px"
          }}
          rowSelection={{
            ...rowSelection,
          }}
          columns={ColumnTemplate}
          dataSource={data}
        />
      </div>
    </>
  );
}

export default WorkData;