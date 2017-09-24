import { css } from "emotion";

import { card } from "./card";

export const cardColumns = css`
    & .${card} {
        margin-bottom: 0.75rem;
    }

    @media (min-width: 576px) {
        & {
            -webkit-column-count: 3;
            column-count: 3;
            -webkit-column-gap: 1.25rem;
            column-gap: 1.25rem;
        }

        & .${card} {
            display: inline-block;
            width: 100%;
        }
    }
`;
