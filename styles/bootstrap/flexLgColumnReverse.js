import { css } from "emotion";

export const flexLgColumnReverse = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-direction: column-reverse !important;
            flex-direction: column-reverse !important;
        }
    }
`;
