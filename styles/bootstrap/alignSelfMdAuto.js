import { css } from "emotion";

export const alignSelfMdAuto = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-item-align: auto !important;
            align-self: auto !important;
        }
    }
`;
