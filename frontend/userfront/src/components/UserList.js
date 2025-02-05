import { Table, Space } from "antd";
import useUsers from "../hooks/useUsers"; 
import UserInfoModal from "./UserInfoModal";

const UserList = () => {
  const { filteredUsers, error, selectedUser, isModalOpen, handleDelete, handleDisplay, handleOk, handleCancel } = useUsers();

  const columns = [
    {
      title: "Sl No",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
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
      title: "Show",
      key: "show",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => handleDisplay(record.id)}>Show</a>
        </Space>
      ),
    },
  ];

  return (
    <>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Table
        columns={columns}
        dataSource={filteredUsers.map((user, index) => ({
          key: index + 1,
          id: user.id,
          name: user.name,
        }))}
        pagination={false}
      />

      {/* Pass `isModalOpen` as a prop to control visibility */}
      {selectedUser && (
        <UserInfoModal
          record={selectedUser}
          isModalOpen={isModalOpen}
          handleOk={handleOk}
          handleCancel={handleCancel}
        />
      )}
    </>
  );
};

export default UserList;
