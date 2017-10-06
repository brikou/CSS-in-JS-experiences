import { FormInline } from "./FormInline";
import { NavbarNav } from "./NavbarNav";
import { NavbarToggler } from "./NavbarToggler";
import {
    bgDark,
    collapse,
    fixedTop,
    navbar,
    navbarBrand,
    navbarCollapse,
    navbarDark,
    navbarExpandMd,
} from "../styles/bootstrap.js";

export const Navbar = () => (
    <nav
        className={`${navbar} ${navbarExpandMd} ${navbarDark} ${fixedTop} ${bgDark}`}
        style={{ position: "fixed" }}
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
