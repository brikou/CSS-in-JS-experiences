import { css } from "emotion";

export const alignContentXlStretch = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-line-pack: stretch !important;
            align-content: stretch !important;
        }
    }
`;
