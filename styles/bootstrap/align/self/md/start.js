import { css } from "emotion";

export const alignSelfMdStart = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-item-align: start !important;
            align-self: flex-start !important;
        }
    }
`;
