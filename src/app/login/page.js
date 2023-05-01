"use client";

import styles from '../page.module.css'
import Login_Form from '../components/login_form'
import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../../firebase';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function onSubmit (event) {
        console.log("Entered log in");
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("Checking user");
            const user = userCredential.user;
            console.log(user);
            alert("Log In Successful! Feel free to browse RestRUm :)");
            window.location.href = '/browse';
        })
        .catch((error) => {
            console.log("Error on log in");
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage);
            alert("Error while logging in. Please try again! \n" + errorMessage);
        });

    }
    return (
        <div>
          <title>Log In</title>
          <h1 className={styles.heading}>Log In</h1>
          <form  className={styles.form}>
            <label htmlFor="email">
                Email:&nbsp;
            </label>
            <input
                type="email"
                label="Email address"
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="abc@example.com" /><br/>
            <label htmlFor="password">
                Password:
            </label>
            <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password" /><br/>
            <button
                type="submit"
                onClick={onSubmit}
                className={styles.button_center}
            >
                Log In
            </button><br/>
            <p className={styles.description}>
                  Don't have an account?
                  <a href='/signup'>Sign Up Here</a>
            </p>
            <p className={styles.description}>
                  Wish to browse first?
                  <a href='/browse'>Browse Here</a>
            </p>
          </form>

        </div>
    )
}