// import React from "react";
import axios from "axios";
const SearchDocument = (query) => {
  let queryString = {
    findKey: query,
  };
  // console.log("get query:", queryString);
  let propsData = axios
    .post(`${process.env.REACT_APP_API_ENDPOINT_DOCUMENT_DATA}`, queryString)
    .then((res) => res.data.MockData);

  return propsData;
};

export default SearchDocument;
