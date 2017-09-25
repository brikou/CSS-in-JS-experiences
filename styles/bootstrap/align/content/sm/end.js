import { css } from "emotion";

export const alignContentSmEnd = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-line-pack: end !important;
            align-content: flex-end !important;
        }
    }
`;
