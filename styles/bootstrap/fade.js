import { css } from "emotion";

import { show } from "./show";

export const fade = css`
    opacity: 0;
    transition: opacity 0.15s linear;

    &.${show} {
        opacity: 1;
    }
`;
