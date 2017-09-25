import { css } from "emotion";

import { dropdownMenu } from "../dropdown/menu";
import { navLink } from "../nav/link";

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
