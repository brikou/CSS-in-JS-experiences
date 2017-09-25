import { css } from "emotion";

import { formCheckLabel } from "./label";

export const formCheckInline = css`
    display: inline-block;

    & .${formCheckLabel} {
        vertical-align: middle;
    }

    & + & {
        margin-left: 0.75rem;
    }
`;
