import { css } from "emotion";

import { alertLink } from "./alertLink";

export const alertSuccess = css`
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;

    & hr {
        border-top-color: #b1dfbb;
    }

    & .${alertLink} {
        color: #0b2e13;
    }
`;
