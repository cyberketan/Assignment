import React, { useState } from 'react'
 //button clicked changes //
const Button = () => {
    const [text,SetText] = useState( "Not Clicked 😡");
    const handleclick = ()=>{
        SetText( "Clicked! 😄🎉")
    }
  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>
        <h1>{text}</h1>
        <button onClick={handleclick}>
            Cliked ME....
        </button>
      
    </div>
  )
}

export default Button
