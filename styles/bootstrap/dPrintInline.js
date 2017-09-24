import { css } from "emotion";

export const dPrintInline = css`
    display: none !important;

    @media print {
        & {
            display: inline !important;
        }
    }
`;
