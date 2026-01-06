import React, { useEffect, useState } from 'react'

const UserTable = () => {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) =>{
            setUsers(data);
        })
    })
  return (
    <div>
        <h1>Fetche Data From Public Api</h1>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user) =>(
                        <tr>
                           <td>{user.id}</td>
                           <td>{user.name}</td>
                           <td>{user.email}</td>
                           <td>{user.address.city}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      
    </div>
  )
}

export default UserTable
