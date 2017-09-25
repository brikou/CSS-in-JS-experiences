import { css } from "emotion";

import { container } from "./../../container";
import { containerFluid } from "./../../container/fluid";
import { dropdownMenu } from "./../../dropdown/menu";
import { navLink } from "./../../nav/link";
import { navbarCollapse } from "./../collapse";
import { navbarNav } from "./../nav";
import { navbarToggler } from "./../toggler";

export const navbarExpandSm = css`
    @media (max-width: 575px) {
        & > .${container}, & > .${containerFluid} {
            padding-right: 0;
            padding-left: 0;
        }
    }

    @media (min-width: 576px) {
        & {
            -ms-flex-direction: row;
            flex-direction: row;
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
            -ms-flex-pack: start;
            justify-content: flex-start;
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
    }
`;
