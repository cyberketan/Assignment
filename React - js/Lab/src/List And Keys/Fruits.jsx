import React from 'react'

// list of fruits access with map function //
const Fruits = () => {
    const fruits=  ["Apple", "Banana", "Mango", "Orange", "Grapes"];

  return (
    <div>
         <h2>Fruit List 🍎</h2>
          <ul>
        {fruits.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      
    </div>
  )
}

export default Fruits
