import { useMutation, useQueryClient } from "@tanstack/react-query";
import deleteUserById from "../api/deleteUserById";
import { useState } from "react";
import fetchUserById from "../api/fetchUserById";

const useDeleteUser = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteUser, setDeleteUser] = useState(null);
  const queryClient = useQueryClient();

  const deleteUserMutation = useMutation({
    mutationFn: deleteUserById,
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]); // ✅ Fix 2: Corrected query invalidation
      alert("User deleted successfully");
    },
    onError: (error) => {
      console.error("Error deleting user:", error);
      alert("Failed to delete user");
    },
  });

  const handleDelete = async (id) => {
    try {
      const res = await fetchUserById(id);
      setDeleteUser(res.data);
      setIsDeleteModalOpen(true);
    } catch (e) {
      console.log(e);
    }
    // ✅ Fix 1: Open modal
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
