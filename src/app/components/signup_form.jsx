import styles from '../page.module.css'

export default function Signup_Form(){
    return(
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
                    placeholder="Email address"
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
    );
}
