import { css } from "emotion";

export const flexXlRowReverse = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-direction: row-reverse !important;
            flex-direction: row-reverse !important;
        }
    }
`;
