import { css } from "emotion";

export const alignContentMdEnd = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-line-pack: end !important;
            align-content: flex-end !important;
        }
    }
`;
