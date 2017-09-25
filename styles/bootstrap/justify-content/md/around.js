import { css } from "emotion";

export const justifyContentMdAround = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-pack: distribute !important;
            justify-content: space-around !important;
        }
    }
`;
