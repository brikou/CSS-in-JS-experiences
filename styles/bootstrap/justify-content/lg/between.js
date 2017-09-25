import { css } from "emotion";

export const justifyContentLgBetween = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-pack: justify !important;
            justify-content: space-between !important;
        }
    }
`;
