import { css } from "emotion";

import { customControlIndicator } from "./control/indicator";
import { customControlInput } from "./control/input";

export const customCheckbox = css`
    & .${customControlIndicator} {
        border-radius: 0.25rem;
    }

    & .${customControlInput}:checked ~ .${customControlIndicator} {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E");
    }

    & .${customControlInput}:indeterminate ~ .${customControlIndicator} {
        background-color: #007bff;
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E");
    }
`;
