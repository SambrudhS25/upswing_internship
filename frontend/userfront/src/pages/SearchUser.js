import axios from "axios";
import { useState } from "react";

const SearchUser = () => {
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  async function handleClick() {
    try {
      const response = await axios.get(`http://localhost:8081/user/searchUser?id=${userId}`);
      setUserData(response.data);
      setError("");
    } catch (e) {
      setUserData(null);
      setError("User not found or an error occurred: " + (e.response === undefined ? "" : e.response.data));
    }
  }

  async function handleDelete() {
    try {
      const response = await axios.delete(`http://localhost:8081/user/deleteUser?id=${userId}`);
      setUserData(response.data);
      setError("User successfully deleted.");
    } catch (e) {
      setUserData(null);
      setError("User not found or an error occurred: " + (e.response === undefined ? "" : e.response.data));
    }
  }

  return (
    <div className="min-h-screen p-5 font-sans bg-gradient-to-br from-blue-200 to-teal-500">
      <h1 className="text-center text-gray-800 text-3xl font-bold">Search User</h1>

      {/* Search Input & Buttons */}
      <div className="flex justify-center gap-3 my-6">
        <input
          type="text"
          placeholder="Enter User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md flex-1 text-lg focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleClick}
          className="px-4 py-2 bg-blue-500 text-white rounded-md text-lg hover:bg-blue-600 transition duration-200"
        >
          Search
        </button>
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-500 text-white rounded-md text-lg hover:bg-red-600 transition duration-200"
        >
          Delete
        </button>
      </div>

      {/* User Details Card */}
      {userData && (
        <div className="bg-white p-5 rounded-lg shadow-lg max-w-md mx-auto text-center">
          <h2 className="text-blue-500 text-2xl font-semibold mb-3">User Details</h2>
          <div className="text-gray-700 space-y-2 text-left">
            <p className="text-lg">
              <strong className="text-gray-900">ID:</strong> {userData.id}
            </p>
            <p className="text-lg">
              <strong className="text-gray-900">Name:</strong> {userData.name}
            </p>
            <p className="text-lg">
              <strong className="text-gray-900">Address:</strong> {userData.address}
            </p>
            <p className="text-lg">
              <strong className="text-gray-900">Phone Number:</strong> {userData.phoneNo || "N/A"}
            </p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && <p className="text-red-600 text-center text-lg mt-4">{error}</p>}
    </div>
  );
};

export default SearchUser;
 