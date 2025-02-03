import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`http://localhost:8081/user/getAllUsers`);
        setUsers(res.data);
      } catch (e) {
        setError("There was an error fetching details");
        console.error("Error fetching data:", e);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen p-5 font-sans bg-gradient-to-br from-lime-400 to-gray-400">
      <h1 className="text-center text-gray-800 text-3xl font-bold">Home</h1>

      {/* Buttons Section */}
      <div className="flex justify-center gap-5 my-6">
        <Link
          to="/search-user"
          className="text-white bg-blue-500 px-5 py-2 rounded-md text-lg hover:bg-blue-600 transition duration-200"
        >
          Search/Delete User
        </Link>
        <Link
          to="/create-user"
          className="text-white bg-green-600 px-5 py-2 rounded-md text-lg hover:bg-green-700 transition duration-200"
        >
          Create/Update User
        </Link>
      </div>

      <h2 className="text-center text-gray-700 text-2xl font-semibold">User List</h2>

      {/* User Cards Section */}
      <div className="flex flex-wrap justify-center gap-5 mt-5">
        {users.length > 0 ? (
          users.map((user) => (
            <div
              key={user.id}
              className="w-64 p-4 border border-gray-300 rounded-lg shadow-md bg-gray-100"
            >
              <h3 className="text-lg font-semibold text-blue-500 mb-2">{user.name}</h3>
              <p className="text-gray-700">
                <strong>ID:</strong> {user.id}
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> {user.address}
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> {user.phoneNo || "N/A"}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-lg">No users found.</p>
        )}
        {error && <p className="text-red-500 text-lg">{error}.</p>}
      </div>
    </div>
  );
};

export default Home;
