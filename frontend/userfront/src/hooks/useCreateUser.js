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
    mutationFn: (values) => createUserByDetails(values), // Ensure it returns a Promise
    onSuccess: (res) => {
      setUserData(res.data);
      queryClient.invalidateQueries(["users"]);
      message.success("User created successfully!");
      form.resetFields();
    },
    onError: () => {
      message.error("Unable to create user");
    },
  });

  const updateUserMutation = useMutation({
    mutationFn: (values) => updateUser(values), // Ensure it returns a Promise
    onSuccess: (res) => {
      setUserData(res.data);
      queryClient.invalidateQueries(["users"]);
      message.success("User updated successfully!");
      form.resetFields();
    },
    onError: () => {
      message.error("Unable to update user");
    },
  });

  const handleSubmit = (values) => {
    userCreate.mutate(values);
  };

  const handleUpdate = (values) => {
    updateUserMutation.mutate(values);
  };

  return {
    form,
    userData,
    handleSubmit,
    handleUpdate,
  };
};

export default useCreateUser;
