import { css } from "emotion";

export const justifyContentSmEnd = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-pack: end !important;
            justify-content: flex-end !important;
        }
    }
`;
