import { css } from "emotion";

export const alignContentMdStretch = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-line-pack: stretch !important;
            align-content: stretch !important;
        }
    }
`;
