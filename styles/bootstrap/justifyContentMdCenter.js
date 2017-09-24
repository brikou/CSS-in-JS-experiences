import { css } from "emotion";

export const justifyContentMdCenter = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-pack: center !important;
            justify-content: center !important;
        }
    }
`;
