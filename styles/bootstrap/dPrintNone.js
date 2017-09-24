import { css } from "emotion";

export const dPrintNone = css`
    @media print {
        & {
            display: none !important;
        }
    }
`;
