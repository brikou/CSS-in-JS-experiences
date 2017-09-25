import { css } from "emotion";

export const alignSelfMdBaseline = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-item-align: baseline !important;
            align-self: baseline !important;
        }
    }
`;
