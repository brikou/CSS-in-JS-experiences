import { css } from "emotion";

export const alignContentSmAround = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-line-pack: distribute !important;
            align-content: space-around !important;
        }
    }
`;
