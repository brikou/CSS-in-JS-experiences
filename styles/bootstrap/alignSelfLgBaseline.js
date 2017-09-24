import { css } from "emotion";

export const alignSelfLgBaseline = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-item-align: baseline !important;
            align-self: baseline !important;
        }
    }
`;
