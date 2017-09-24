import { css } from "emotion";

import { active } from "./active";

export const listGroupItemSecondary = css`
    color: #464a4e;
    background-color: #dddfe2;

    a&,
    button& {
        color: #464a4e;
    }

    a&:focus,
    a&:hover,
    button&:focus,
    button&:hover {
        color: #464a4e;
        background-color: #cfd2d6;
    }

    a&.${active}, button&.${active} {
        color: #fff;
        background-color: #464a4e;
        border-color: #464a4e;
    }
`;
