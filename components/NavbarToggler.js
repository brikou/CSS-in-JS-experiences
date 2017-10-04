import * as styles from "../styles/bootstrap.js";

export const NavbarToggler = () => (
    <button
        className={styles.navbarToggler()}
        onClick={() => {
            document
                .getElementsByClassName(styles.navbarCollapse())[0]
                .classList.toggle(styles.show());
        }}
        type="button"
    >
        <span className={styles.navbarTogglerIcon()} />
    </button>
);
