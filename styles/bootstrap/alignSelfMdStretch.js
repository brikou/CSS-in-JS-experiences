import { css } from "emotion";

export const alignSelfMdStretch = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-item-align: stretch !important;
            align-self: stretch !important;
        }
    }
`;
