import { css } from "emotion";

import { fade } from "./fade";
import { show } from "./show";

export const modalBackdrop = css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: #000;

    &.${fade} {
        opacity: 0;
    }

    &.${show} {
        opacity: 0.5;
    }
`;
