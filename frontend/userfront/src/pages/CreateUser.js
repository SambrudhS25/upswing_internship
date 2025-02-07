import { useLocation } from "react-router-dom";
import CreateUserForm from "../components/CreateUserForm";

const CreateUser = () => {
  const location = useLocation();
  const user = location.state?.user;
  console.log(user);
  return <CreateUserForm user={user} />;
};

export default CreateUser;
