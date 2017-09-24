import { css } from "emotion";

export const flexSmNowrap = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-wrap: nowrap !important;
            flex-wrap: nowrap !important;
        }
    }
`;
