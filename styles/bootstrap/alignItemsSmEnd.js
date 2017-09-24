import { css } from "emotion";

export const alignItemsSmEnd = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-align: end !important;
            align-items: flex-end !important;
        }
    }
`;
