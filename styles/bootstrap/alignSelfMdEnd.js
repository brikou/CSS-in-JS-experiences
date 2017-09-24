import { css } from "emotion";

export const alignSelfMdEnd = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-item-align: end !important;
            align-self: flex-end !important;
        }
    }
`;
