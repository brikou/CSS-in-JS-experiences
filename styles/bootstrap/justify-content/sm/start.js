import { css } from "emotion";

export const justifyContentSmStart = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-pack: start !important;
            justify-content: flex-start !important;
        }
    }
`;
