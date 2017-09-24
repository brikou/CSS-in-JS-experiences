import { css } from "emotion";

export const alignItemsSmStart = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-align: start !important;
            align-items: flex-start !important;
        }
    }
`;
