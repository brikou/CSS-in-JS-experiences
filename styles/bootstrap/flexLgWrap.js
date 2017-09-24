import { css } from "emotion";

export const flexLgWrap = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-wrap: wrap !important;
            flex-wrap: wrap !important;
        }
    }
`;
