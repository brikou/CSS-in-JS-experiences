import { css } from "emotion";

import { dropdownMenu } from "./dropdown/menu";
import { dropdownToggle } from "./dropdown/toggle";

export const dropup = css`
    position: relative;

    & .${dropdownMenu} {
        margin-top: 0;
        margin-bottom: 0.125rem;
    }

    & .${dropdownToggle}::after {
        border-top: 0;
        border-bottom: 0.3em solid;
    }
`;
