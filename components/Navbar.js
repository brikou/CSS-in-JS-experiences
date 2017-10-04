import { FormInline } from "./FormInline";
import { NavbarNav } from "./NavbarNav";
import { NavbarToggler } from "./NavbarToggler";
import * as styles from "../styles/bootstrap.js";

export const Navbar = () => (
    <nav
        className={`${styles.navbar()} ${styles.navbarExpandMd()} ${styles.navbarDark()} ${styles.fixedTop()} ${styles.bgDark()}`}
    >
        <a className={styles.navbarBrand()} href="/">
            Navbar
        </a>
        <NavbarToggler />
        <div className={`${styles.collapse()} ${styles.navbarCollapse()}`}>
            <NavbarNav />
            <FormInline />
        </div>
    </nav>
);
