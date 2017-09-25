import { css } from "emotion";

export const alignItemsSmBaseline = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-align: baseline !important;
            align-items: baseline !important;
        }
    }
`;
