import { css } from "emotion";

export const alignItemsMdBaseline = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-align: baseline !important;
            align-items: baseline !important;
        }
    }
`;
