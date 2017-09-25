import { navbarCollapse } from "../styles/bootstrap/navbar/collapse";
import { navbarToggler } from "../styles/bootstrap/navbar/toggler";
import { navbarTogglerIcon } from "../styles/bootstrap/navbar/toggler/icon";
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
