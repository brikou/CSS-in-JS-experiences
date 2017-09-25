import { css } from "emotion";

export const alignContentXlAround = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-line-pack: distribute !important;
            align-content: space-around !important;
        }
    }
`;
