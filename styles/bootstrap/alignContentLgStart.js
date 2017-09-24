import { css } from "emotion";

export const alignContentLgStart = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-line-pack: start !important;
            align-content: flex-start !important;
        }
    }
`;
