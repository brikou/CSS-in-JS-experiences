import { css } from "emotion";

export const alignSelfSmStart = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-item-align: start !important;
            align-self: flex-start !important;
        }
    }
`;
