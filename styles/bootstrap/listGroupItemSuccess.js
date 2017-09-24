import { css } from "emotion";

import { active } from "./active";

export const listGroupItemSuccess = css`
    color: #155724;
    background-color: #c3e6cb;

    a&,
    button& {
        color: #155724;
    }

    a&:focus,
    a&:hover,
    button&:focus,
    button&:hover {
        color: #155724;
        background-color: #b1dfbb;
    }

    a&.${active}, button&.${active} {
        color: #fff;
        background-color: #155724;
        border-color: #155724;
    }
`;
