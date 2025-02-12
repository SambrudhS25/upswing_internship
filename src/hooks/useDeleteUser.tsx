import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { User } from "./useCreateUser";
import deleteUserById from "../api/DeleteUserById";
import fetchUserById from "../api/FetchUserById";
import { message } from "antd";

const useDeleteUser = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteUser, setDeleteUser] = useState<User | null>(null);
  const queryClient = useQueryClient();

  const deleteUserMutation = useMutation({
    mutationFn: async (id: number) => deleteUserById(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      message.success("User deleted successfully!");
    },
    onError: (error) => {
      message.error("Error deleting user");
    },
  });

  const handleDelete = async (id: number) => {
    try {
      const res = await fetchUserById(id);
      setDeleteUser(res?.data);
      setIsDeleteModalOpen(true);
    } catch (e) {
      console.log(e);
      message.error("Error deleting user");
    }
  };

  const handleDeleteOk = () => {
    if (deleteUser) {
      deleteUserMutation.mutate(deleteUser.id);
    }
    setIsDeleteModalOpen(false);
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
  };

  return {
    handleDelete,
    handleDeleteOk,
    handleDeleteCancel,
    isDeleteModalOpen,
    deleteUser,
  };
};

export default useDeleteUser;
