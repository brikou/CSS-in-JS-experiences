import { FormInline } from "./FormInline";
import { NavbarNav } from "./NavbarNav";
import { NavbarToggler } from "./NavbarToggler";

import { bgDark } from "../styles/bootstrap/bgDark";
import { collapse } from "../styles/bootstrap/collapse";
import { navbar } from "../styles/bootstrap/navbar";
import { navbarBrand } from "../styles/bootstrap/navbarBrand";
import { navbarCollapse } from "../styles/bootstrap/navbarCollapse";
import { navbarDark } from "../styles/bootstrap/navbarDark";
import { navbarExpandMd } from "../styles/bootstrap/navbarExpandMd";
import { fixedTop } from "../styles/bootstrap/fixedTop";

export const Navbar = () => (
    <nav
        className={`${navbar} ${navbarExpandMd} ${navbarDark} ${fixedTop} ${bgDark}`}
    >
        <a className={navbarBrand} href="/">
            Navbar
        </a>
        <NavbarToggler />
        <div className={`${collapse} ${navbarCollapse}`}>
            <NavbarNav />
            <FormInline />
        </div>
    </nav>
);
