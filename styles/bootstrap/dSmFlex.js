import { css } from "emotion";

export const dSmFlex = css`
    @media (min-width: 576px) {
        & {
            display: -ms-flexbox !important;
            display: flex !important;
        }
    }
`;
