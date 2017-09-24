import { css } from "emotion";

export const alignItemsMdStart = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-align: start !important;
            align-items: flex-start !important;
        }
    }
`;
