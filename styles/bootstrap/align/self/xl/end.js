import { css } from "emotion";

export const alignSelfXlEnd = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-item-align: end !important;
            align-self: flex-end !important;
        }
    }
`;
