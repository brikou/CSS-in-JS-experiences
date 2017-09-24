import { css } from "emotion";

export const flexLgWrapReverse = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-wrap: wrap-reverse !important;
            flex-wrap: wrap-reverse !important;
        }
    }
`;
