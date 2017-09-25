import { css } from "emotion";

import { alertLink } from "./link";

export const alertDark = css`
    color: #1b1e21;
    background-color: #d6d8d9;
    border-color: #c6c8ca;

    & hr {
        border-top-color: #b9bbbe;
    }

    & .${alertLink} {
        color: #040505;
    }
`;
