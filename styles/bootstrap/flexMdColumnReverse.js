import { css } from "emotion";

export const flexMdColumnReverse = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-direction: column-reverse !important;
            flex-direction: column-reverse !important;
        }
    }
`;
