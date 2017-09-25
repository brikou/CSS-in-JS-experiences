import { css } from "emotion";

export const alignSelfLgEnd = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-item-align: end !important;
            align-self: flex-end !important;
        }
    }
`;
