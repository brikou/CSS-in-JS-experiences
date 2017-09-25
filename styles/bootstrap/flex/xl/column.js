import { css } from "emotion";

export const flexXlColumn = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-direction: column !important;
            flex-direction: column !important;
        }
    }
`;
