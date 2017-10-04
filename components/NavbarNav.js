import * as styles from "../styles/bootstrap.js";

export const NavbarNav = () => (
    <ul className={`${styles.navbarNav()} ${styles.mrAuto()}`}>
        <li className={`nav-item ${styles.active()}`}>
            <a className={styles.navLink()} href="#">
                Home <span className={`${styles.srOnly()}`}>(current)</span>
            </a>
        </li>
        <li className="nav-item">
            <a className={styles.navLink()} href="#">
                Link
            </a>
        </li>
        <li className="nav-item">
            <a className={`${styles.navLink()} disabled`} href="#">
                Disabled
            </a>
        </li>
        <li className={`nav-item ${styles.dropdown()}`}>
            <a
                className={`${styles.navLink()} ${styles.dropdownToggle()}`}
                href="#"
                onClick={() => {
                    document
                        .getElementsByClassName(styles.dropdown())[0]
                        .classList.toggle(styles.show());
                    document
                        .getElementsByClassName(styles.dropdownMenu())[0]
                        .classList.toggle(styles.show());
                }}
            >
                Dropdown
            </a>
            <div className={styles.dropdownMenu()}>
                <a className={styles.dropdownItem()} href="#">
                    Action
                </a>
                <a className={styles.dropdownItem()} href="#">
                    Another action
                </a>
                <a className={styles.dropdownItem()} href="#">
                    Something else here
                </a>
            </div>
        </li>
    </ul>
);
