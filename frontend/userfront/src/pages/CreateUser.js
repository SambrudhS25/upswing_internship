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
      const res = await axios.post("http://localhost:8081/user/createUser", user);
      setUserData(res.data);
      setMessage("User created successfully!");
    } catch (e) {
      console.log("Error:", e);
      setMessage("An error occurred while creating the user: " + (e.response ? e.response.data : ""));
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await axios.post("http://localhost:8081/user/updateUser", user);
      setUserData(res.data);
      setMessage("User updated successfully!");
    } catch (e) {
      console.log("Error:", e);
      setMessage("An error occurred while updating the user: " + (e.response ? e.response.data : ""));
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-6 bg-gradient-to-br from-orange-300 to-teal-500">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-5">User Information Form</h2>

        <form>
          {["id", "name", "address", "phoneNo"].map((field) => (
            <div className="mb-4 text-left" key={field}>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                {field.charAt(0).toUpperCase() + field.slice(1)}:
              </label>
              <input
                type="text"
                name={field}
                value={user[field]}
                onChange={handleChange}
                placeholder={`Enter ${field}`}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
          ))}

          <div className="flex justify-between mt-4">
            <button
              onClick={handleSubmit}
              className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition duration-200"
            >
              Submit
            </button>
            <button
              onClick={handleUpdate}
              className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition duration-200"
            >
              Update
            </button>
          </div>
        </form>

        {message && (
          <p className={`mt-4 font-semibold ${message.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
            {message}
          </p>
        )}

        {userData && (
          <div className="mt-6 p-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg">
            <h3 className="text-xl font-semibold mb-2">User Details</h3>
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
