import React, { useState } from 'react'
// age 18 "you are eligible for vote" otherwise 
"not eligible "// use for if else condition //
const Display = () => {
   const [age,setAge] = useState(18);

  return (
    <div>
        <input type='number'
        value={age}
        onChange={(e) => setAge(e.target.value)} />

         <p>{age >= 18 ? "You are eligible to vote ✅" : "You are not eligible to vote ❌"}</p>
  
       
        
      
    </div>
  )
}

export default Display;
