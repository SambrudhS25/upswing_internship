import axios from "axios";
import API_BASE_URL from "../config/config";

const fetchUserById = (id: number) => {
  return axios.get(`${API_BASE_URL}/user/searchUser?id=${id}`);
};
export default fetchUserById;
