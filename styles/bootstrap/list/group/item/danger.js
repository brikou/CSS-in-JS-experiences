import { css } from "emotion";

import { active } from "./../../../active";

export const listGroupItemDanger = css`
    color: #721c24;
    background-color: #f5c6cb;

    a&,
    button& {
        color: #721c24;
    }

    a&:focus,
    a&:hover,
    button&:focus,
    button&:hover {
        color: #721c24;
        background-color: #f1b0b7;
    }

    a&.${active}, button&.${active} {
        color: #fff;
        background-color: #721c24;
        border-color: #721c24;
    }
`;
