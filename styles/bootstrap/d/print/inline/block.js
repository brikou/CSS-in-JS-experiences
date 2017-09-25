import { css } from "emotion";

export const dPrintInlineBlock = css`
    display: none !important;

    @media print {
        & {
            display: inline-block !important;
        }
    }
`;
