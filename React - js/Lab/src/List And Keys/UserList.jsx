import React from 'react'
 function UserList() {
    const users = [
    { id: 1, name: "karan" },
    { id: 2, name: "Amit" },
    { id: 3, name: "Neha" },
  ];
  return (
    <div>
        <h1>USER LISTS</h1>
        <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
    
  )
}
export default UserList;

