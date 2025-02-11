import axios from "axios";

const deleteUserById = async (id: number) => {
  return axios.delete(`http://localhost:8081/user/deleteUser?id=${id}`);
};

export default deleteUserById;
