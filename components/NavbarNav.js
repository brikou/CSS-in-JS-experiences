import { active } from "../styles/bootstrap/active";
import { dropdown } from "../styles/bootstrap/dropdown";
import { dropdownItem } from "../styles/bootstrap/dropdown/item";
import { dropdownMenu } from "../styles/bootstrap/dropdown/menu";
import { dropdownToggle } from "../styles/bootstrap/dropdown/toggle";
import { mrAuto } from "../styles/bootstrap/mr/auto";
import { navLink } from "../styles/bootstrap/nav/link";
import { navbarNav } from "../styles/bootstrap/navbar/nav";
import { show } from "../styles/bootstrap/show";
import { srOnly } from "../styles/bootstrap/sr-only";

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
