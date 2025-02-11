import axios from "axios";

const fetchUserById = (id: number) => {
  return axios.get(`http://localhost:8081/user/searchUser?id=${id}`);
};
export default fetchUserById;
