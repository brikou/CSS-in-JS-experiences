import { css } from "emotion";

import { tableBordered } from "./bordered";
import { tableHover } from "./hover";
import { tableStriped } from "./striped";

export const tableInverse = css`
    color: #fff;
    background-color: #212529;

    & th,
    & td,
    & thead th {
        border-color: #32383e;
    }

    &.${tableBordered} {
        border: 0;
    }

    &.${tableStriped} tbody tr:nth-of-type(odd) {
        background-color: rgba(255, 255, 255, 0.05);
    }

    &.${tableHover} tbody tr:hover {
        background-color: rgba(255, 255, 255, 0.075);
    }
`;
