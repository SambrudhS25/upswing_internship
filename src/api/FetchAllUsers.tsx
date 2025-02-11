import axios from "axios";

const fetchAllUsers = async () => {
  return axios.get(`http://localhost:8081/user/getAllUsers`);
};

export default fetchAllUsers;
