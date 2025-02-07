import useUsers from "../hooks/useUsers";
import { Table, Space, Button } from "antd";
import UserInfoModal from "./UserInfoModal";
import useDeleteUser from "../hooks/useDeleteUser";
import DeleteUserModal from "./DeleteUserModal";

const UserList = () => {
  const {
    users,
    error,
    handleDisplay,
    selectedUser,
    isModalOpen,
    handleCancel,
    handleOk,
    navigate,
  } = useUsers();

  const {
    deleteUser,
    handleDelete,
    handleDeleteCancel,
    isDeleteModalOpen,
    handleDeleteOk,
  } = useDeleteUser();

  const columns = [
    { title: "Sl No", dataIndex: "key", key: "key" },
    { title: "Name", dataIndex: "name", key: "name" },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" danger onClick={() => handleDelete(record.id)}>
            delete
          </Button>
        </Space>
      ),
    },
    {
      title: "View User",
      key: "show",
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" onClick={() => handleDisplay(record.id)}>
            show
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Button
        type="primary"
        size="small"
        onClick={() => navigate("/create-user")}
      >
        Add/Update User
      </Button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Table
        columns={columns}
        dataSource={users?.map((user, index) => ({
          key: index + 1,
          id: user.id,
          name: user.name,
        }))}
        pagination={false}
      />

      {selectedUser && (
        <UserInfoModal
          record={selectedUser}
          isModalOpen={isModalOpen}
          handleOk={handleOk}
          handleCancel={handleCancel}
        />
      )}
      {deleteUser && (
        <DeleteUserModal
          record={deleteUser}
          isDeleteModalOpen={isDeleteModalOpen}
          handleDeleteOk={handleDeleteOk}
          handleDeleteCancel={handleDeleteCancel}
        />
      )}
    </>
  );
};

export default UserList;
