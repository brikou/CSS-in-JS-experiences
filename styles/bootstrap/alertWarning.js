import { css } from "emotion";

import { alertLink } from "./alertLink";

export const alertWarning = css`
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;

    & hr {
        border-top-color: #ffe8a1;
    }

    & .${alertLink} {
        color: #533f03;
    }
`;
