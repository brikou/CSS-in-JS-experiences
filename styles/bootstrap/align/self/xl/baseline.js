import { css } from "emotion";

export const alignSelfXlBaseline = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-item-align: baseline !important;
            align-self: baseline !important;
        }
    }
`;
