import { css } from "emotion";

export const alignSelfMdCenter = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-item-align: center !important;
            align-self: center !important;
        }
    }
`;
