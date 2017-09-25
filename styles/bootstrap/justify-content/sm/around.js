import { css } from "emotion";

export const justifyContentSmAround = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-pack: distribute !important;
            justify-content: space-around !important;
        }
    }
`;