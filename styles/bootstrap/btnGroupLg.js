import { css } from "emotion";

import { btn } from "./btn";

export const btnGroupLg = css`
    & > .${btn} {
        padding: 0.5rem 1rem;
        font-size: 1.25rem;
        line-height: 1.5;
        border-radius: 0.3rem;
    }

    & > .${btn} + .dropdown-toggle-split {
        padding-right: 0.75rem;
        padding-left: 0.75rem;
    }
`;
