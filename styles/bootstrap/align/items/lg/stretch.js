import { css } from "emotion";

export const alignItemsLgStretch = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-align: stretch !important;
            align-items: stretch !important;
        }
    }
`;
