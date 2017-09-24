import { css } from "emotion";

import { alertLink } from "./alertLink";

export const alertSecondary = css`
    color: #464a4e;
    background-color: #e7e8ea;
    border-color: #dddfe2;

    & hr {
        border-top-color: #cfd2d6;
    }

    & .${alertLink} {
        color: #2e3133;
    }
`;
