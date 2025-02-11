import axios from "axios";
import API_BASE_URL from "../config/config";

const deleteUserById = async (id: number) => {
  return axios.delete(`${API_BASE_URL}/user/deleteUser?id=${id}`);
};

export default deleteUserById;
