import { css } from "emotion";

import { fade } from "./fade";
import { modalDialog } from "./modalDialog";
import { show } from "./show";

export const modal = css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    display: none;
    overflow: hidden;
    outline: 0;

    &.${fade} .${modalDialog} {
        transition: -webkit-transform 0.3s ease-out;
        transition: transform 0.3s ease-out;
        transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
        -webkit-transform: translate(0, -25%);
        transform: translate(0, -25%);
    }

    &.${show} .${modalDialog} {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
    }
`;
