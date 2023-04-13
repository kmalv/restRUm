import styles from '../page.module.css'
import Signup_Form from '../components/signup_form'

export default function Signup_Page() {
  return (
    <div>
      <title>Sign Up</title>
      <h1 className={styles.heading}>Sign Up Here!</h1>
      <Signup_Form/>
    </div>
  );
}