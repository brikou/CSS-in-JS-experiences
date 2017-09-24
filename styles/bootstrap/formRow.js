import { css } from "emotion";

import { col } from "./col";

export const formRow = css`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -5px;
    margin-left: -5px;

    & > .${col}, & > [class*="col-"] {
        padding-right: 5px;
        padding-left: 5px;
    }
`;
