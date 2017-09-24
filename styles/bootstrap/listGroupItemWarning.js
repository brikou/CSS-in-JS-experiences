import { css } from "emotion";

import { active } from "./active";

export const listGroupItemWarning = css`
    color: #856404;
    background-color: #ffeeba;

    a&,
    button& {
        color: #856404;
    }

    a&:focus,
    a&:hover,
    button&:focus,
    button&:hover {
        color: #856404;
        background-color: #ffe8a1;
    }

    a&.${active}, button&.${active} {
        color: #fff;
        background-color: #856404;
        border-color: #856404;
    }
`;
