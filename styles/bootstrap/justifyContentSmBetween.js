import { css } from "emotion";

export const justifyContentSmBetween = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-pack: justify !important;
            justify-content: space-between !important;
        }
    }
`;
