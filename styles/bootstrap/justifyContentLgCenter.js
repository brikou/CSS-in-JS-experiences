import { css } from "emotion";

export const justifyContentLgCenter = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-pack: center !important;
            justify-content: center !important;
        }
    }
`;
