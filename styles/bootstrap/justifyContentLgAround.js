import { css } from "emotion";

export const justifyContentLgAround = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-pack: distribute !important;
            justify-content: space-around !important;
        }
    }
`;
