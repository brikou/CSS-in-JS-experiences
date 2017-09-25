import { css } from "emotion";

import { active } from "../../../active";

export const listGroupItemInfo = css`
    color: #0c5460;
    background-color: #bee5eb;

    a&,
    button& {
        color: #0c5460;
    }

    a&:focus,
    a&:hover,
    button&:focus,
    button&:hover {
        color: #0c5460;
        background-color: #abdde5;
    }

    a&.${active}, button&.${active} {
        color: #fff;
        background-color: #0c5460;
        border-color: #0c5460;
    }
`;
