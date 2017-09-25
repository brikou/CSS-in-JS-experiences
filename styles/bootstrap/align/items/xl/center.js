import { css } from "emotion";

export const alignItemsXlCenter = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-align: center !important;
            align-items: center !important;
        }
    }
`;
