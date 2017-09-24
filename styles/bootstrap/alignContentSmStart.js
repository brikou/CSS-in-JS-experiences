import { css } from "emotion";

export const alignContentSmStart = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-line-pack: start !important;
            align-content: flex-start !important;
        }
    }
`;
