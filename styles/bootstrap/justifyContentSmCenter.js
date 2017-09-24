import { css } from "emotion";

export const justifyContentSmCenter = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-pack: center !important;
            justify-content: center !important;
        }
    }
`;
