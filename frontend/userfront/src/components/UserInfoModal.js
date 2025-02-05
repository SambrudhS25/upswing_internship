import { Modal } from "antd";

const UserInfoModal = ({ record, isModalOpen, handleOk, handleCancel }) => {
  return (
    <Modal title="User Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <p><strong>ID:</strong> {record?.id}</p>
      <p><strong>Name:</strong> {record?.name}</p>
      <p><strong>Phone No:</strong> {record?.phoneNo}</p>
      <p><strong>Address:</strong> {record?.address}</p>
    </Modal>
  );
};

export default UserInfoModal;
