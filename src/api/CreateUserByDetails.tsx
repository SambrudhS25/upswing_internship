import axios from "axios";
import { User } from "../hooks/useCreateUser";

const createUserByDetails = async (values: User) => {
  return axios.post("http://localhost:8081/user/createUser", values);
};
export default createUserByDetails;
