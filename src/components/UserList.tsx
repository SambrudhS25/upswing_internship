import { Table, Space, Button, Skeleton } from "antd";
import useDeleteUser from "../hooks/useDeleteUser";
import useUsers from "../hooks/useUsers";
import { User } from "../hooks/useCreateUser";
import { ColumnsType } from "antd/es/table";
import UserInfoModal from "./UserInfoModal";
import DeleteUserModal from "./DeleteUserModal";

const UserList: React.FC = () => {
  const {
    users,
    error,
    handleDisplay,
    selectedUser,
    isModalOpen,
    handleCancel,
    handleOk,
    navigate,
    isLoading,
  } = useUsers();

  interface TableData extends User {
    key: number;
  }

  const {
    deleteUser,
    handleDelete,
    handleDeleteCancel,
    isDeleteModalOpen,
    handleDeleteOk,
  } = useDeleteUser();

  const columns: ColumnsType<TableData> = [
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
        size="large"
        onClick={() => navigate("/create-user")}
      >
        Add User
      </Button>
      {error && (
        <p style={{ color: "red" }}>{error.message || "An error occurred"}</p>
      )}
      {isLoading ? (
        <Skeleton active />
      ) : (
        <Table
          columns={columns}
          dataSource={users?.map((user: User, index: number) => ({
            key: index + 1,
            id: user.id,
            name: user.name,
          }))}
          pagination={false}
        />
      )}

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
