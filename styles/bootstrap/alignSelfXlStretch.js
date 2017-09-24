import { css } from "emotion";

export const alignSelfXlStretch = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-item-align: stretch !important;
            align-self: stretch !important;
        }
    }
`;
