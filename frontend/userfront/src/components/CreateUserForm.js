
import { Button, Form, Input, message } from "antd";
import useCreateUser from "../hooks/useCreateUser";

const CreateUserForm=()=>{

    const {form,userData,handleSubmit,handleUpdate}= useCreateUser();    

    return (
        <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
          <h2 style={{ textAlign: "center" }}>User Information Form</h2>
    
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              label="ID"
              name="id"
              rules={[{ required: true, message: "ID is required." }]}
            >
              <Input placeholder="Enter ID" />
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
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button
                type="default"
                style={{ marginLeft: 10 }}
                onClick={() => form.submit(handleUpdate)}
              >
                Update
              </Button>
            </Form.Item>
          </Form>
    
          {userData && (
            <div style={{ marginTop: 20, padding: 15, border: "1px solid #ddd", borderRadius: 5 }}>
              <h3>User Details</h3>
              <p><strong>ID:</strong> {userData.id}</p>
              <p><strong>Name:</strong> {userData.name}</p>
              <p><strong>Address:</strong> {userData.address}</p>
              <p><strong>Phone Number:</strong> {userData.phoneNo}</p>
            </div>
          )}
        </div>
      );
}

export default CreateUserForm;
