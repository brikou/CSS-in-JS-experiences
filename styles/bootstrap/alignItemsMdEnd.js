import { css } from "emotion";

export const alignItemsMdEnd = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-align: end !important;
            align-items: flex-end !important;
        }
    }
`;
