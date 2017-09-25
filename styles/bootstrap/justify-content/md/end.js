import { css } from "emotion";

export const justifyContentMdEnd = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-pack: end !important;
            justify-content: flex-end !important;
        }
    }
`;
