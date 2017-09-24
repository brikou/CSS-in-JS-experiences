import { css } from "emotion";

import { alertLink } from "./alertLink";

export const alertPrimary = css`
    color: #004085;
    background-color: #cce5ff;
    border-color: #b8daff;

    & hr {
        border-top-color: #9fcdff;
    }

    & .${alertLink} {
        color: #002752;
    }
`;
