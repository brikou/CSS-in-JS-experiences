import { css } from "emotion";

export const alignContentXlCenter = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-line-pack: center !important;
            align-content: center !important;
        }
    }
`;
