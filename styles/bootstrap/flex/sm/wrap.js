import { css } from "emotion";

export const flexSmWrap = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-wrap: wrap !important;
            flex-wrap: wrap !important;
        }
    }
`;
