import { css } from "emotion";

export const flexXlWrapReverse = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-wrap: wrap-reverse !important;
            flex-wrap: wrap-reverse !important;
        }
    }
`;
