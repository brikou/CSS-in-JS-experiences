import { css } from "emotion";

export const flexXlWrap = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-wrap: wrap !important;
            flex-wrap: wrap !important;
        }
    }
`;
