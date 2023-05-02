"use client";

import styles from '../page.module.css'
import React, {useState} from 'react';
import {  signOut } from "firebase/auth";
import { auth } from '../../firebase';

export default function LogOut () {

    function onSubmit() {
        signOut(auth).then(() => {
            // Log out successful.
            alert("You have been successfully Logged Out.");
            window.location.href = '/browse';

        }).catch((error) => {
            console.log("Error on log out");
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage);
            alert("Error while logging out. Please try again! \n" + errorMessage);
        });
    }

    return (
        <div>
            <title>Log Out</title>
            <div>
                <h1 className={styles.heading}>Log Out</h1><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
            <div>
                <center>
                    Are you sure you wish to Log Out?
                <br/>
                <button
                    onClick={onSubmit}
                >
                    Log Out
                </button></center>
            </div>

        </div>
    )
}