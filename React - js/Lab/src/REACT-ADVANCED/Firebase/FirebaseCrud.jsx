//Shortcut Crud Method---------------------------------//
import React from 'react'
import {useState} from 'react'
// import { db } from "../FIREBASE/Firebase"
import { db } from "../FIREBASE/Firebase";


import {addDoc, collection} from 'firebase/firestore';

const FirebaseCrud = () => {
    const [data, setData] = useState({
        name: "",
        age: "",
        salary: ""
    });
    const [alldata, setAllData] = useState ([]);
    const handleChange = (e) => {
        let {name, value} = e.target;

        setData({
            ...data,
            [name] : value,
        });
    };
    const saveData = async(e) => {
        e.preventDefault();
        await addDoc(collection(db, "ketan"), data);
        setData({
            name:"",
            age:"",
            salary:""
        });
    };
 return (
    <div>
        <h2>Firebase Crud</h2>
        <form action="#" method='post' name='frm' onSubmit={saveData}>
            <label htmlFor="">Name:</label>
            <input type="text" name='name' id='name' value={data.name} onChange={handleChange} /><br /><br />
            <label htmlFor="">Age:</label>
            <input type="number" name='age' id='age' value={data.age} onChange={handleChange} /><br /><br />
            <label htmlFor="">Salary:</label>
            <input type="number" name='salary' id='salary' value={data.salary} onChange={handleChange} /><br /><br />
            <input type="submit" name='save' id='Save Data' /><br /><br />
        </form>
        <br />
        <table border={"2"}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Salary</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                    {alldata.map((i, index) => {
                    return (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{i.name}</td>
                            <td>{i.age}</td>
                            <td>{i.salary}</td>
                            <td>Delete</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
  );
};

export default FirebaseCrud;