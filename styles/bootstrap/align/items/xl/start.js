import { css } from "emotion";

export const alignItemsXlStart = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-align: start !important;
            align-items: flex-start !important;
        }
    }
`;
