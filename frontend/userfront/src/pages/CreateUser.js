import axios from "axios";
import { useState } from "react";

const CreateUser=()=>{

    const [user, setUser] = useState({
        id: "",
        name: "",
        address: "",
        phoneNo: "",
      });

      const [userData,setUserData]=useState();

      const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
      };

       const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("User Data:", user); // Logs the user data to the console
        try{
        const res= await axios.post("http://localhost:8080/user/createUser",user)
        // setUserData(res);
        }catch(e){
            console.log("error",e);
        }
      };
      
      const handleUpdate = async (e) => {
        e.preventDefault();
        console.log("User Data:", user); // Logs the user data to the console
        try{
        const res= await axios.post("http://localhost:8080/user/updateUser",user)
        setUserData(res);
        }catch(e){
            console.log("error",e);
        }
      };


return(
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
    <h2>User Information Form</h2>
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: "10px" }}>
        <label>ID:</label>
        <input
          type="text"
          name="id"
          value={user.id}
          onChange={handleChange}
          placeholder="Enter ID"
          style={{ width: "100%", padding: "8px", marginTop: "5px" }}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Enter Name"
          style={{ width: "100%", padding: "8px", marginTop: "5px" }}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={user.address}
          onChange={handleChange}
          placeholder="Enter Address"
          style={{ width: "100%", padding: "8px", marginTop: "5px" }}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNo"
          value={user.phoneNo}
          onChange={handleChange}
          placeholder="Enter Phone Number"
          style={{ width: "100%", padding: "8px", marginTop: "5px" }}
        />
      </div>

      <button
        type="submit"
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
      <button
        type="update"
        onClick={handleUpdate}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Update
      </button>
    </form>
    {userData && (
        <div>
          <h2>Updated User Details</h2>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>address:</strong> {user.address}</p>
          <p><strong>phoneno:</strong> {user.phoneNo}</p>

        </div>
      )}

  </div>
);
}

export default CreateUser;