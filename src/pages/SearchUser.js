import axios from "axios";
import { useState } from "react";

const SearchUser=()=>{
    const [userId, setUserId] = useState(""); // State to store user input
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(""); 

async function handleClick(){
 try {
      const response = await axios.get(`http://localhost:8080/user/searchUser?id=${userId}`);
      setUserData(response.data); // Store fetched user data
      setError(""); // Clear previous errors
    } catch (err) {
      setUserData(null); // Clear previous user data
      setError("User not found or an error occurred!"); // Display error message
    }
}
async function handleDelete(){
    try {
         const response = await axios.get(`http://localhost:8080/user/deleteUser?id=${userId}`);
         setUserData(response.data); // Store fetched user data
         setError(""); // Clear previous errors
       } catch (err) {
         setUserData(null); // Clear previous user data
         setError("User not found or an error occurred!"); // Display error message
       }
   }

return(
    <div style={{ padding: "20px" }}>
      <h1>Search User</h1>
      <div>
        <input
          type="text"
          placeholder="Enter User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)} // Update userId as the user types
        />
        <button onClick={handleClick}>Search</button>
        <button onClick={handleDelete}>Delete</button>
      </div>

      {/* Display the result */}
      {userData && (
        <div>
          <h2>User Details</h2>
          <p><strong>ID:</strong> {userData.id}</p>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>address:</strong> {userData.address}</p>
          <p><strong>phoneno:</strong> {userData.phoneNo}</p>

        </div>
      )}

      {/* Display an error message */}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
);
}

export default SearchUser;