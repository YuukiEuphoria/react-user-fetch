import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../features/users/fetchUsers";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { deleteUser } from "../../features/deleteUser/deleteUser";
import AddUserModal from '../addUserModal/AddUserModal'
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";

const UsersList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="students-list">
      <h1>CRUD OPERATIONS</h1>
      <div className="list">
        <h2>Users List</h2>
        <div className="main-btns">
          <button onClick={() => setIsModalOpen(true)}>ADD NEW USER</button>
          {isModalOpen && (
            <AddUserModal onClose={() => setIsModalOpen(false)} />
          )}{" "}
          <button onClick={() => dispatch(fetchUsers())}>LOAD USERS</button>
        </div>
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
            <tr>
              <td colSpan="6"><LoadingSpinner/></td>
            </tr>
          ) : error ? (
            <tr>
              <td colSpan="6">Ошибка: {error}</td>
            </tr>
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
                <td className="btns">
                  <MdDelete
                    className="delete"
                    onClick={() => {
                      dispatch(deleteUser(user.id));
                    }}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
