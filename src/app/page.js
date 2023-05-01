"use client";

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
//import Page from './browse/page.js'
//import Signup from './signup/page.js'
//import Login from './login/page.js'
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
//    <Router>
//      <div>
//        <section>
//            <Routes>
//                <Route path="/browse" element={<Page/>}/>
//                <Route path="/signup" element={<Signup/>}/>
//                <Route path="/login" element={<Login/>}/>
//            </Routes>
//        </section>
//      </div>
//    </Router>
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Link to browse page: <a href ="/browse">Here</a>
        </p>
        <p>
          SIGN UP PAGE: <a href ="/signup">Here</a>
        </p>
        <p>
          LOGIN PAGE: <a href ="/login">Here</a>
        </p>
      </div>
    </main>
  )
}
