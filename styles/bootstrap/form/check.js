import { css } from "emotion";

import { formCheckLabel } from "./check/label";

export const formCheck = css`
    position: relative;
    display: block;
    margin-bottom: 0.5rem;

    &.disabled .${formCheckLabel} {
        color: #868e96;
    }
`;
