import { css } from "emotion";

export const justifyContentXlCenter = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-pack: center !important;
            justify-content: center !important;
        }
    }
`;
