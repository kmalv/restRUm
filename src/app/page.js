"use client";

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
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
