import { css } from "emotion";

import { dropdownMenu } from "./dropdownMenu";
import { navLink } from "./navLink";

export const navbarNav = css`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;

    & .${navLink} {
        padding-right: 0;
        padding-left: 0;
    }

    & .${dropdownMenu} {
        position: static;
        float: none;
    }
`;
