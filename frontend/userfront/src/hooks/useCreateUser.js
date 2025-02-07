import { useState } from "react";
import { Form, message } from "antd";
import createUserByDetails from "../api/createUserByDetails";
import updateUser from "../api/updateUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const useCreateUser = () => {
  const [form] = Form.useForm();
  const [userData, setUserData] = useState(null);
  const queryClient = useQueryClient();

  const userCreate = useMutation({
    mutationFn: createUserByDetails,
    onSuccess: (res) => {
      queryClient.invalidateQueries(["users"]);
      message.success("User created successfully!");
      setUserData(res.data);
    },
    onError: () => {
      message.error("unable to create user");
      setUserData(null);
    },
  });

  const handleSubmit = async (values) => {
    try {
      userCreate.mutate(values);
      form.resetFields();
    } catch (e) {
      message.error(
        "An error occurred while creating the user: " + (e.response?.data || "")
      );
    }
  };

  const updateUserMutation = useMutation({
    mutationFn: updateUser,
    onSuccess: (res) => {
      setUserData(res.data);
      queryClient.invalidateQueries(["users"]);
    },
    onError: () => {
      message.error("unable to create user");
      setUserData(null);
    },
  });

  const handleUpdate = async (values) => {
    try {
      updateUserMutation.mutate(values);
      message.success("User updated successfully!");
      console.log(message);
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
    message,
    handleSubmit,
    handleUpdate,
  };
};

export default useCreateUser;
