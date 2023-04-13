import styles from '../page.module.css'

export default function Login_Form(){
    return(
        <form  className={styles.form} action="/browse" method="post">
          <label for="username">Username: </label>
          <input type="text" id="name" name="username" /><br/>
          <label for="password">Password: </label>
          <input type="password" id="password" name="password" /><br/>
          <button type="Log In" className={styles.button_center}>Submit</button>
        </form>
    );
}