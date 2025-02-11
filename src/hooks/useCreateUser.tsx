import { useState } from "react";
import { Form, message } from "antd";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import createUserByDetails from "../api/CreateUserByDetails";
import UpdateUser from "../api/UpdateUser";

export interface User {
  id: number;
  name: string;
  address: string;
  phoneNo: number;
}

export interface UserFormValues {
  id: number;
  name: string;
  address: string;
  phoneNo: number;
}

const useCreateUser = () => {
  const [form] = Form.useForm();
  const [userData, setUserData] = useState<User | null>(null);
  const queryClient = useQueryClient();

  const userCreate = useMutation({
    mutationFn: async (values: UserFormValues) => createUserByDetails(values),
    onSuccess: (res) => {
      setUserData(res?.data);
      queryClient.invalidateQueries({ queryKey: ["users"] });
      message.success("User created successfully!");
      form.resetFields();
    },
    onError: () => {
      message.error("Unable to create user");
    },
  });

  const updateUserMutation = useMutation({
    mutationFn: async (values: UserFormValues) => await UpdateUser(values),
    onSuccess: (res) => {
      setUserData(res.data);
      queryClient.invalidateQueries({ queryKey: ["users"] });
      message.success("User updated successfully!");
    },
    onError: () => {
      message.error("Unable to update user");
    },
  });

  const handleSubmit = (values: UserFormValues) => {
    userCreate.mutate(values);
  };

  const handleUpdate = (values: UserFormValues) => {
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
