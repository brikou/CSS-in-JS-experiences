import {
    navbarCollapse,
    navbarToggler,
    navbarTogglerIcon,
    show,
} from "../styles/bootstrap.js";

export const NavbarToggler = () => (
    <button
        className={navbarToggler}
        onClick={() => {
            document
                .getElementsByClassName(navbarCollapse)[0]
                .classList.toggle(show);
        }}
        type="button"
    >
        <span className={navbarTogglerIcon} />
    </button>
);
