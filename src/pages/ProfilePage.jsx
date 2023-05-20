import { NavLink } from "react-router-dom";
import '../style/StyleSheet.css';
import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs } from "firebase/firestore";

function Profile() {
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");

    useEffect(() => {

        const getUsers = async() => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getUsers();
    }, []);

    return (
        <>
            <h1 class="userHeader">User Profile</h1>
            {users.map((user) => {
                return (
                    <div class="profiles">
                        <p>Username: {user.username}</p>
                        <p>First Name: {user.firstName}</p>
                        <p>Last Name: {user.lastName}</p>
                        <p>Email Address: {user.email}</p>
                        <p>Age: {user.age}</p>
                        <p>Gender: {user.gender}</p>
                    </div>
                );
            })}
            <div class="profPageBG" />
            <div class="landingBG" />
        </>
    );
}

export default Profile;