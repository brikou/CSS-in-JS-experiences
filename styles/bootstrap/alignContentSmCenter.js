import { css } from "emotion";

export const alignContentSmCenter = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-line-pack: center !important;
            align-content: center !important;
        }
    }
`;
