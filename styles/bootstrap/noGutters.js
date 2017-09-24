import { css } from "emotion";

import { col } from "./col";

export const noGutters = css`
    margin-right: 0;
    margin-left: 0;

    & > .${col}, & > [class*="col-"] {
        padding-right: 0;
        padding-left: 0;
    }
`;
