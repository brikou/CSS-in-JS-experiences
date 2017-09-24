import { css } from "emotion";

export const dPrintBlock = css`
    display: none !important;

    @media print {
        & {
            display: block !important;
        }
    }
`;
