import axios from "axios";
import { useState } from "react";

const SearchUser = () => {
  const [userId, setUserId] = useState(""); 
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  async function handleClick() {
    try {
      const response = await axios.get(`http://localhost:8080/user/searchUser?id=${userId}`);
        setUserData(response.data); 
      setError(""); 
      
      
    } catch (e) {
      setUserData(null); 
      // console.log(e.response);
      setError("User not found or an error occurred: "+(e.response===undefined?"":e.response.data)); 
    }
  }

  async function handleDelete() {
    try {
      const response = await axios.delete(`http://localhost:8080/user/deleteUser?id=${userId}`);
      setUserData(response.data); 
      setError("User successfully deleted."); 
    } catch (e) {
      setUserData(null); 
      setError("User not found or an error occurred: "+(e.response===undefined?"":e.response.data)); 
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(135deg,rgb(186, 199, 220),rgb(83, 150, 151))", 
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333" }}>Search User</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)} 
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            flex: "1",
            fontSize: "16px",
          }}
        />
        <button
          onClick={handleClick}
          style={{
            padding: "10px 15px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Search
        </button>
        <button
          onClick={handleDelete}
          style={{
            padding: "10px 15px",
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Delete
        </button>
      </div>

      {userData && (
  <div
    style={{
      backgroundColor: "#ffffff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      marginBottom: "20px",
      maxWidth: "400px",
      margin: "20px auto",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
    }}
  >
    <h2
      style={{
        color: "#007bff",
        marginBottom: "15px",
        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
      }}
    >
      User Details
    </h2>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "flex-start",
      }}
    >
      <p
        style={{
          fontSize: "16px",
          color: "#555",
          margin: "0",
        }}
      >
        <strong style={{ color: "#333" }}>ID:</strong> {userData.id}
      </p>
      <p
        style={{
          fontSize: "16px",
          color: "#555",
          margin: "0",
        }}
      >
        <strong style={{ color: "#333" }}>Name:</strong> {userData.name}
      </p>
      <p
        style={{
          fontSize: "16px",
          color: "#555",
          margin: "0",
        }}
      >
        <strong style={{ color: "#333" }}>Address:</strong> {userData.address}
      </p>
      <p
        style={{
          fontSize: "16px",
          color: "#555",
          margin: "0",
        }}
      >
        <strong style={{ color: "#333" }}>Phone Number:</strong> {userData.phoneNo || "N/A"}
      </p>
    </div>
  </div>
)}


      {/* Display an error message */}
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
    </div>
  );
};

export default SearchUser;
