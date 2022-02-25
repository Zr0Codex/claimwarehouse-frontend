import { BellOutlined } from '@ant-design/icons';
import React from 'react';


const notyIconStyle = {
  position: "relative",
  display: "inline"
};
const notyNumStyle = {
  position: "absolute",
  right: "0",
  backgroundColor: "rgb(255,0,0)",
  fontSize: "8px",
  color: "white",
  display: "inline",
  padding: "3px 5px",
  borderRadius: "20px"
};
export default function Noty({ width, color, count }) {
  return (
    <div>
      <div style={notyIconStyle}>
        {count > 0 ? <div style={notyNumStyle}>{count}</div> : null}
        <BellOutlined style={{width: width, height: width}}/>
      </div>
    </div>
  );
}