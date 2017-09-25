import { css } from "emotion";

import { btn } from "../../btn";

export const btnGroupSm = css`
    & > .${btn} {
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
        line-height: 1.5;
        border-radius: 0.2rem;
    }

    & > .${btn} + .dropdown-toggle-split {
        padding-right: 0.375rem;
        padding-left: 0.375rem;
    }
`;
