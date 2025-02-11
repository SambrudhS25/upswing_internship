import axios from "axios";
import { User } from "../hooks/useCreateUser";

const UpdateUser = async (value: User) => {
  return axios.post("http://localhost:8081/user/updateUser", value);
};

export default UpdateUser;
