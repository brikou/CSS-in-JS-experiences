import { css } from "emotion";

export const alignContentSmStretch = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-line-pack: stretch !important;
            align-content: stretch !important;
        }
    }
`;
