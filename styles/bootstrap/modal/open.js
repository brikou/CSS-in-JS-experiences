import { css } from "emotion";

import { modal } from "../modal";

export const modalOpen = css`
    overflow: hidden;

    & .${modal} {
        overflow-x: hidden;
        overflow-y: auto;
    }
`;
