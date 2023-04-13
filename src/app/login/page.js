import styles from '../page.module.css'
import Login_Form from '../components/login_form'

export default function IndexPage() {
  return (
    <div>
      <title>Log In</title>
      <h1 className={styles.heading}>Log In</h1>
      <Login_Form/>
    </div>
  )
}