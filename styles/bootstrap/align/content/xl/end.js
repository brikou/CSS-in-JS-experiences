import { css } from "emotion";

export const alignContentXlEnd = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-line-pack: end !important;
            align-content: flex-end !important;
        }
    }
`;
