import { css } from "emotion";

import { container } from "./container";
import { containerFluid } from "./containerFluid";
import { dropdownMenu } from "./dropdownMenu";
import { navLink } from "./navLink";
import { navbarCollapse } from "./navbarCollapse";
import { navbarNav } from "./navbarNav";
import { navbarToggler } from "./navbarToggler";

export const navbarExpand = css`
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -ms-flex-pack: start;
    justify-content: flex-start;

    & > .${container}, & > .${containerFluid} {
        padding-right: 0;
        padding-left: 0;
    }

    & .${navbarNav} {
        -ms-flex-direction: row;
        flex-direction: row;
    }

    & .${navbarNav} .${dropdownMenu} {
        position: absolute;
    }

    & .${navbarNav} .dropdown-menu-right {
        right: 0;
        left: auto;
    }

    & .${navbarNav} .${navLink} {
        padding-right: 0.5rem;
        padding-left: 0.5rem;
    }

    & > .${container}, & > .${containerFluid} {
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
    }

    & .${navbarCollapse} {
        display: -ms-flexbox !important;
        display: flex !important;
    }

    & .${navbarToggler} {
        display: none;
    }
`;
