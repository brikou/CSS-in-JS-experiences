import { css } from "emotion";

export const flexLgNowrap = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-wrap: nowrap !important;
            flex-wrap: nowrap !important;
        }
    }
`;
