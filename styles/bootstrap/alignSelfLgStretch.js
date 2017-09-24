import { css } from "emotion";

export const alignSelfLgStretch = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-item-align: stretch !important;
            align-self: stretch !important;
        }
    }
`;
