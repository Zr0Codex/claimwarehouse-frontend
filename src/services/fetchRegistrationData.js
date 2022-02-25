import axios from "axios";
const FetchRegistrationData = () => {
  let getData = axios
    .get(`${process.env.REACT_APP_API_ENDPOINT_REGISTRATION_DATA}`)
    .then((response) => response.data);

  return getData;
};

export default FetchRegistrationData;
