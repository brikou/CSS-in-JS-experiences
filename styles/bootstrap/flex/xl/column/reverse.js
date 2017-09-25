import { css } from "emotion";

export const flexXlColumnReverse = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-direction: column-reverse !important;
            flex-direction: column-reverse !important;
        }
    }
`;
