import React, { useState } from 'react'

const Crud = () => {
    const [data,setData] = useState({
        name:"",
        email:"",
        password:"",
    });
   const handleChange = (e) => {
    const { name, value } = e.target;

    setData({
        ...data,
        [name]: value
    })
   }
   const saveData = (e) => {
    e.preventDefault()
    
   }

  return (
    <div>
         <form onSubmit={saveData}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={data.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={data.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={data.password}
            onChange={handleChange}
          />

      
    </div>
       <button type="submit">Submit</button>
      </form>

      <h3>Form Data:</h3>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Password: {data.password}</p>
      </div>
  )
}

export default Crud
