"use client";

import styles from '../page.module.css'
import React, {useState} from 'react';
//import { NavLink, useNavigate } from 'react-router-dom';
import {  getAuth, createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../../firebase';

export default function SignupForm () {
//    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');

    async function onSubmit (event) {
      console.log("Entered on submit")
      if (await validateForm() == false){
        return false;
      }
      console.log("Validated form")
      event.preventDefault()
      console.log("In on submit")
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("Signing in")
            const user = userCredential.user;
            console.log(user);
            alert("Sign In Successful! Welcome to RestRUm :)");
            window.location.href = '/login';
        })
        .catch((error) => {
            console.log("Error on submit")
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage);
            alert("Error while signing in. Please try again! \n" + errorMessage);
        });
    }

    function validateForm() {
      console.log("Email: ||" + email + "||");
      console.log("Password: ||" + password + "||");
      console.log("Confirm Password: ||" + confirm_password + "||");
      if (email == "" || password == "" || confirm_password == "") {
        alert("Fill out all fields correctly!");
        return false;
      }
      else if (password.length < 6) {
          alert("Password must have at least 6 characters.");
          return false;
      }
      else if(password != confirm_password){
        alert("Password and confirm password must match!");
        return false;
      }
    }

    return (
        <div>
            <title>Sign Up</title>
            <h1 className={styles.heading}>Sign Up Here!</h1>
            <form className={styles.form}>
                <div>
                    <label htmlFor="email-address">
                        Email address:&nbsp;
                    </label>
                    <input
                        type="email"
                        label="Email address"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="abc@example.com"
                    />
                </div>

                <div>
                    <label htmlFor="password">
                        Password:&nbsp;
                    </label>
                    <input
                        type="password"
                        label="Create password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Password"
                    />
                </div>

                <div>
                    <label htmlFor="confirm-password">
                        Confirm Password:&nbsp;
                    </label>
                    <input
                        type="password"
                        label="Confirm password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        placeholder="Confirm Password"
                    />
                </div>

                <button
                    type="submit"
                    onClick={onSubmit}
                    className={styles.button_center}
                >
                    Sign up
                </button>

            </form>
        </div>
    );
}