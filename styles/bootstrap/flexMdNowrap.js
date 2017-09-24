import { css } from "emotion";

export const flexMdNowrap = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-wrap: nowrap !important;
            flex-wrap: nowrap !important;
        }
    }
`;
