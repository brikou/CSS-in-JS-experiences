import { css } from "emotion";

import { customControl } from "./customControl";

export const customControlsStacked = css`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;

    & .${customControl} {
        margin-bottom: 0.25rem;
    }

    & .${customControl} + .${customControl} {
        margin-left: 0;
    }
`;
