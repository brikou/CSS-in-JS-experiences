import { css } from "emotion";

export const flexMdRow = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-direction: row !important;
            flex-direction: row !important;
        }
    }
`;
