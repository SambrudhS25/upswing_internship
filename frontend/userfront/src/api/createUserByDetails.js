import axios from "axios";

const createUserByDetails = async (values) => {
  try {
    const response = await axios.post(
      "http://localhost:8081/user/createUser",
      values
    );
    return response;
  } catch (e) {
    console.log(e);
    return null;
  }
};
export default createUserByDetails;
