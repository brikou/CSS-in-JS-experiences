import { css } from "emotion";

export const flexMdWrapReverse = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-wrap: wrap-reverse !important;
            flex-wrap: wrap-reverse !important;
        }
    }
`;
