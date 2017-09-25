import { css } from "emotion";

export const alignSelfXlAuto = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-item-align: auto !important;
            align-self: auto !important;
        }
    }
`;
