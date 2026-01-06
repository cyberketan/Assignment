import React from 'react'

const UsestateExample = () => {
     const [count,SetCount] = useState(0)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=> SetCount(count + 1)}>
            Increment
        </button>
         <button onClick={()=> SetCount(count + 1)}>
            Decrement
        </button>
      
    </div>
  )
}

export default UsestateExample
