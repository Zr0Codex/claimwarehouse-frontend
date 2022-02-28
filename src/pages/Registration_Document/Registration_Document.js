import React, { useState, useContext } from "react";
import "./style.scss";
// import { Calendar, Badge } from "antd";
import FetchRegistrationData from "../../services/fetchRegistrationData";

import { Calendar, Modal, Badge } from "antd";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const EventCell = ({ d, event, eventIdx }) => {
  const [, drager] = useDrag({
    item: { type: "event", event: event, eventIdx: eventIdx, d: d },
  });

  const { setShow } = useContext(Ctx);

  return (
    <li ref={drager} className="cell" onClick={() => setShow(true)}>
      <Badge status={event.type} text={event.title} />
      {/* {event.title} */}
    </li>
  );
};

const CalendarCell = ({ date, events }) => {
  // const { setShow, moveEvent } = useContext(Ctx);

  // const [, droper] = useDrop({
  //   // accept 是一个标识，需要和对应的 drag 元素中 item 的 type 值一致，否则不能感应
  //   accept: "event",
  //   drop: (item, monitor) => {
  //     //console.log(item, monitor);
  //     setShow(true);
  //     moveEvent(item.d, item.eventIdx, date.format("D"));
  //   },
  // });

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");

  return (
    <div
      // ref={droper}
      style={{
        cursor: "default",
        margin: "0 4px",
        padding: "4px 0px 10px",
        border: 0,
        textAlign: "left",
        backgroundColor: date.format("D") === dd ? "#e6f7ff" : "white",
        borderTop:
          date.format("D") === dd ? "2px solid #1890ff" : "2px solid #f0f0f0",
      }}
    >
      <div style={{ fontSize: 16, fontWeight: "bold", paddingLeft: 4 }}>
        {date.format("D")}
      </div>
      <div
        style={{
          minHeight: "90px",
        }}
      >
        <div>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "4px 0",
            }}
          >
            {events.map((item, idx) => (
              <EventCell
                key={item.id}
                d={date.format("D")}
                event={item}
                eventIdx={idx}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Ctx = React.createContext(null);

const data0 = {
  february: {
    1: [
      { id: 1, type: "successs", title: "success" },
      { id: 2, type: "successs", title: "fail" },
    ],
  },
  10: [
    { id: 1, type: "successs", title: "system1" },
    { id: 2, type: "successs", title: "system2" },
  ],
};

const Resgistration = () => {
  const [show, setShow] = useState(false);

  const [data, setData] = useState(data0);
  // const moveEvent = (oldD, oldIdx, newD) => {
  //   console.log(oldD, oldIdx, newD);
  //   setData((data) => {
  //     let newData = { ...data };
  //     if (!newData.hasOwnProperty(newD)) {
  //       newData[newD] = [];
  //     }
  //     newData[newD].push(data[oldD][oldIdx]);
  //     console.log(newData);
  //     newData[oldD].splice(oldIdx, 1);
  //     return newData;
  //   });
  // };

  const cellRenderFunc = (date) => {
    const d = date.format("D");
    const evs = data.hasOwnProperty(d) ? data[d] : [];
    return <CalendarCell date={date} events={evs} />;
  };

  return (
    <div className="App">
      <Modal centered visible={show} onOk={() => setShow(false)}>
        fixed
      </Modal>

      <DndProvider backend={HTML5Backend}>
        <Ctx.Provider value={{ setShow }}>
          <Calendar onSelect={null} dateFullCellRender={cellRenderFunc} />
        </Ctx.Provider>
      </DndProvider>
    </div>
  );
};

export default Resgistration;
