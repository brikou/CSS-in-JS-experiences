import { css } from "emotion";

export const justifyContentXlStart = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-pack: start !important;
            justify-content: flex-start !important;
        }
    }
`;
