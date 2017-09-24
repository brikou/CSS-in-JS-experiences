import { css } from "emotion";

import { active } from "./active";

export const tabContent = css`
    & > .tab-pane {
        display: none;
    }

    & > .${active} {
        display: block;
    }
`;
