import { css } from "emotion";

export const justifyContentMdStart = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-pack: start !important;
            justify-content: flex-start !important;
        }
    }
`;
