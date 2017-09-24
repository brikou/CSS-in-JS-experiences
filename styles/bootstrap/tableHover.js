import { css } from "emotion";

import { tableActive } from "./tableActive";
import { tableDanger } from "./tableDanger";
import { tableDark } from "./tableDark";
import { tableInfo } from "./tableInfo";
import { tableLight } from "./tableLight";
import { tablePrimary } from "./tablePrimary";
import { tableSecondary } from "./tableSecondary";
import { tableSuccess } from "./tableSuccess";
import { tableWarning } from "./tableWarning";

export const tableHover = css`
    & tbody tr:hover {
        background-color: rgba(0, 0, 0, 0.075);
    }

    & .${tablePrimary}:hover {
        background-color: #9fcdff;
    }

    & .${tablePrimary}:hover > td,
    & .${tablePrimary}:hover > th {
        background-color: #9fcdff;
    }

    & .${tableSecondary}:hover {
        background-color: #cfd2d6;
    }

    & .${tableSecondary}:hover > td,
    & .${tableSecondary}:hover > th {
        background-color: #cfd2d6;
    }

    & .${tableSuccess}:hover {
        background-color: #b1dfbb;
    }

    & .${tableSuccess}:hover > td,
    & .${tableSuccess}:hover > th {
        background-color: #b1dfbb;
    }

    & .${tableInfo}:hover {
        background-color: #abdde5;
    }

    & .${tableInfo}:hover > td,
    & .${tableInfo}:hover > th {
        background-color: #abdde5;
    }

    & .${tableWarning}:hover {
        background-color: #ffe8a1;
    }

    & .${tableWarning}:hover > td,
    & .${tableWarning}:hover > th {
        background-color: #ffe8a1;
    }

    & .${tableDanger}:hover {
        background-color: #f1b0b7;
    }

    & .${tableDanger}:hover > td,
    & .${tableDanger}:hover > th {
        background-color: #f1b0b7;
    }

    & .${tableLight}:hover {
        background-color: #ececf6;
    }

    & .${tableLight}:hover > td,
    & .${tableLight}:hover > th {
        background-color: #ececf6;
    }

    & .${tableDark}:hover {
        background-color: #b9bbbe;
    }

    & .${tableDark}:hover > td,
    & .${tableDark}:hover > th {
        background-color: #b9bbbe;
    }

    & .${tableActive}:hover {
        background-color: rgba(0, 0, 0, 0.075);
    }

    & .${tableActive}:hover > td,
    & .${tableActive}:hover > th {
        background-color: rgba(0, 0, 0, 0.075);
    }
`;
