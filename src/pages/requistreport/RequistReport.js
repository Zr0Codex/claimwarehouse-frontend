import React, { useState, useRef } from "react";
import ReactToPrint from "react-to-print";

import WorkData from "../../component/RequistReport/workData";

import {Tabs, Button } from "antd";


const { TabPane } = Tabs;

const RequistReport = () => {

  const componentRef = useRef();
  const callback = (key) => {
    console.log(key)
  }

  return (
    <>
      <div>

        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="เบิกเอกสารที่จัดเก็บอยู่ในส่วน" key="1">
          {/* <ReactToPrint
              trigger={() => <button>Print this out!</button>}
              content={() => componentRef.current}
          />
          <div>
            <WorkData ref={el => (componentRef = el)} />
          </div> */}
            <WorkData pageKey={'pageOne'} />
          </TabPane>
          <TabPane tab="เบิกเอกสารที่จัดเก็บในส่วนธุรการ" key="2">
            <WorkData pageKey={'pageTwo'} />
            {/* <ClericalData/> */}
          </TabPane>
          <TabPane tab="เบิกเอกสารที่ยังไม่ถูกจัดเก็บ" key="3">
            <WorkData pageKey={'pageThree'} />
            {/* <UnsaveData/> */}
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default RequistReport;
