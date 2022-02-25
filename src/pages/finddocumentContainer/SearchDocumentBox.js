import React from "react";
// import { CustomMenu } from "./test.style";
import SearchMain from "../../component/SearchingMain/Searchmain";
import { SearchOutlined } from "@ant-design/icons";

const SearchDocumentBox = () => {
  // const [data, setData] = useState([]);
  // const sendingProps = (key) => {
  //   setData(key);
  // };
  // console.log("data", data);
  return (
    <>
      <SearchMain
        prefix={<SearchOutlined />}
        placeholder="เลขที่กล่องสินไหม/ประเภทเอกสาร/สถานะกล่อง"
        style={{
          fontFamily: "DBOzoneX",
          width: "600px",
          borderRadius: "10px",
        }}
        //callbackData={sendingProps}
      />
    </>
  );
};
export default SearchDocumentBox;
