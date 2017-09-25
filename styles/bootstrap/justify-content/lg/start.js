import { css } from "emotion";

export const justifyContentLgStart = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-pack: start !important;
            justify-content: flex-start !important;
        }
    }
`;
