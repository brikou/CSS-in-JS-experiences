import { css } from "emotion";

export const alignSelfLgCenter = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-item-align: center !important;
            align-self: center !important;
        }
    }
`;
