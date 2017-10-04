import * as styles from "../styles/bootstrap.js";

export const FormInline = () => (
    <form className={`${styles.formInline()} ${styles.my2()} ${styles.myLg0()}`}>
        <input
            className={`${styles.formControl()} ${styles.mrSm2()}`}
            type="text"
            placeholder="Search"
            aria-label="Search"
        />
        <button className={`${styles.btn()} ${styles.btnOutlineSuccess()} ${styles.my2()} ${styles.mySm0()}`} type="submit">
            Search
        </button>
    </form>
);
