import { css } from "emotion";

export const justifyContentMdBetween = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-pack: justify !important;
            justify-content: space-between !important;
        }
    }
`;
