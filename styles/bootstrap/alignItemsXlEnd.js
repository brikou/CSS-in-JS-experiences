import { css } from "emotion";

export const alignItemsXlEnd = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-align: end !important;
            align-items: flex-end !important;
        }
    }
`;
