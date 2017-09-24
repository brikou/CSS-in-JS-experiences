import { css } from "emotion";

export const justifyContentXlBetween = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-pack: justify !important;
            justify-content: space-between !important;
        }
    }
`;
