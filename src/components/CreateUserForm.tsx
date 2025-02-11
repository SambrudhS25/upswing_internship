import { Button, Form, Input } from "antd";
import useCreateUser, { UserFormValues } from "../hooks/useCreateUser";
import { User } from "../hooks/useCreateUser";

interface UserProps {
  user: User | null;
}

const CreateUserForm: React.FC<UserProps> = ({ user }) => {
  const { form, userData, handleSubmit, handleUpdate } = useCreateUser();

  const handleFormSubmit = (values: UserFormValues) => {
    handleSubmit(values);
    form.resetFields();
  };

  const handleFormUpdate = async () => {
    try {
      const values = await form.validateFields();
      handleUpdate(values);
      console.log(values);
      form.setFieldsValue(values);
    } catch (err) {
      console.log("Validation failed:", err);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <h2 style={{ textAlign: "center" }}>User Information Form</h2>

      <Form
        form={form}
        layout="vertical"
        onFinish={handleFormSubmit}
        initialValues={user || {}}
      >
        <Form.Item label="ID" name="id">
          <Input placeholder="Enter ID" disabled={!!user} />
        </Form.Item>

        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Name is required." }]}
        >
          <Input placeholder="Enter Name" />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: "Address is required." }]}
        >
          <Input placeholder="Enter Address" />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phoneNo"
          rules={[
            { required: true, message: "Phone Number is required." },
            { pattern: /^\d{10}$/, message: "Phone Number must be 10 digits." },
          ]}
        >
          <Input placeholder="Enter Phone Number" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={!!user}>
            Submit
          </Button>

          <Button
            type="default"
            style={{ marginLeft: 10 }}
            onClick={handleFormUpdate}
          >
            Update
          </Button>
        </Form.Item>
      </Form>

      {userData && (
        <div
          style={{
            marginTop: 20,
            padding: 15,
            border: "1px solid #ddd",
            borderRadius: 5,
          }}
        >
          <h3>User Details</h3>
          <p>
            <strong>ID:</strong> {userData.id}
          </p>
          <p>
            <strong>Name:</strong> {userData.name}
          </p>
          <p>
            <strong>Address:</strong> {userData.address}
          </p>
          <p>
            <strong>Phone Number:</strong> {userData.phoneNo}
          </p>
        </div>
      )}
    </div>
  );
};

export default CreateUserForm;
