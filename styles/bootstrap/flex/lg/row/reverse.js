import { css } from "emotion";

export const flexLgRowReverse = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-direction: row-reverse !important;
            flex-direction: row-reverse !important;
        }
    }
`;
