import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [error,setError]=useState();
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`http://localhost:8081/user/getAllUsers`);
        setUsers(res.data); 
      } catch (e) {
        setError("There was an error fetching details")
        console.error("Error fetching data:", e);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(135deg,rgb(199, 226, 25),rgb(171, 184, 189))", 
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333" }}>Home</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <Link
          to="/search-user"
          style={{
            textDecoration: "none",
            color: "white",
            backgroundColor: "#007bff",
            padding: "10px 20px",
            borderRadius: "4px",
            fontSize: "16px",
          }}
        >
          Search/Delete User
        </Link>
        <Link
          to="/create-user"
          style={{
            textDecoration: "none",
            color: "white",
            backgroundColor: "#28a745",
            padding: "10px 20px",
            borderRadius: "4px",
            fontSize: "16px",
          }}
        >
          Create/Update User
        </Link>
      </div>

      <h2 style={{ textAlign: "center", color: "#555" }}>User List</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {users.length > 0 ? (
          users.map((user) => (
            <div
              key={user.id}
              style={{
                width: "250px",
                padding: "15px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                textAlign: "left",
                backgroundColor: "#f9f9f9",
              }}
            >
              <h3 style={{ margin: "0 0 10px", color: "#007bff" }}>{user.name}</h3>
              <p style={{ margin: "5px 0" }}>
                <strong>ID:</strong> {user.id}
              </p>
              <p style={{ margin: "5px 0" }}>
                <strong>Address:</strong> {user.address}
              </p>
              <p style={{ margin: "5px 0" }}>
                <strong>Phone:</strong> {user.phoneNo || "N/A"}
              </p>
            </div>
          ))
        ) : (
          <p style={{ color: "#888", fontSize: "18px" }}>No users found.</p>
        )}
        {error&&
          <p style={{ color: "#888", fontSize: "18px" }}>{error}.</p>
        }
      </div>
    </div>
  );
};

export default Home;
