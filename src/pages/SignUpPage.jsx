import { NavLink } from 'react-router-dom';
import '../style/StyleSheet.css';
import { React, useState } from 'react';
import { db } from '../firebase-config';
import { collection, addDoc } from "firebase/firestore";

function Register() {
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");
    const [newFName, setNewFName] = useState("");
    const [newLName, setNewLName] = useState("");
    const [newUName, setNewUName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const createUser = async () => {
        await addDoc(usersCollectionRef, {firstName: newFName, lastName: newLName, username: newUName, email: newEmail, password: newPassword, gender: "Undefined", age: Number(0)});
    };

    return (
        <div class="regPage">
            <div class="form">
                <div class="textboxArea">
                    <input type="text" placeholder="First Name" class="textbox" onChange={(event) => {setNewFName(event.target.value)}} />
                    <input type="text" placeholder="Last Name" class="textbox" onChange={(event) => {setNewLName(event.target.value)}} />
                    <input type="text" placeholder="Username" class="textbox" onChange={(event) => {setNewUName(event.target.value)}} />
                    <input type="text" placeholder="E-mail Address" class="textbox" onChange={(event) => {setNewEmail(event.target.value)}} />
                    <input type="password" placeholder="Password" class="textbox" onChange={(event) => {setNewPassword(event.target.value)}} />
                    <input type="password" placeholder="Confirm Password" class="textbox" />
                </div>
                <div class="registerButtons">
                    <NavLink to="/profile"><button onClick={createUser} class="registerButtons">SUBMIT</button></NavLink>
                    <NavLink to="/"><button class="registerButtons">CANCEL</button></NavLink>
                </div>
            </div>
            <div class="regPageBG" />
            <div class="regPageBGIMG" />
        </div>
    );
}

export default Register;