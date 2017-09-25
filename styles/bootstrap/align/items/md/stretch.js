import { css } from "emotion";

export const alignItemsMdStretch = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-align: stretch !important;
            align-items: stretch !important;
        }
    }
`;
