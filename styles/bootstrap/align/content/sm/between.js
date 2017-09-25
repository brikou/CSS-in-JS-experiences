import { css } from "emotion";

export const alignContentSmBetween = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-line-pack: justify !important;
            align-content: space-between !important;
        }
    }
`;
