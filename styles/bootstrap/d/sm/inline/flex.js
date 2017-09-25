import { css } from "emotion";

export const dSmInlineFlex = css`
    @media (min-width: 576px) {
        & {
            display: -ms-inline-flexbox !important;
            display: inline-flex !important;
        }
    }
`;
