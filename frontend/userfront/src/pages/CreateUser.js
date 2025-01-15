import axios from "axios";
import { useState } from "react";

const CreateUser = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    address: "",
    phoneNo: "",
  });

  const [userData, setUserData] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await axios.post("http://localhost:8080/user/createUser", user);
      setUserData(res.data);
      setMessage("User created successfully!");
    } catch (e) {
      console.log("Error:", e);
      setMessage("An error occurred while creating the user.");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await axios.post("http://localhost:8080/user/updateUser", user);
      setUserData(res.data);
      setMessage("User updated successfully!");
    } catch (e) {
      console.log("Error:", e);
      setMessage("An error occurred while updating the user.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(135deg, rgb(177, 138, 108), rgb(74, 189, 182))",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#4A4A7A" }}>User Information Form</h2>

        <form>
          {["id", "name", "address", "phoneNo"].map((field) => (
            <div style={{ marginBottom: "20px" }} key={field}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "bold",
                  fontSize: "14px",
                  color: "#333",
                }}
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}:
              </label>
              <input
                type="text"
                name={field}
                value={user[field]}
                onChange={handleChange}
                placeholder={`Enter ${field}`}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  fontSize: "16px",
                  boxSizing: "border-box",
                  outline: "none",
                  transition: "border-color 0.3s ease",
                }}
              />
            </div>
          ))}

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              onClick={handleSubmit}
              style={{
                padding: "12px 20px",
                background: "linear-gradient(135deg, #28a745, #218838)",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = "#218838"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "#28a745"}
            >
              Submit
            </button>
            <button
              onClick={handleUpdate}
              style={{
                padding: "12px 20px",
                background: "linear-gradient(135deg, #007bff, #0056b3)",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = "#0056b3"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "#007bff"}
            >
              Update
            </button>
          </div>
        </form>

        {message && (
          <p
            style={{
              marginTop: "20px",
              color: message.includes("successfully") ? "green" : "red",
              fontWeight: "bold",
            }}
          >
            {message}
          </p>
        )}

        {userData && (
          <div
            style={{
              marginTop: "30px",
              padding: "20px",
              background: "linear-gradient(135deg, #6a11cb, #2575fc)",
              borderRadius: "10px",
              color: "white",
            }}
          >
            <h3>User Details</h3>
            <p><strong>ID:</strong> {userData.id}</p>
            <p><strong>Name:</strong> {userData.name}</p>
            <p><strong>Address:</strong> {userData.address}</p>
            <p><strong>Phone Number:</strong> {userData.phoneNo}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateUser;
