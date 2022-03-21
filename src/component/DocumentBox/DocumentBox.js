import React, { useState } from 'react'
import { Input, DatePicker, Space } from 'antd';
import axios from 'axios';
import { SearchOutlined } from '@ant-design/icons';
import moment from 'moment';

const DocumentBox = ({ childToParent }) => {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState([]);

  let propsData = []

  const callData = (query) => {
    let queryString = {
      findKey: query,
    }
    axios.post(`${process.env.REACT_APP_API_ENDPOINT_DOCUMENT_DATA}`, queryString)
      .then(res => {
        console.log("collected data from server:", res.data.MockData);
        propsData = res.data.MockData
        setData(propsData)
        childToParent(data)
        return res
      })
      .catch(err => {
        console.error(err)
        return err
      });
  }

  const onTextChange = (event) => {
    console.log("onTextChange", event.target.value);
    callData(event.target.value)
  }

  const onPressEnter = (event) => {
    console.log("onPressEnter", event.target.value);
    callData(event.target.value)
  }

  const handleDate = (event) => {
    console.log("event : " + event.value);
  }
  
  const monthFormat = 'MM/YYYY';

  return (
    <>
      <Input
        placeholder="เลขเที่กล่องสินไหม/ประเภทเอกสาร/สถานะกล่อง"
        bordered={true}
        allowClear={true}
        prefix={<SearchOutlined />}
        type="search"
        onChange={e => onTextChange(e)}
        onPressEnter={e => onPressEnter(e)}
        // width={600}
        style={{
          fontFamily: 'DBOzoneX',
          fontSize: '18px',
          width: "600px",
          borderRadius: "10px",
        }}
      />
      <div>
      <br/>
      ช่วงที่ต้องการค้นหา : &nbsp;
      <Space direction="horizon" size={12}>
        <DatePicker onChange={e => handleDate(e)} format={monthFormat} picker="month" placeholder='MM/YYYY'/>
        -
        <DatePicker class="end-date" format={monthFormat} picker="month" placeholder='MM/YYYY'/>
      </Space>
      </div>
    </>
  )
}

export default DocumentBox