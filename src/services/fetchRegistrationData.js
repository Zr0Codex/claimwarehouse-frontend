import axios from "axios";

const FetchRegistrationData = async () => {
  const data = await fetch(
    `${process.env.REACT_APP_API_ENDPOINT_REGISTRATION_DATA}`
  );
  return await data.json();
};

export default FetchRegistrationData;
