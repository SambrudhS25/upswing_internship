import { useState } from "react";
import { Button, Form, Input, message } from "antd";
import createUserByDetails from "../api/createUserByDetails";
import updateUser from "../api/updateUser";

const useCreateUser = () => {
  const [form] = Form.useForm();
  const [userData, setUserData] = useState(null);

  const handleSubmit = async (values) => {
    try {
      const res = await createUserByDetails(values);
      setUserData(res.data);
      message.success("User created successfully!");
      form.resetFields();
    } catch (e) {
      message.error(
        "An error occurred while creating the user: " + (e.response?.data || "")
      );
    }
  };

  const handleUpdate = async (values) => {
    try {
      const res = await updateUser(values);
      setUserData(res.data);
      message.success("User updated successfully!");
      form.resetFields();
    } catch (e) {
      message.error(
        "An error occurred while updating the user: " + (e.response?.data || "")
      );
    }
  };
  return {
    form,
    userData,
    handleSubmit,
    handleUpdate,
  };
};

export default useCreateUser;
