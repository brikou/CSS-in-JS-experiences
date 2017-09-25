import { css } from "emotion";

export const flexSmColumnReverse = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-direction: column-reverse !important;
            flex-direction: column-reverse !important;
        }
    }
`;
