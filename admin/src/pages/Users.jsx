import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UsersCard from '../components/UsersCard'

function Users() {

    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
          const res = await axios.get("http://localhost:5000/api/user/", {
            headers: {
              Authorization: `${localStorage.getItem("token")}`,
            },
          });
          setUsers(res.data);
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      };

      useEffect(() => {
        fetchUsers();
      }, []);

  return (
      <div>
      <h1 className='m-10 text-3xl font-bold mb-4'>Users</h1>
    <div className='m-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {users.map((user) => (
            <div key={user._id} >
                <UsersCard user={user} setUsers={setUsers}/>
            </div>
        ))}
    </div>
    </div>
  )
}

export default Users