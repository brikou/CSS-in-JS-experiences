import { css } from "emotion";

export const flexSmWrapReverse = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-wrap: wrap-reverse !important;
            flex-wrap: wrap-reverse !important;
        }
    }
`;
