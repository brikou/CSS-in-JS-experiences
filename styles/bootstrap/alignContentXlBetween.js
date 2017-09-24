import { css } from "emotion";

export const alignContentXlBetween = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-line-pack: justify !important;
            align-content: space-between !important;
        }
    }
`;
