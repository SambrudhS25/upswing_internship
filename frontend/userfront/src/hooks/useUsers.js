import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchUsers from "../api/fetchUsers";
import fetchUserById from "../api/fetchUserById";

const useUsers = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const { data: users = [], error } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetchUsers();
      return response?.data || [];
    },
  });

  const handleDisplay = async (id) => {
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
    handleDisplay,
    handleOk,
    handleCancel,
    navigate,
  };
};

export default useUsers;
