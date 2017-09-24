import { css } from "emotion";

export const alignContentXlStart = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-line-pack: start !important;
            align-content: flex-start !important;
        }
    }
`;
