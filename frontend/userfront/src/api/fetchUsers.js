import axios from "axios";

const fetchUsers = async () => {
  return axios.get(`http://localhost:8081/user/getAllUsers`);
};

export default fetchUsers;
