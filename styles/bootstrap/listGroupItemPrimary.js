import { css } from "emotion";

import { active } from "./active";

export const listGroupItemPrimary = css`
    color: #004085;
    background-color: #b8daff;

    a&,
    button& {
        color: #004085;
    }

    a&:focus,
    a&:hover,
    button&:focus,
    button&:hover {
        color: #004085;
        background-color: #9fcdff;
    }

    a&.${active}, button&.${active} {
        color: #fff;
        background-color: #004085;
        border-color: #004085;
    }
`;
