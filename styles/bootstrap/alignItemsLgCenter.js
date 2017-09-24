import { css } from "emotion";

export const alignItemsLgCenter = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-align: center !important;
            align-items: center !important;
        }
    }
`;
