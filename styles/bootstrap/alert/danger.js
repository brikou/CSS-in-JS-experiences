import { css } from "emotion";

import { alertLink } from "./link";

export const alertDanger = css`
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;

    & hr {
        border-top-color: #f1b0b7;
    }

    & .${alertLink} {
        color: #491217;
    }
`;
