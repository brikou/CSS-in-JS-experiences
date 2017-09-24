import { css } from "emotion";

export const alignItemsLgEnd = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-align: end !important;
            align-items: flex-end !important;
        }
    }
`;
