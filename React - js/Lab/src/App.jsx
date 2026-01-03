import { useState } from 'react'
import "./App.css";

// import Usercard from './PROPS AND STATE/Usercard'
import State from './PROPS AND STATE/State';
import Button from './Handling Events/Button';
import InputForm from './Handling Events/InputFrom';
import UserLogin from './Conditional Rendering/UserLogin';
import Display from './Conditional Rendering/display';
import UserList from './List And Keys/UserList';
import Crud from './Froms In React/Crud';
import Form from './Froms In React/From';
// import Form from './Froms In React/From';
import Task from './Froms In React/From';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        {/* <Usercard name="Ketan Panchal" age={22} location="Gujarat, India" /> */}
        {/* <State/> */}

        {/* <Button/> */}
        {/* <InputForm/> */}
        {/* <UserLogin/> */}
        {/* <Display/> */}
        {/* <Fruits/> */}
        {/* <UserList/> */}
        {/* <Crud/> */}

        {/* <From/> */}

        <Task/>
  
      </div>
     
    </>
  )
}

export default App
