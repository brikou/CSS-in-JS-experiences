import { css } from "emotion";

import { customControlIndicator } from "./control/indicator";
import { customControlInput } from "./control/input";

export const customRadio = css`
    & .${customControlIndicator} {
        border-radius: 50%;
    }

    & .${customControlInput}:checked ~ .${customControlIndicator} {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E");
    }
`;
