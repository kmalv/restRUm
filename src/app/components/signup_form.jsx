import styles from '../page.module.css'

export default function Signup_Form(){
    return(
        <form  className={styles.form} action="/login" method="post">
          <label for="username">Username: </label>
          <input type="text" id="name" name="username" /><br/>
          <label for="email_id">Email ID: </label>
          <input type="text" id="email_id" name="email_id" /><br/>
          <label for="password">Password: </label>
          <input type="text" id="password" name="password" /><br/>
          <label for="confirm_password">Confirm Password: </label>
          <input type="password" id="confirm_password" name="confirm_password" /><br/>
          <button type="submit" className={styles.button_center}>Submit</button>
        </form>
    );
}
