import { css } from "emotion";

import { inputGroup } from "./inputGroup";

export const btnToolbar = css`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-pack: start;
    justify-content: flex-start;

    & .${inputGroup} {
        width: auto;
    }
`;
