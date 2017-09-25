import { css } from "emotion";

export const alignContentMdCenter = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-line-pack: center !important;
            align-content: center !important;
        }
    }
`;
