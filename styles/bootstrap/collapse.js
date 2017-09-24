import { css } from "emotion";

import { show } from "./show";

export const collapse = css`
    display: none;

    &.${show} {
        display: block;
    }

    tr&.${show} {
        display: table-row;
    }

    tbody&.${show} {
        display: table-row-group;
    }
`;
