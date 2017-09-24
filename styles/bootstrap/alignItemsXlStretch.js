import { css } from "emotion";

export const alignItemsXlStretch = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-align: stretch !important;
            align-items: stretch !important;
        }
    }
`;
