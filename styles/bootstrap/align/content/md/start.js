import { css } from "emotion";

export const alignContentMdStart = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-line-pack: start !important;
            align-content: flex-start !important;
        }
    }
`;
