import React, { useState } from 'react'

const UserLogin = () => {
    const  [ isLoggedIn, setIsLoggedIn ] = useState(false);
  return (
    <div>
        <h1>USER STATUS</h1>
        
        
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        <button onClick={() => setIsLoggedIn(true)}>Login</button>

        

        
          <p>
        Status: {isLoggedIn ? "Logged In ✅" : "Logged Out ❌"}
      </p>

      
    </div>
  )
}

export default UserLogin
