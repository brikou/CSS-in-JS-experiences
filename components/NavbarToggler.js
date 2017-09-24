import { navbarCollapse } from "../styles/bootstrap/navbarCollapse";
import { navbarToggler } from "../styles/bootstrap/navbarToggler";
import { navbarTogglerIcon } from "../styles/bootstrap/navbarTogglerIcon";
import { show } from "../styles/bootstrap/show";

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
