import { css } from "emotion";

export const flexSmColumn = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-direction: column !important;
            flex-direction: column !important;
        }
    }
`;
