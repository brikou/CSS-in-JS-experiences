import {
    active,
    dropdown,
    dropdownItem,
    dropdownMenu,
    dropdownToggle,
    mrAuto,
    navLink,
    navbarNav,
    show,
    srOnly,
} from "../styles/bootstrap.js";

export const NavbarNav = () => (
    <ul className={`${navbarNav} ${mrAuto}`}>
        <li className={`nav-item ${active}`}>
            <a className={navLink} href="#">
                Home <span className={`${srOnly}`}>(current)</span>
            </a>
        </li>
        <li className="nav-item">
            <a className={navLink} href="#">
                Link
            </a>
        </li>
        <li className="nav-item">
            <a className={`${navLink} disabled`} href="#">
                Disabled
            </a>
        </li>
        <li className={`nav-item ${dropdown}`}>
            <a
                className={`${navLink} ${dropdownToggle}`}
                href="#"
                onClick={() => {
                    document
                        .getElementsByClassName(dropdown)[0]
                        .classList.toggle(show);
                    document
                        .getElementsByClassName(dropdownMenu)[0]
                        .classList.toggle(show);
                }}
            >
                Dropdown
            </a>
            <div className={dropdownMenu}>
                <a className={dropdownItem} href="#">
                    Action
                </a>
                <a className={dropdownItem} href="#">
                    Another action
                </a>
                <a className={dropdownItem} href="#">
                    Something else here
                </a>
            </div>
        </li>
    </ul>
);
