import { useEffect, useState } from "react";
import { useTransition } from "react";
import UserList from "../components/UserList";

const Home = () => {
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState("");

  // const handleSearch = (e) => {
  //   const value = e.target.value;
  //   setQuery(value);

  //   startTransition(() => {
  //     if (value.length > 0) {
  //       setFilteredUsers(users.filter((user) => user.name.toLowerCase().includes(value.toLowerCase())));
  //     } else {
  //       setFilteredUsers(users);
  //     }
  //   });
  // };

  // const handleClose = () => {
  //   setSelectedUser(null); // Close the card by setting selectedUser to null
  // };

  return (
    <div>
      {/* Search Section
      <div className="flex justify-center my-4">
        <input
          className="border border-gray-300 p-2 rounded-md"
          placeholder="Search for name"
          onChange={handleSearch}
        />
      </div> */}

      {/* User Table Section */}
      {/* {isPending && <p>Loading...</p>}
      {error && <p className="text-red-500 text-lg">{error}</p>} */}
      <UserList />
      {/* Conditionally render the user details card */}
      {/* {selectedUser && (
        <div
          style={{
            position: "fixed",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1000, // Make sure the card stays above the overlay
          }}
        >
          <Card
            title="User Details"
            bordered
            style={{ width: 300 }}
            actions={[
              <Button type="primary" onClick={handleClose}>
                Close
              </Button>,
            ]}
          >
            <p><strong>ID:</strong> {selectedUser.id}</p>
            <p><strong>Name:</strong> {selectedUser.name}</p>
            <p><strong>Address:</strong> {selectedUser.address}</p>
            <p><strong>Phone Number:</strong> {selectedUser.phoneNo}</p>
          </Card>
        </div>
      )} */}
    </div>
  );
};

export default Home;
