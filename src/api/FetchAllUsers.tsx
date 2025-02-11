import axios from "axios";
import API_BASE_URL from "../config/config";

const fetchAllUsers = async () => {
  return axios.get(`${API_BASE_URL}/user/getAllUsers`);
};

export default fetchAllUsers;
