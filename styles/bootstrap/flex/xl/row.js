import { css } from "emotion";

export const flexXlRow = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-direction: row !important;
            flex-direction: row !important;
        }
    }
`;
