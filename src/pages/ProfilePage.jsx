import { NavLink } from "react-router-dom";
import '../style/StyleSheet.css';
import { React, useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import PopupEdit from "../components/editProfile";

function Profile() {
    const [users, setUsers] = useState([]);
    const [pop, setPop] = useState(false);
    const usersCollectionRef = collection(db, "users");

    const [newFName, setNewFName] = useState("");
    const [newLName, setNewLName] = useState("");
    const [newUName, setNewUName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newAge, setNewAge] = useState("");
    const [newGender, setNewGender] = useState("");

    const deleteUser = async (id) => {
        const userDoc = doc(db, "users", id);
        await deleteDoc(userDoc);
    };

    const updateUser = async (id) => {
        const userDoc = doc(db, "users", id);
        
        const newUNameFld = { username: newUName };
        await updateDoc(userDoc, newUNameFld);

        const newFNameFld = { firstName: newFName };
        await updateDoc(userDoc, newFNameFld);

        const newLNameFld = { lastName: newLName };
        await updateDoc(userDoc, newLNameFld);

        const newEmailFld = { email: newEmail };
        await updateDoc(userDoc, newEmailFld);

        const newAgeFld = { age: newAge };
        await updateDoc(userDoc, newAgeFld);

        const newGenderFld = { gender: newGender };
        await updateDoc(userDoc, newGenderFld);
    };

    useEffect(() => {

        const getUsers = async() => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getUsers();
    }, []);

    return (
        <div class="profilePage">
            <div class="userHeader">
                <h1 class="profileHead">User Profile</h1>
            </div>
            <div class="profileList">
                {users.map((user) => {
                    return (
                        <div class="section">
                            <p>Username:</p>
                            <input type="text" placeholder={user.username} onChange={(e) => { setNewUName(e.target.value) }} />
                            <p>First Name:</p>
                            <input type="text" placeholder={user.firstName} onChange={(e) => { setNewFName(e.target.value) }} />
                            <p>Last Name:</p>
                            <input type="text" placeholder={user.lastName} onChange={(e) => { setNewLName(e.target.value) }} />
                            <p>Email Address:</p>
                            <input type="text" placeholder={user.email} onChange={(e) => { setNewEmail(e.target.value) }} />
                            <p>Age:</p>
                            <input type="text" placeholder={user.age} onChange={(e) => { setNewAge(e.target.value) }} />
                            <p>Gender:</p>
                            <input type="text" placeholder={user.gender} onChange={(e) => { setNewGender(e.target.value) }} />
                            <div class="buttonPosition">
                                <button onClick={() => {updateUser(user.id)}}>EDIT</button>
                                <button onClick={() => {deleteUser(user.id)}}>DELETE</button>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div class="profPageBG" />
            <div class="landingBG" />
        </div>
    );
}

export default Profile;