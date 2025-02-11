import axios from "axios";
import { User } from "../hooks/useCreateUser";
import API_BASE_URL from "../config/config";

const createUserByDetails = async (values: User) => {
  return axios.post(`${API_BASE_URL}/user/createUser`, values);
};
export default createUserByDetails;
