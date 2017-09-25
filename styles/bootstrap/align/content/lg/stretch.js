import { css } from "emotion";

export const alignContentLgStretch = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-line-pack: stretch !important;
            align-content: stretch !important;
        }
    }
`;
