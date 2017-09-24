import { css } from "emotion";

export const alignSelfLgAuto = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-item-align: auto !important;
            align-self: auto !important;
        }
    }
`;
