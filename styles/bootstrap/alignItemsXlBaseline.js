import { css } from "emotion";

export const alignItemsXlBaseline = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-align: baseline !important;
            align-items: baseline !important;
        }
    }
`;
