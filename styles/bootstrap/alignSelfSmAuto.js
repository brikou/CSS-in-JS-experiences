import { css } from "emotion";

export const alignSelfSmAuto = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-item-align: auto !important;
            align-self: auto !important;
        }
    }
`;
