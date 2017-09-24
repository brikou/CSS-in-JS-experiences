import { css } from "emotion";

export const dXlInlineFlex = css`
    @media (min-width: 1200px) {
        & {
            display: -ms-inline-flexbox !important;
            display: inline-flex !important;
        }
    }
`;
