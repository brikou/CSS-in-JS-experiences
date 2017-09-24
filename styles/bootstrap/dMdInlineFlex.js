import { css } from "emotion";

export const dMdInlineFlex = css`
    @media (min-width: 768px) {
        & {
            display: -ms-inline-flexbox !important;
            display: inline-flex !important;
        }
    }
`;
