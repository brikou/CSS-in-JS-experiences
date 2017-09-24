import { css } from "emotion";

export const flexMdWrap = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-wrap: wrap !important;
            flex-wrap: wrap !important;
        }
    }
`;
