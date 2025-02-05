import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Button, Table, Space } from "antd";
import { useTransition } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [error, setError] = useState();
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState(null); 

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`http://localhost:8081/user/getAllUsers`);
        setUsers(res.data);
        setFilteredUsers(res.data);
      } catch (e) {
        setError("There was an error fetching details");
        console.error("Error fetching data:", e.response?.data);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this user?");
    if (!isConfirmed) return;
    console.log(`Delete user with ID: ${id}`);
    try {
      const response = await axios.delete(`http://localhost:8081/user/deleteUser?id=${id}`);
      setUsers(users.filter(user => user.id !== id));
      setFilteredUsers(filteredUsers.filter(user => user.id !== id));
      alert("User deleted successfully");
    } catch (e) {
      setError("User not found or an error occurred: " + (e.response === undefined ? "" : e.response.data));
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    startTransition(() => {
      if (value.length > 0) {
        setFilteredUsers(users.filter((user) => user.name.toLowerCase().includes(value.toLowerCase())));
      } else {
        setFilteredUsers(users);
      }
    });
  };

  const handleDisplay = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8081/user/searchUser?id=${id}`);
      setSelectedUser(response.data); // Store the user data to be displayed in the card
    } catch (e) {
      setError("Error fetching user details");
    }
  };

  const handleClose = () => {
    setSelectedUser(null); // Close the card by setting selectedUser to null
  };

  const columns = [
    {
      title: "Sl No",
      dataIndex: "key",
      key: "key",
      render: (text) => <>{text}</>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <>{text}</>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => handleDelete(record.id)}>Delete</a>
        </Space>
      ),
    },
    {
      title: "Show User",
      key: "display",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => handleDisplay(record.id)}>Show</a>
        </Space>
      ),
    },
  ];

  // Prepare the data for the table
  const tableData = filteredUsers.map((user, index) => ({
    key: index + 1, // Serial number as key
    id: user.id,
    name: user.name,
  }));

  return (
    <div>
      <h1 className="text-center text-gray-800 text-3xl font-bold">Home</h1>

      {/* Search Section */}
      <div className="flex justify-center my-4">
        <input
          className="border border-gray-300 p-2 rounded-md"
          placeholder="Search for name"
          onChange={handleSearch}
        />
      </div>

      {/* User Table Section */}
      {isPending && <p>Loading...</p>}
      {error && <p className="text-red-500 text-lg">{error}</p>}
      <Table columns={columns} dataSource={tableData} pagination={false} />

      {/* Conditionally render the user details card */}
      {selectedUser && (
        <div
          style={{
            position: "fixed",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1000, // Make sure the card stays above the overlay
          }}
        >
          <Card
            title="User Details"
            bordered
            style={{ width: 300 }}
            actions={[
              <Button type="primary" onClick={handleClose}>
                Close
              </Button>,
            ]}
          >
            <p><strong>ID:</strong> {selectedUser.id}</p>
            <p><strong>Name:</strong> {selectedUser.name}</p>
            <p><strong>Address:</strong> {selectedUser.address}</p>
            <p><strong>Phone Number:</strong> {selectedUser.phoneNo}</p>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Home;
