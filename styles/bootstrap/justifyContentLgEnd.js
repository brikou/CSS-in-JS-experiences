import { css } from "emotion";

export const justifyContentLgEnd = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-pack: end !important;
            justify-content: flex-end !important;
        }
    }
`;
