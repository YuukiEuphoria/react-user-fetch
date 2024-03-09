import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../features/users/fetchUsers";

const UsersList = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="students-list">
      <h1>CRUD OPERATIONS</h1>
      <div className="list">
        <h2>Students List</h2>
        <button onClick={() => dispatch(fetchUsers())}>LOAD USERS</button>
      </div>
      <table className="students-list">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr><td colSpan="6">Loading...</td></tr>
          ) : error ? (
            <tr><td colSpan="6">Ошибка: {error}</td></tr>
          ) : (
            users.map((user, index) => (
              <tr className="user" key={index}>
                <td>
                  <img src="./user.webp"></img>
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>{user.company.catchPhrase}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;