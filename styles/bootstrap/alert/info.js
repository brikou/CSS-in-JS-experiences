import { css } from "emotion";

import { alertLink } from "./link";

export const alertInfo = css`
    color: #0c5460;
    background-color: #d1ecf1;
    border-color: #bee5eb;

    & hr {
        border-top-color: #abdde5;
    }

    & .${alertLink} {
        color: #062c33;
    }
`;
