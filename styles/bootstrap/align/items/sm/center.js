import { css } from "emotion";

export const alignItemsSmCenter = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-align: center !important;
            align-items: center !important;
        }
    }
`;
