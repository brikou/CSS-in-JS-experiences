import { css } from "emotion";

export const alignSelfXlStart = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-item-align: start !important;
            align-self: flex-start !important;
        }
    }
`;
