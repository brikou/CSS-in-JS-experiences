import { css } from "emotion";

export const alignContentLgBetween = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-line-pack: justify !important;
            align-content: space-between !important;
        }
    }
`;
