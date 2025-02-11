import { Modal } from "antd";
import { User } from "../hooks/useCreateUser";

interface UserInfoModalProps {
  record?: User;
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}

const UserInfoModal: React.FC<UserInfoModalProps> = ({
  record,
  isModalOpen,
  handleOk,
  handleCancel,
}) => {
  return (
    <Modal
      okText="Update"
      title="User Details"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
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
    </Modal>
  );
};

export default UserInfoModal;
