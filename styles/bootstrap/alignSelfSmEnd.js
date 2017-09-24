import { css } from "emotion";

export const alignSelfSmEnd = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-item-align: end !important;
            align-self: flex-end !important;
        }
    }
`;
