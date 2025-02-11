import { Modal } from "antd";
import { User } from "../hooks/useCreateUser";

interface UserDeleteModalProps {
  record?: User;
  isDeleteModalOpen: boolean;
  handleDeleteOk: () => void;
  handleDeleteCancel: () => void;
}

const DeleteUserModal: React.FC<UserDeleteModalProps> = ({
  record,
  isDeleteModalOpen,
  handleDeleteOk,
  handleDeleteCancel,
}) => {
  return (
    <Modal
      title="User Details"
      open={isDeleteModalOpen}
      onOk={handleDeleteOk}
      onCancel={handleDeleteCancel}
    >
      <p>
        <strong>ID:</strong> {record?.id}
      </p>
      <p>
        <strong>Name:</strong> {record?.name}
      </p>
      <p>
        <strong>Phone No:</strong> {record?.phoneNo}
      </p>
      <p>
        <strong>Address:</strong> {record?.address}
      </p>
      <p>
        <strong>Are you sure you want to delete this user?</strong>{" "}
      </p>
    </Modal>
  );
};

export default DeleteUserModal;
