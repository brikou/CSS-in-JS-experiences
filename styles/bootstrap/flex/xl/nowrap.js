import { css } from "emotion";

export const flexXlNowrap = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-wrap: nowrap !important;
            flex-wrap: nowrap !important;
        }
    }
`;
