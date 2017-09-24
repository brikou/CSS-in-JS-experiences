import { css } from "emotion";

export const flexSmRowReverse = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-direction: row-reverse !important;
            flex-direction: row-reverse !important;
        }
    }
`;
