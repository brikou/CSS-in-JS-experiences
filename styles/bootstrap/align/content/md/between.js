import { css } from "emotion";

export const alignContentMdBetween = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-line-pack: justify !important;
            align-content: space-between !important;
        }
    }
`;
