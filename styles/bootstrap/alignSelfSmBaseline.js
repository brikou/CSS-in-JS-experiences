import { css } from "emotion";

export const alignSelfSmBaseline = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-item-align: baseline !important;
            align-self: baseline !important;
        }
    }
`;
