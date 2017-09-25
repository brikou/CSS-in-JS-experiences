import { css } from "emotion";

import { active } from "../../../active";

export const listGroupItemDark = css`
    color: #1b1e21;
    background-color: #c6c8ca;

    a&,
    button& {
        color: #1b1e21;
    }

    a&:focus,
    a&:hover,
    button&:focus,
    button&:hover {
        color: #1b1e21;
        background-color: #b9bbbe;
    }

    a&.${active}, button&.${active} {
        color: #fff;
        background-color: #1b1e21;
        border-color: #1b1e21;
    }
`;
