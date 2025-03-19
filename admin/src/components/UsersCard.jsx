/* eslint-disable no-unused-vars */
import axios from "axios";
import React from "react";

const UsersCard = ({ user, setUsers }) => {
  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(
        `http://meta.env.VITE_APP_URL+/api/user/${id}`,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      setUsers((prev) => prev.filter((user) => user._id !== id));
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="w-[300px] bg-gradient-to-r from-gray-900 to-gray-700 text-white p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p className="text-sm text-gray-300">{user.email}</p>
      <span className="inline-block mt-3 px-4 py-1 bg-gray-600 rounded-full text-xs uppercase tracking-wide">
        {user.role}
      </span>
      <button
        onClick={() => deleteUser(user._id)}
        className="float-right cursor-pointer bg-red-500 text-white px-4 py-2 rounded mt-4"
      >
        Delete
      </button>
    </div>
  );
};

export default UsersCard;
