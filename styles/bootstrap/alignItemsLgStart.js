import { css } from "emotion";

export const alignItemsLgStart = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-align: start !important;
            align-items: flex-start !important;
        }
    }
`;
