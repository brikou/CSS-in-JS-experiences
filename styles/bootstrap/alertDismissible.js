import { css } from "emotion";

import { close } from "./close";

export const alertDismissible = css`
    & .${close} {
        position: relative;
        top: -0.75rem;
        right: -1.25rem;
        padding: 0.75rem 1.25rem;
        color: inherit;
    }
`;
