import React from 'react'

const Test = () => {
  const topic = "JSX"
  const  description  = "JSX allows you to write HTML-like code inside JavaScript.";
  return (
    <div>
      <h1>Welcome to JSX ....!</h1>
      <p>
        {topic} is used in React. {description}
      </p>
    </div>
  )
}

export default Test
