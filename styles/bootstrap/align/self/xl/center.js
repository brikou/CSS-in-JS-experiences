import { css } from "emotion";

export const alignSelfXlCenter = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-item-align: center !important;
            align-self: center !important;
        }
    }
`;
