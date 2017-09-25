import { css } from "emotion";

export const flexLgRow = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-direction: row !important;
            flex-direction: row !important;
        }
    }
`;
