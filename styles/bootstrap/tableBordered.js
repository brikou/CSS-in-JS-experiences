import { css } from "emotion";

export const tableBordered = css`
    @media print {
        & th,
        & td {
            border: 1px solid #ddd !important;
        }
    }

    border: 1px solid #e9ecef;

    & th,
    & td {
        border: 1px solid #e9ecef;
    }

    & thead th,
    & thead td {
        border-bottom-width: 2px;
    }
`;
