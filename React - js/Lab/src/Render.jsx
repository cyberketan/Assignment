import React from 'react'

const Render = () => {
      const topic = "JSX";
  const description = "JSX allows us to write HTML inside JavaScript in React.";

  return (
    <div>
        <h1>Welcome to JSX !! 

        </h1>
       <p>
        {topic} is a syntax extension for React. {description}
      </p>
    </div>
  )
}

export default Render
