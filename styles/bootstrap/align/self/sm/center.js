import { css } from "emotion";

export const alignSelfSmCenter = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-item-align: center !important;
            align-self: center !important;
        }
    }
`;
