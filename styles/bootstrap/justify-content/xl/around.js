import { css } from "emotion";

export const justifyContentXlAround = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-pack: distribute !important;
            justify-content: space-around !important;
        }
    }
`;
