import { css } from "emotion";

export const alignContentLgEnd = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-line-pack: end !important;
            align-content: flex-end !important;
        }
    }
`;
