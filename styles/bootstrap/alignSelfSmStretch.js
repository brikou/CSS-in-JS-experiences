import { css } from "emotion";

export const alignSelfSmStretch = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-item-align: stretch !important;
            align-self: stretch !important;
        }
    }
`;
