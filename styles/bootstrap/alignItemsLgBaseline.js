import { css } from "emotion";

export const alignItemsLgBaseline = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-align: baseline !important;
            align-items: baseline !important;
        }
    }
`;
