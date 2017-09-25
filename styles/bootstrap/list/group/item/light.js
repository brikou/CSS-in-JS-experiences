import { css } from "emotion";

import { active } from "./../../../active";

export const listGroupItemLight = css`
    color: #818182;
    background-color: #fdfdfe;

    a&,
    button& {
        color: #818182;
    }

    a&:focus,
    a&:hover,
    button&:focus,
    button&:hover {
        color: #818182;
        background-color: #ececf6;
    }

    a&.${active}, button&.${active} {
        color: #fff;
        background-color: #818182;
        border-color: #818182;
    }
`;
