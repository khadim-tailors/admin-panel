import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../common/Loader";

function Users() {
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5001/khadim-tailors/us-central1/users/getAllUsersForAdmin")
      .then((response) => {
          const {result, status} = response.data
        if (status) {
            setUsersData(result);
        } 
      });
  },[]);
  return (
    <>
      {usersData.length === 0 ? (
        <Loader />
      ) : (
        <div className="mainContent-container">
          <table
            className="table table-striped table-bordered"
            style={{ verticalAlign: "middle" }}
          >
            <thead className="table-dark borderless">
              <tr>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email ID</th>
                <th>Location</th>
                <th>Plan</th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((user) => {
                return (
                  <tr key={user.user_id}>
                    <td>{user?.first_name} {user?.last_name}</td>
                    <td>{user?.phone || user?.phone_num}</td>
                    <td>{user?.email}</td>
                    <td>{user?.address} {user?.city}, {user?.state}</td>
                    <td>{user?.plan}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default Users;
