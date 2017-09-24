import { css } from "emotion";

export const alignItemsSmStretch = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-align: stretch !important;
            align-items: stretch !important;
        }
    }
`;
