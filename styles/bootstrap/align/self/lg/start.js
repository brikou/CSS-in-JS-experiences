import { css } from "emotion";

export const alignSelfLgStart = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-item-align: start !important;
            align-self: flex-start !important;
        }
    }
`;
