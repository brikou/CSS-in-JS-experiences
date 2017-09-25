import { css } from "emotion";

export const alignContentMdAround = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-line-pack: distribute !important;
            align-content: space-around !important;
        }
    }
`;
