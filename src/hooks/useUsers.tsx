import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "./useCreateUser";
import fetchAllUsers from "../api/FetchAllUsers";
import fetchUserById from "../api/FetchUserById";

const useUsers = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const {
    data: users = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetchAllUsers();
      return response?.data || [];
    },
  });

  const handleDisplay = async (id: number) => {
    try {
      const response = await fetchUserById(id);
      setSelectedUser(response.data);
      setIsModalOpen(true);
    } catch (e) {
      console.error("Error fetching user details", e);
    }
  };

  const handleOk = () => {
    setIsModalOpen(false);
    navigate(`/create-user`, { state: { user: selectedUser } });
    console.log(selectedUser);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return {
    users,
    error,
    selectedUser,
    isModalOpen,
    isLoading,
    handleDisplay,
    handleOk,
    handleCancel,
    navigate,
  };
};

export default useUsers;
