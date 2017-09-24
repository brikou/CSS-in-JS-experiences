import { css } from "emotion";

export const table = css`
    @media print {
        & {
            border-collapse: collapse !important;
        }

        & td,
        & th {
            background-color: #fff !important;
        }
    }

    width: 100%;
    max-width: 100%;
    margin-bottom: 1rem;
    background-color: transparent;

    & th,
    & td {
        padding: 0.75rem;
        vertical-align: top;
        border-top: 1px solid #e9ecef;
    }

    & thead th {
        vertical-align: bottom;
        border-bottom: 2px solid #e9ecef;
    }

    & tbody + tbody {
        border-top: 2px solid #e9ecef;
    }

    & & {
        background-color: #fff;
    }
`;
