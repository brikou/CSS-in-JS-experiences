import { css } from "emotion";

export const flexMdRowReverse = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-direction: row-reverse !important;
            flex-direction: row-reverse !important;
        }
    }
`;
