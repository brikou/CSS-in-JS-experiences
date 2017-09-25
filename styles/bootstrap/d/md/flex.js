import { css } from "emotion";

export const dMdFlex = css`
    @media (min-width: 768px) {
        & {
            display: -ms-flexbox !important;
            display: flex !important;
        }
    }
`;
