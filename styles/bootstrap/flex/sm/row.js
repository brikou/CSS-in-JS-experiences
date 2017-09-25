import { css } from "emotion";

export const flexSmRow = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-direction: row !important;
            flex-direction: row !important;
        }
    }
`;
