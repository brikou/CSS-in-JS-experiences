import { css } from "emotion";

export const justifyContentXlEnd = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-pack: end !important;
            justify-content: flex-end !important;
        }
    }
`;
