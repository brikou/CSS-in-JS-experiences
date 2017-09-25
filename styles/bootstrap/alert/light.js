import { css } from "emotion";

import { alertLink } from "./link";

export const alertLight = css`
    color: #818182;
    background-color: #fefefe;
    border-color: #fdfdfe;

    & hr {
        border-top-color: #ececf6;
    }

    & .${alertLink} {
        color: #686868;
    }
`;
