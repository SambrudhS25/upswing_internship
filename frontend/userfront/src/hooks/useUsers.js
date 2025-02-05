import { useState, useEffect } from "react";
import fetchUsers from "../api/fetchUsers"; 
import fetchUserById from "../api/fetchUserById";
import deleteUserById from "../api/deleteUserById";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [error, setError] = useState("");
  const [selectedUser, setSelectedUser] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false);  // ✅ Add this

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetchUsers();
        if (res?.data) {
          setUsers(res.data);
          setFilteredUsers(res.data);
        } else {
          throw new Error("No data returned from API");
        }
      } catch (e) {
        setError("There was an error fetching details");
        console.error("Error fetching data:", e);
      }
    };

    getUsers();
  }, []);

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this user?");
    if (!isConfirmed) return;

    try {
      await deleteUserById(id);
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
      setFilteredUsers(updatedUsers);
      alert("User deleted successfully");
    } catch (e) {
      setError("User not found or an error occurred: " + (e.response ? e.response.data : ""));
    }
  };

  const handleDisplay = async (id) => {
    try {
      const response = await fetchUserById(id);
      setSelectedUser(response.data); 
      setIsModalOpen(true);  // ✅ Show modal when user is fetched
    } catch (e) {
      setError("Error fetching user details");
    }
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return { users, filteredUsers, error, selectedUser, isModalOpen, handleDelete, handleDisplay, handleOk, handleCancel };
};

export default useUsers;
