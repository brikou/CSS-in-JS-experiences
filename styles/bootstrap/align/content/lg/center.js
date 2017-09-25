import { css } from "emotion";

export const alignContentLgCenter = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-line-pack: center !important;
            align-content: center !important;
        }
    }
`;
