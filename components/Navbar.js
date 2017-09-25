import { FormInline } from "./FormInline";
import { NavbarNav } from "./NavbarNav";
import { NavbarToggler } from "./NavbarToggler";

import { bgDark } from "../styles/bootstrap/bg/dark";
import { collapse } from "../styles/bootstrap/collapse";
import { navbar } from "../styles/bootstrap/navbar";
import { navbarBrand } from "../styles/bootstrap/navbar/brand";
import { navbarCollapse } from "../styles/bootstrap/navbar/collapse";
import { navbarDark } from "../styles/bootstrap/navbar/dark";
import { navbarExpandMd } from "../styles/bootstrap/navbar/expand/md";
import { fixedTop } from "../styles/bootstrap/fixed/top";

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
