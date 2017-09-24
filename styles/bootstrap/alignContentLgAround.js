import { css } from "emotion";

export const alignContentLgAround = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-line-pack: distribute !important;
            align-content: space-around !important;
        }
    }
`;
