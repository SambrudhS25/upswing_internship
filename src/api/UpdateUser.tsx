import axios from "axios";
import { User } from "../hooks/useCreateUser";
import API_BASE_URL from "../config/config";

const UpdateUser = async (value: User) => {
  return axios.post(`${API_BASE_URL}/user/updateUser`, value);
};

export default UpdateUser;
