"use client";

import styles from '../page.module.css'
import React, {useState} from 'react';
import { getAuth } from "firebase/auth";
import { auth } from '../../firebase';

export default function UserProfile () {

    const user = auth.currentUser;
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      const displayName = user.displayName;
      const email = user.email;
      console.log(displayName);
      console.log(email);
    }

    return (
        <div>
            <title>Profile</title>
            <h1 className={styles.heading}>Your User Profile</h1>
        </div>
    )
}