"use client";

import styles from '../page.module.css'
import React, {useState} from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase';

export default function UserProfile () {

    // Checks if there is a user logged in
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is logged in
        document.getElementById("email").innerHTML = user.email;
      } else {
        // User is not logged in
        console.log("no user");
      }
    });

    return (
        <div>
            <title>Profile</title>
            <h1 className={styles.heading}>Your User Profile</h1><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            Email Address:
            <p id="email">(email)</p>
        </div>
    )
}